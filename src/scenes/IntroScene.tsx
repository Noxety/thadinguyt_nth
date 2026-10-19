import { motion } from "framer-motion";
import { Sparkles, Volume2 } from "lucide-react";
import { experience } from "../data/experience";
import { Eyebrow, LotusDivider, OrnateButton } from "../components/Ornaments";

type IntroSceneProps = {
  onBegin: () => void;
  soundEnabled: boolean;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function IntroScene({ onBegin, soundEnabled }: IntroSceneProps) {
  return (
    <section className="scene scene--intro" aria-labelledby="intro-title">
      <div className="scene__inner intro-layout">
        <motion.div
          className="intro-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Eyebrow>{experience.intro.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1 id="intro-title" className="intro-title" variants={item}>
            <span className="intro-title__line">{experience.intro.titleLead}</span>{" "}
            <span className="intro-title__love">{experience.intro.titleAccent}</span>
          </motion.h1>

          <motion.p className="intro-message" variants={item}>
            {experience.intro.message}
          </motion.p>

          <motion.div variants={item} className="intro-divider">
            <LotusDivider />
          </motion.div>

          <motion.div className="intro-actions" variants={item}>
            <OrnateButton
              onClick={onBegin}
              icon={<Sparkles size={15} strokeWidth={1.6} />}
              className="intro-button"
            >
              {experience.intro.button}
            </OrnateButton>
            <p className="intro-sound-note">
              <Volume2 size={12} strokeWidth={1.6} aria-hidden="true" />
              {soundEnabled
                ? "The night is already alive with sound."
                : "Best with sound · you can quiet the night anytime."}
            </p>
          </motion.div>

          <motion.div className="intro-footnote" variants={item} aria-hidden="true">
            <span />
            <p>Seven little chapters · one moonlit night</p>
            <span />
          </motion.div>
        </motion.div>

        <div className="intro-side-ornament" aria-hidden="true">
          <span className="intro-side-ornament__star">✦</span>
          <span className="intro-side-ornament__line" />
          <span className="intro-side-ornament__text">under the same moon</span>
          <span className="intro-side-ornament__line" />
          <span className="intro-side-ornament__star">✦</span>
        </div>
      </div>
    </section>
  );
}
