import { useEffect, useRef, useState, useCallback } from "react";
import type { SceneId } from "../types";

type AudioGraph = {
  context: AudioContext;
  master: GainNode;
  chimeBus: GainNode;
  sources: AudioScheduledSourceNode[];
  chimeTimer: number;
};

const SOUND_PREFERENCE_KEY = "thadingyut-sound";

const CHIME_NOTES = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];

export function useAmbientSound(scene: SceneId) {
  const [enabled, setEnabled] = useState(false);
  const [available, setAvailable] = useState(true);
  const graphRef = useRef<AudioGraph | null>(null);

  const playChime = useCallback((volume = 0.035) => {
    const graph = graphRef.current;
    if (!graph) return;
    const { context, chimeBus } = graph;
    if (context.state === "suspended") {
      void context.resume();
    }
    const now = context.currentTime + 0.05;
    const note = CHIME_NOTES[Math.floor(Math.random() * CHIME_NOTES.length)];
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const pan = context.createStereoPanner();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(note, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);
    pan.pan.setValueAtTime(Math.random() * 1.4 - 0.7, now);
    oscillator.connect(gain).connect(pan).connect(chimeBus);
    oscillator.start(now);
    oscillator.stop(now + 5);
  }, []);

  const scheduleChimes = useCallback((graph: AudioGraph) => {
    graph.chimeTimer = window.setInterval(
      () => {
        playChime(0.02 + Math.random() * 0.018);
      },
      9000 + Math.random() * 5000,
    );
  }, [playChime]);

  const enable = useCallback(async () => {
    if (graphRef.current) return true;
    const AudioCtor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioCtor) {
      setAvailable(false);
      return false;
    }

    try {
      const context = new AudioCtor();
      await context.resume();

      const master = context.createGain();
      master.gain.setValueAtTime(0.0001, context.currentTime);
      master.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 3);
      master.connect(context.destination);

      const chimeBus = context.createGain();
      chimeBus.gain.setValueAtTime(0.75, context.currentTime);
      chimeBus.connect(master);

      const padFilter = context.createBiquadFilter();
      padFilter.type = "lowpass";
      padFilter.frequency.setValueAtTime(760, context.currentTime);
      padFilter.Q.value = 0.7;
      padFilter.connect(master);

      const sources: AudioScheduledSourceNode[] = [];
      const padNotes = [
        { frequency: 130.81, gain: 0.032, type: "sine" as OscillatorType },
        { frequency: 196, gain: 0.025, type: "sine" as OscillatorType },
        { frequency: 261.63, gain: 0.022, type: "triangle" as OscillatorType },
        { frequency: 329.63, gain: 0.014, type: "sine" as OscillatorType },
      ];

      padNotes.forEach((note, index) => {
        const oscillator = context.createOscillator();
        const noteGain = context.createGain();
        const drift = context.createOscillator();
        const driftGain = context.createGain();

        oscillator.type = note.type;
        oscillator.frequency.setValueAtTime(note.frequency, context.currentTime);
        oscillator.detune.setValueAtTime(index % 2 === 0 ? -4 : 5, context.currentTime);

        noteGain.gain.setValueAtTime(0.0001, context.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(
          note.gain,
          context.currentTime + 4 + index * 0.7,
        );
        noteGain.gain.setValueAtTime(note.gain, context.currentTime + 9);

        drift.frequency.value = 0.055 + index * 0.017;
        driftGain.gain.value = 0.006;

        drift.connect(driftGain).connect(noteGain.gain);
        oscillator.connect(noteGain).connect(padFilter);
        oscillator.start();
        drift.start();
        sources.push(oscillator, drift);
      });

      // A whisper of air, like a breeze moving through lanterns.
      const noiseBuffer = context.createBuffer(
        1,
        context.sampleRate * 4,
        context.sampleRate,
      );
      const noiseData = noiseBuffer.getChannelData(0);
      for (let index = 0; index < noiseData.length; index += 1) {
        noiseData[index] = Math.random() * 2 - 1;
      }
      const noise = context.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;
      const noiseFilter = context.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.value = 420;
      noiseFilter.Q.value = 0.45;
      const noiseGain = context.createGain();
      noiseGain.gain.value = 0.006;
      noise.connect(noiseFilter).connect(noiseGain).connect(master);
      noise.start();
      sources.push(noise);

      const graph: AudioGraph = {
        context,
        master,
        chimeBus,
        sources,
        chimeTimer: 0,
      };
      graphRef.current = graph;
      scheduleChimes(graph);
      setEnabled(true);
      window.localStorage.setItem(SOUND_PREFERENCE_KEY, "on");
      return true;
    } catch {
      setAvailable(false);
      return false;
    }
  }, [scheduleChimes]);

  const disable = useCallback(() => {
    const graph = graphRef.current;
    if (!graph) return;
    graphRef.current = null;
    window.clearInterval(graph.chimeTimer);
    const { context, master, sources } = graph;
    const now = context.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
    window.setTimeout(() => {
      sources.forEach((source) => {
        try {
          source.stop();
        } catch {
          // The source may already have stopped.
        }
      });
      void context.close();
    }, 720);
    setEnabled(false);
    window.localStorage.setItem(SOUND_PREFERENCE_KEY, "off");
  }, []);

  const toggle = useCallback(() => {
    if (graphRef.current) {
      disable();
    } else {
      window.localStorage.removeItem(SOUND_PREFERENCE_KEY);
      void enable();
    }
  }, [disable, enable]);

  /** Sound joins automatically after the first deliberate tap, unless muted before. */
  const beginWithSound = useCallback(() => {
    if (graphRef.current) return;
    if (window.localStorage.getItem(SOUND_PREFERENCE_KEY) === "off") return;
    void enable();
  }, [enable]);

  useEffect(() => {
    return () => {
      const graph = graphRef.current;
      if (!graph) return;
      window.clearInterval(graph.chimeTimer);
      graph.sources.forEach((source) => {
        try {
          source.stop();
        } catch {
          // Already stopped.
        }
      });
      void graph.context.close();
      graphRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (scene === "intro" || !graphRef.current) return;
    const timeout = window.setTimeout(() => playChime(0.018), 380);
    return () => window.clearTimeout(timeout);
  }, [scene, playChime]);

  return {
    enabled,
    available,
    toggle,
    playChime,
    beginWithSound,
  };
}
