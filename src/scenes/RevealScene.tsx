import { motion } from "framer-motion";
import { ArrowRight, Feather, Sparkles } from "lucide-react";
import type { Gift } from "../types";
import { experience } from "../data/experience";
import { RevealArtwork } from "../components/RevealArtwork";
import { Eyebrow, LotusDivider, OrnateButton } from "../components/Ornaments";

type RevealSceneProps = {
  gift: Gift;
  onContinue: () => void;
};

const typeNote = {
  physical: "A little something, waiting for you",
  experience: "A moment, not a thing",
  message: "Words made to be kept",
} as const;

export function RevealScene({ gift, onContinue }: RevealSceneProps) {
  return (
    <section
      className={`scene scene--reveal reveal-theme--${gift.theme}`}
      aria-labelledby="reveal-title"
    >
      <div className="reveal-sparkles" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="scene__inner reveal-layout">
        <motion.div
          className="reveal-art-column"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.05, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <RevealArtwork gift={gift} />
        </motion.div>

        <motion.div
          className="reveal-copy"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <Eyebrow>{experience.reveal.eyebrow}</Eyebrow>
          </motion.div>

          <motion.p
            className="reveal-gift-name"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            Mystery {gift.number} · {gift.name}
          </motion.p>

          <motion.h2
            id="reveal-title"
            className="reveal-title"
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(5px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {gift.title}
          </motion.h2>

          <motion.p
            className="reveal-message"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
            }}
          >
            {gift.message}
          </motion.p>

          <motion.div
            className="reveal-type-note"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <Sparkles size={13} strokeWidth={1.5} aria-hidden="true" />
            {typeNote[gift.revealType]}
          </motion.div>

          {gift.claimInstructions && (
            <motion.div
              className="reveal-claim"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <span className="reveal-claim__label">A little note</span>
              <p>{gift.claimInstructions}</p>
            </motion.div>
          )}

          <motion.div
            className="reveal-divider"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.7 } },
            }}
            aria-hidden="true"
          >
            <LotusDivider />
          </motion.div>

          <motion.div
            className="reveal-actions"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <OrnateButton
              onClick={onContinue}
              icon={<Feather size={15} strokeWidth={1.6} />}
            >
              {experience.reveal.nextButton}
            </OrnateButton>
            <span className="reveal-actions__note">
              <ArrowRight size={12} strokeWidth={1.5} aria-hidden="true" />
              {experience.reveal.note}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
