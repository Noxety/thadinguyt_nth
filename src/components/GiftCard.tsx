import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import type { Gift } from "../types";
import { GiftBoxArt } from "./GiftBoxArt";

type GiftCardProps = {
  gift: Gift;
  selected: boolean;
  dimmed: boolean;
  opening: boolean;
  onSelect: (gift: Gift) => void;
};

export function GiftCard({
  gift,
  selected,
  dimmed,
  opening,
  onSelect,
}: GiftCardProps) {
  return (
    <motion.button
      type="button"
      className="gift-card"
      data-theme={gift.theme}
      data-selected={selected}
      data-dimmed={dimmed}
      data-opening={opening}
      onClick={() => onSelect(gift)}
      aria-pressed={selected}
      aria-label={`Choose ${gift.name}. ${gift.teaser}`}
      animate={{
        y: selected ? -9 : 0,
        scale: selected ? 1.015 : dimmed ? 0.975 : 1,
        opacity: dimmed ? 0.43 : 1,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      disabled={opening}
    >
      <span className="gift-card__wash" aria-hidden="true" />
      <span className="gift-card__number">{gift.number}</span>

      <span className="gift-card__art">
        <GiftBoxArt theme={gift.theme} />
      </span>

      <span className="gift-card__copy">
        <span className="gift-card__kicker">
          <Sparkles size={10} strokeWidth={1.5} aria-hidden="true" />
          Mystery {gift.number}
        </span>
        <span className="gift-card__name">{gift.name}</span>
        <span className="gift-card__teaser">{gift.teaser}</span>
      </span>

      <span className="gift-card__choose" aria-hidden="true">
        {selected ? (
          <>
            <span className="gift-card__check">
              <Check size={12} strokeWidth={2} />
            </span>
            Chosen
          </>
        ) : (
          "Choose"
        )}
      </span>

      <span className="gift-card__corner gift-card__corner--tl" aria-hidden="true" />
      <span className="gift-card__corner gift-card__corner--br" aria-hidden="true" />
    </motion.button>
  );
}
