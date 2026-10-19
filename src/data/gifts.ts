import type { Gift } from "../types";

/**
 * ─────────────────────────────────────────────────────────────
 *  THE THREE MYSTERY BOXES
 *  These are intentionally gentle placeholders. Replace the
 *  title, message, and (optionally) image / claimInstructions
 *  when the real gifts are decided.
 *
 *  To add a photo: drop it in `src/assets/`, import it here,
 *  and set `image` to the imported asset.
 * ─────────────────────────────────────────────────────────────
 */
export const gifts: Gift[] = [
  {
    id: "moonlight",
    name: "The Moonlight Box",
    theme: "moonlight",
    revealType: "message",
    title: "Moonlight, Kept for You",
    message:
      "Some gifts are not things. They are quiet moments — the kind that arrive softly, like moonlight through a window. This one is a little promise to slow down and notice the beautiful parts of us.",
    teaser: "For quiet hearts and silver skies.",
    number: "I",
    enabled: true,
  },
  {
    id: "lantern",
    name: "The Golden Lantern Box",
    theme: "lantern",
    revealType: "experience",
    title: "A Night We Haven't Lived Yet",
    message:
      "A little time set aside just for you — no hurry, no plans except being together while the lights glow. The date, the place, and every small detail are ours to write.",
    teaser: "For an evening lit by golden light.",
    number: "II",
    enabled: true,
  },
  {
    id: "love",
    name: "The Love Letter Box",
    theme: "love",
    revealType: "message",
    title: "A Letter With Your Name on It",
    message:
      "This one isn't in a box at all. It's a few words I wanted you to keep, for the ordinary nights and the full-moon ones. Words that mean more when they're read slowly.",
    teaser: "For the words that live in the heart.",
    number: "III",
    enabled: true,
  },
];

export const enabledGifts = gifts.filter((gift) => gift.enabled);
