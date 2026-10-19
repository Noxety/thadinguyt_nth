import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import type { Gift } from "../types";
import { enabledGifts } from "../data/gifts";
import { experience } from "../data/experience";
import { Eyebrow, OrnateButton } from "../components/Ornaments";
import { GiftCard } from "../components/GiftCard";
import { GiftBoxArt } from "../components/GiftBoxArt";

type GiftsSceneProps = {
  onOpenGift: (gift: Gift) => void;
  onChime?: () => void;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function GiftsScene({ onOpenGift, onChime }: GiftsSceneProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [opening, setOpening] = useState(false);
  const openTimer = useRef<number | null>(null);

  const selectedGift = enabledGifts.find((gift) => gift.id === selectedId) ?? null;

  useEffect(() => {
    return () => {
      if (openTimer.current) window.clearTimeout(openTimer.current);
    };
  }, []);

  const handleSelect = (gift: Gift) => {
    if (opening) return;
    setSelectedId(gift.id);
    onChime?.();
  };

  const handleOpen = () => {
    if (!selectedGift || opening) return;
    setOpening(true);
    onChime?.();
    openTimer.current = window.setTimeout(() => onOpenGift(selectedGift), 1350);
  };

  return (
    <section
      className={`scene scene--gifts ${selectedGift ? "scene--gifts-selected" : ""}`}
      aria-labelledby="gifts-title"
    >
      <div className={`scene__inner gifts-layout ${selectedGift ? "gifts-layout--selected" : ""}`}>
        <motion.div
          className="gifts-header"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Eyebrow>{experience.gifts.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h2 id="gifts-title" className="gifts-title" variants={item}>
            {experience.gifts.title}
          </motion.h2>
          <motion.p className="gifts-message" variants={item}>
            {experience.gifts.message}
          </motion.p>
        </motion.div>

        <motion.div
          className={`gifts-grid gifts-grid--${enabledGifts.length}`}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {enabledGifts.map((gift) => (
            <GiftCard
              key={gift.id}
              gift={gift}
              selected={selectedId === gift.id}
              dimmed={Boolean(selectedId) && selectedId !== gift.id}
              opening={opening}
              onSelect={handleSelect}
            />
          ))}
        </motion.div>

        <div className="gift-actions">
          <AnimatePresence mode="wait" initial={false}>
            {selectedGift ? (
              <motion.div
                key="selected"
                className="gift-actions__panel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.32 }}
              >
                <p className="gift-actions__helper">
                  <Sparkles size={12} strokeWidth={1.5} aria-hidden="true" />
                  {experience.gifts.selectedHelper}
                </p>
                <div className="gift-actions__buttons">
                  <OrnateButton
                    onClick={handleOpen}
                    disabled={opening}
                    icon={<ArrowRight size={15} strokeWidth={1.7} />}
                  >
                    {opening ? "Opening…" : experience.gifts.button}
                  </OrnateButton>
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => setSelectedId(null)}
                    disabled={opening}
                  >
                    <RotateCcw size={13} strokeWidth={1.6} aria-hidden="true" />
                    {experience.gifts.changeButton}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.p
                key="helper"
                className="gift-actions__empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span aria-hidden="true">✦</span>
                {experience.gifts.helper}
              </motion.p>
            )}
          </AnimatePresence>
          <span className="gift-actions__note">
            Tap a box to look closer · every choice is a lovely one
          </span>
        </div>
      </div>

      <AnimatePresence>
        {opening && selectedGift && (
          <motion.div
            className="gift-opening"
            data-theme={selectedGift.theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            role="status"
            aria-live="polite"
          >
            <div className="gift-opening__scrim" />
            <motion.div
              className="gift-opening__rays"
              initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
              animate={{ opacity: 1, scale: 1.1, rotate: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="gift-opening__art"
              initial={{ scale: 0.82, y: 20, opacity: 0 }}
              animate={{ scale: 1.06, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <GiftBoxArt theme={selectedGift.theme} floating={false} />
            </motion.div>
            <motion.p
              className="gift-opening__copy"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {experience.gifts.opening}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
