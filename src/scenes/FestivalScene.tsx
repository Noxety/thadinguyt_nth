import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { experience } from "../data/experience";
import { Eyebrow, LotusDivider, OrnateButton } from "../components/Ornaments";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function FestivalScene({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="scene scene--festival" aria-labelledby="festival-title">
      <div className="scene__inner festival-layout">
        <motion.div
          className="festival-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Eyebrow>{experience.festival.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2 id="festival-title" className="festival-title" variants={item}>
            {experience.festival.titleLead}{" "}
            <em>{experience.festival.titleEmphasis}</em>
            <span className="festival-title__last"> {experience.festival.titleTail}</span>
          </motion.h2>

          <motion.p className="festival-message" variants={item}>
            {experience.festival.message}
          </motion.p>

          <motion.div className="festival-aside" variants={item}>
            <span className="festival-aside__spark" aria-hidden="true">
              <Sparkles size={16} strokeWidth={1.4} />
            </span>
            <p>
              {experience.festival.aside}
              <strong>{experience.festival.emphasis}</strong>
            </p>
          </motion.div>

          <motion.div variants={item} className="festival-actions">
            <OrnateButton
              onClick={onContinue}
              icon={<ArrowRight size={15} strokeWidth={1.7} />}
            >
              {experience.festival.button}
            </OrnateButton>
          </motion.div>

          <motion.div variants={item} className="festival-divider" aria-hidden="true">
            <LotusDivider />
          </motion.div>
        </motion.div>

        <motion.div
          className="festival-seal"
          initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.45 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="86" stroke="currentColor" strokeOpacity=".4" />
            <circle cx="100" cy="100" r="76" stroke="currentColor" strokeOpacity=".16" strokeDasharray="2 6" />
            <path d="M100 30v18M100 152v18M30 100h18M152 100h18" stroke="currentColor" strokeOpacity=".26" />
            <path d="M100 72c-17-24-46-12-46 13 0 24 28 39 46 55 18-16 46-31 46-55 0-25-29-37-46-13Z" stroke="currentColor" strokeOpacity=".65" strokeWidth="1.1" />
            <path d="M100 87v44M91 102c4 3 6 6 9 11 3-5 5-8 9-11" stroke="currentColor" strokeOpacity=".44" />
            <path d="m100 43 3.1 9.3 9.3 3.1-9.3 3.1-3.1 9.3-3.1-9.3-9.3-3.1 9.3-3.1L100 43Z" fill="currentColor" fillOpacity=".5" />
            <circle cx="100" cy="100" r="5" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".35" />
          </svg>
          <span className="festival-seal__label">Thadingyut</span>
        </motion.div>

        <div className="festival-floating-words" aria-hidden="true">
          <span>full moon</span>
          <span>golden lights</span>
          <span>you &amp; me</span>
        </div>
      </div>
    </section>
  );
}
