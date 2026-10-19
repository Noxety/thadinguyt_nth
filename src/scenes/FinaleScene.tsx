import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Sparkles, Star } from "lucide-react";
import { experience } from "../data/experience";
import { Eyebrow, LotusDivider, OrnateButton } from "../components/Ornaments";
import { SkyLantern } from "../components/SkyLantern";

type FinaleSceneProps = {
  onReplay: () => void;
  onChime?: () => void;
};

const launchParticles = Array.from({ length: 16 }, (_, index) => ({
  x: `${(index - 7.5) * 9}px`,
  delay: `${(index % 5) * 0.07}s`,
  size: `${index % 4 === 0 ? 4 : 2}px`,
}));

const heartStars = [
  [64, 97],
  [77, 66],
  [105, 47],
  [133, 52],
  [150, 79],
  [167, 52],
  [195, 47],
  [223, 66],
  [236, 97],
  [226, 132],
  [197, 159],
  [150, 195],
  [103, 159],
  [74, 132],
];

export function FinaleScene({ onReplay, onChime }: FinaleSceneProps) {
  const [launched, setLaunched] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const revealTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (revealTimer.current) window.clearTimeout(revealTimer.current);
    };
  }, []);

  const handleLaunch = () => {
    if (launched) return;
    setLaunched(true);
    onChime?.();
    revealTimer.current = window.setTimeout(() => {
      setRevealed(true);
      onChime?.();
    }, 1550);
  };

  return (
    <section className="scene scene--finale" aria-labelledby="finale-title">
      <div className="finale-glow" aria-hidden="true" />

      <div className="scene__inner finale-layout">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="wish"
              className="finale-wish"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16, filter: "blur(5px)" }}
              transition={{ duration: 0.7 }}
            >
              <div className="finale-lantern-stage" aria-hidden="true">
                <div className="finale-lantern-halo" />
                <SkyLantern
                  className="finale-lantern"
                  muted={!launched}
                  style={
                    {
                      "--lantern-size": "clamp(104px, 23vw, 176px)",
                      position: "relative",
                      left: "auto",
                      top: "auto",
                    } as CSSProperties
                  }
                />
                <span className="finale-lantern-stage__star finale-lantern-stage__star--one">
                  <Star size={9} fill="currentColor" strokeWidth={1} />
                </span>
                <span className="finale-lantern-stage__star finale-lantern-stage__star--two">
                  <Star size={7} fill="currentColor" strokeWidth={1} />
                </span>
                <span className="finale-lantern-stage__star finale-lantern-stage__star--three">
                  <Star size={11} fill="currentColor" strokeWidth={1} />
                </span>
              </div>

              <Eyebrow>{experience.finale.eyebrow}</Eyebrow>
              <h2 id="finale-title" className="finale-title">
                {experience.finale.title}
              </h2>
              <p className="finale-message">{experience.finale.message}</p>
              <div className="finale-actions">
                <OrnateButton
                  onClick={handleLaunch}
                  disabled={launched}
                  icon={<Sparkles size={15} strokeWidth={1.6} />}
                >
                  {launched ? "Your wish is rising…" : experience.finale.button}
                </OrnateButton>
              </div>
              <p className="finale-hint">One tap. One wish. One sky full of possibilities.</p>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              className="finale-revealed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="heart-constellation"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 300 230" fill="none">
                  <defs>
                    <radialGradient id="constellationGlow" cx="0" cy="0" r="1" gradientTransform="translate(150 108) rotate(90) scale(130 100)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F5C96A" stopOpacity=".11" />
                      <stop offset="1" stopColor="#F5C96A" stopOpacity="0" />
                    </radialGradient>
                    <filter id="starGlow" x="-200%" y="-200%" width="500%" height="500%">
                      <feGaussianBlur stdDeviation="2.6" />
                    </filter>
                  </defs>
                  <circle cx="150" cy="108" r="118" fill="url(#constellationGlow)" />
                  <path
                    d="M150 195C104 165 64 132 64 97c0-29 22-49 47-49 17 0 30 10 39 25 9-15 22-25 39-25 25 0 47 20 47 49 0 35-40 68-86 98Z"
                    stroke="#F5C96A"
                    strokeOpacity=".25"
                    strokeDasharray="1 8"
                  />
                  <motion.path
                    d="M64 97 77 66 105 47 133 52 150 79 167 52 195 47 223 66 236 97 226 132 197 159 150 195 103 159 74 132 64 97Z"
                    stroke="#F5C96A"
                    strokeWidth="1.05"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.75 }}
                    transition={{ duration: 2.1, delay: 0.25, ease: "easeInOut" }}
                  />
                  {heartStars.map(([cx, cy], index) => (
                    <g key={`${cx}-${cy}`}>
                      <circle cx={cx} cy={cy} r="7" fill="#F5C96A" fillOpacity=".14" filter="url(#starGlow)" />
                      <motion.circle
                        cx={cx}
                        cy={cy}
                        r={index % 3 === 0 ? 2.2 : 1.4}
                        fill="#FFF8E8"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.95, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.45 }}
                      />
                    </g>
                  ))}
                  <motion.circle
                    cx="150"
                    cy="108"
                    r="42"
                    stroke="#F5C96A"
                    strokeOpacity=".18"
                    strokeDasharray="1 7"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "150px 108px" }}
                  />
                </svg>
              </motion.div>

              <Eyebrow>{experience.finale.releasedEyebrow}</Eyebrow>
              <h2 id="finale-title" className="finale-title finale-title--revealed">
                {experience.finale.releasedTitle}
              </h2>
              <p className="finale-message finale-message--revealed">
                {experience.finale.releasedMessage}
              </p>

              <div className="finale-signature">
                <LotusDivider />
                <p>{experience.finale.finalLine}</p>
              </div>

              <div className="finale-actions">
                <OrnateButton
                  variant="ghost"
                  onClick={onReplay}
                  icon={<RotateCcw size={14} strokeWidth={1.6} />}
                >
                  {experience.finale.replayButton}
                </OrnateButton>
              </div>

              <p className="finale-footer">{experience.footer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {launched && (
          <motion.div
            className="lantern-launch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          >
            <motion.div
              className="lantern-launch__bloom"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.4, 1.8, 2.6] }}
              transition={{ duration: 2.8, ease: "easeOut" }}
            />
            <motion.div
              className="lantern-launch__lantern"
              initial={{ y: 0, x: 0, scale: 1, opacity: 1, rotate: 0 }}
              animate={{ y: "-64svh", x: 38, scale: 0.54, opacity: 0, rotate: 5 }}
              transition={{ duration: 4.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <SkyLantern
                style={
                  {
                    "--lantern-size": "clamp(108px, 24vw, 184px)",
                    position: "relative",
                    left: "auto",
                    top: "auto",
                  } as CSSProperties
                }
              />
            </motion.div>
            <div className="lantern-launch__particles">
              {launchParticles.map((particle, index) => (
                <span
                  key={index}
                  style={
                    {
                      "--particle-x": particle.x,
                      "--particle-delay": particle.delay,
                      "--particle-size": particle.size,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
