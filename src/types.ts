export type GiftRevealType = "physical" | "experience" | "message";

export type GiftTheme = "moonlight" | "lantern" | "love";

export interface Gift {
  id: string;
  name: string;
  theme: GiftTheme;
  revealType: GiftRevealType;
  title: string;
  message: string;
  image?: string;
  claimInstructions?: string;
  enabled: boolean;
  /** Short line shown on the mystery box card. */
  teaser: string;
  /** Roman numeral shown on the box. */
  number: string;
}

export type SceneId =
  | "intro"
  | "secret"
  | "festival"
  | "gifts"
  | "reveal"
  | "letter"
  | "finale";
