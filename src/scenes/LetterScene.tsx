import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Feather, Heart, Mail, Shuffle } from "lucide-react";
import { experience } from "../data/experience";
import {
  CornerFlourish,
  Eyebrow,
  LotusDivider,
  OrnateButton,
} from "../components/Ornaments";

const letter = experience.letter;

/** Picks one item at random — the letter is never written the same way twice. */
function pickOne<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function LetterScene({ onContinue }: { onContinue: () => void }) {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);
  const openTimer = useRef<number | null>(null);
  const letterRef = useRef<HTMLElement>(null);
  const [variantIndex, setVariantIndex] = useState(() =>
    Math.floor(Math.random() * letter.variants.length),
  );
  const [message] = useState(() => pickOne(letter.messages));
  const [envelopeName] = useState(() => pickOne(letter.envelopeNames));
  const [status, setStatus] = useState("");
  const variant = letter.variants[variantIndex];

  useEffect(() => {
    return () => {
      if (openTimer.current) window.clearTimeout(openTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!opened) return;
    const timeout = window.setTimeout(() => {
      letterRef.current?.focus({ preventScroll: true });
    }, 500);
    return () => window.clearTimeout(timeout);
  }, [opened]);

  const handleOpen = () => {
    if (opening || opened) return;
    setOpening(true);
    openTimer.current = window.setTimeout(() => {
      setOpening(false);
      setOpened(true);
    }, 680);
  };

  /** Writes a different letter in the same envelope. */
  const handleReroll = () => {
    const total = letter.variants.length;
    if (total < 2) return;
    setVariantIndex((current) => {
      const offset = 1 + Math.floor(Math.random() * (total - 1));
      return (current + offset) % total;
    });
    setStatus("A different letter is written now.");
    window.requestAnimationFrame(() => {
      const node = letterRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      if (rect.top < 96 || rect.bottom > window.innerHeight) {
        window.scrollTo({
          top: rect.top + window.scrollY - 96,
          behavior: "smooth",
        });
      }
    });
  };

  return (
    <section className="scene scene--letter" aria-labelledby="letter-heading">
      <div className="letter-glow" aria-hidden="true" />
      <div className="scene__inner letter-layout">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="sealed"
              className="letter-sealed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18, filter: "blur(6px)", transition: { duration: 0.3 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>{letter.eyebrow}</Eyebrow>
              <h2 id="letter-heading" className="letter-title">
                {letter.title}
              </h2>
              <p className="letter-message">{message}</p>

              <button
                type="button"
                className={`sealed-envelope ${opening ? "is-opening" : ""}`}
                onClick={handleOpen}
                disabled={opening}
                aria-label={`Break the wax seal and open your letter. ${envelopeName}.`}
              >
                <span className="envelope-wrap" aria-hidden="true">
                  <span className="envelope">
                    <span className="envelope__body" />
                    <span className="envelope__letter">
                      <span className="envelope__letter-lines" />
                    </span>
                    <span className="envelope__flap" />
                    <span className="envelope__front" />
                    <span className="envelope__seal">
                      <Heart size={18} strokeWidth={1.5} />
                    </span>
                    <span className="envelope__address">{envelopeName}</span>
                    <span className="envelope__grain" />
                  </span>
                </span>
                <span className="sealed-envelope__cta">
                  <Mail size={14} strokeWidth={1.6} aria-hidden="true" />
                  {opening ? "Opening…" : letter.button}
                </span>
              </button>

              <p className="letter-hint">A little patience, a little paper, a lot of love.</p>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              className="letter-opened"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 id="letter-heading" className="sr-only">
                A letter for you
              </h2>
              <Eyebrow>{letter.openedEyebrow}</Eyebrow>

              <article
                className="love-letter"
                ref={letterRef}
                tabIndex={-1}
                aria-label="A love letter"
              >
                <span className="love-letter__glow" aria-hidden="true" />
                <CornerFlourish position="top-left" />
                <CornerFlourish position="top-right" />
                <CornerFlourish position="bottom-left" />
                <CornerFlourish position="bottom-right" />

                <div className="love-letter__crest" aria-hidden="true">
                  <span />
                  <Heart size={14} strokeWidth={1.2} />
                  <span />
                </div>

                <p className="love-letter__to">{letter.to}</p>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={variantIndex}
                    className="love-letter__variant"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="love-letter__body">
                      {variant.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="love-letter__signoff">
                      <p>{variant.signoff}</p>
                      <span className="love-letter__signature">
                        {letter.signature}
                        <Feather size={16} strokeWidth={1.2} aria-hidden="true" />
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="love-letter__divider" aria-hidden="true">
                  <LotusDivider />
                </div>

                <p className="love-letter__date" aria-hidden="true">
                  Thadingyut · under a full moon
                </p>

                <div className="love-letter__reroll">
                  <button
                    type="button"
                    className="letter-reroll"
                    onClick={handleReroll}
                  >
                    <Shuffle size={13} strokeWidth={1.6} aria-hidden="true" />
                    {letter.rerollLabel}
                  </button>
                  <span className="sr-only" role="status">
                    {status}
                  </span>
                </div>
              </article>

              <div className="letter-actions">
                <OrnateButton
                  onClick={onContinue}
                  icon={<ArrowRight size={15} strokeWidth={1.7} />}
                >
                  {letter.nextButton}
                </OrnateButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
