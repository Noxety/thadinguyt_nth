import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import type { Gift, SceneId } from "./types";
import { Atmosphere } from "./components/Atmosphere";
import { SiteHeader } from "./components/SiteHeader";
import { useAmbientSound } from "./hooks/useAmbientSound";
import { IntroScene } from "./scenes/IntroScene";
import { SecretScene } from "./scenes/SecretScene";
import { FestivalScene } from "./scenes/FestivalScene";
import { GiftsScene } from "./scenes/GiftsScene";
import { RevealScene } from "./scenes/RevealScene";
import { LetterScene } from "./scenes/LetterScene";
import { FinaleScene } from "./scenes/FinaleScene";

const sceneTitles: Record<SceneId, string> = {
  intro: "For My Love",
  secret: "A Little Secret",
  festival: "Your Little Festival",
  gifts: "Your Surprise",
  reveal: "Your Gift, Revealed",
  letter: "A Letter for You",
  finale: "One Last Wish",
};

export default function App() {
  const [scene, setScene] = useState<SceneId>("intro");
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const audio = useAmbientSound(scene);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = `${sceneTitles[scene]} · Thadingyut`;
  }, [scene]);

  const beginJourney = () => {
    audio.beginWithSound();
    setScene("secret");
  };

  const handleOpenGift = (gift: Gift) => {
    setSelectedGift(gift);
    setScene("reveal");
  };

  const replay = () => {
    setSelectedGift(null);
    setScene("intro");
  };

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to the experience
      </a>

      <Atmosphere scene={scene} />

      <SiteHeader
        scene={scene}
        soundEnabled={audio.enabled}
        soundAvailable={audio.available}
        onToggleSound={audio.toggle}
      />

      <main id="main-content" tabIndex={-1} className="app-main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={scene}
            className="scene-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
          >
            {scene === "intro" && (
              <IntroScene onBegin={beginJourney} soundEnabled={audio.enabled} />
            )}

            {scene === "secret" && (
              <SecretScene onUnlock={() => setScene("festival")} />
            )}

            {scene === "festival" && (
              <FestivalScene onContinue={() => setScene("gifts")} />
            )}

            {scene === "gifts" && (
              <GiftsScene
                onOpenGift={handleOpenGift}
                onChime={() => audio.playChime(0.026)}
              />
            )}

            {scene === "reveal" && selectedGift && (
              <RevealScene
                gift={selectedGift}
                onContinue={() => setScene("letter")}
              />
            )}

            {scene === "letter" && (
              <LetterScene onContinue={() => setScene("finale")} />
            )}

            {scene === "finale" && (
              <FinaleScene
                onReplay={replay}
                onChime={() => audio.playChime(0.04)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="sr-only" aria-live="polite">
        {sceneTitles[scene]} scene.
      </div>
    </MotionConfig>
  );
}
