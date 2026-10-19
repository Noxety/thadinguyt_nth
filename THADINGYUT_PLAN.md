# 🌕 Thadingyut Surprise — Project Specification

## 1. Project Overview

Build a romantic, interactive Thadingyut Festival website as a special
gift for my girlfriend.

The website should feel like a magical journey through a traditional
Myanmar Thadingyut night, combining cultural decorations, romantic
messages, beautiful animations, and interactive gift reveals.

### Primary Goals

- Create a memorable, romantic experience.
- Prioritize mobile responsiveness and touch interactions.
- Use a traditional Thadingyut theme with a modern, magical atmosphere.
- Introduce a secret passcode before entering the experience.
- Allow her to choose a mystery gift box.
- Reveal physical gifts or romantic surprises through custom animations.
- End with a personalized love letter and one final surprise.
- Keep the project easy to maintain and customize.

### Important Requirements

- Actual gifts will be configured later.
- Use placeholder gift data until the gifts are decided.
- Do not invent personal details, memories, or messages.
- Every scene must work on mobile devices.
- The website should not resemble a business website or dashboard.
- Keep the implementation simple and avoid unnecessary backend services.

---

## 2. Technology Stack

### Required

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Optional

- React Router, only if separate URL routes are genuinely needed.
- SVG illustrations for lanterns, pagodas, gates, and gift boxes.
- Web Audio API or HTML audio for optional background music.
- A lightweight serverless endpoint if secure passcode verification
  is required.

### Deployment

Use Vercel or another static hosting platform.

The initial experience should work without a database.

Do not introduce Laravel, MySQL, Supabase, or other backend services
unless a specific requirement justifies them.

---

## 3. Design Direction

### Theme

Traditional Myanmar Thadingyut + romantic + magical + cinematic.

The website should evoke a peaceful festival night illuminated by
the full moon, traditional lanterns, oil lamps, and golden lights.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Midnight Navy | #101629 | Main background |
| Deep Purple | #211A36 | Secondary background |
| Festival Gold | #F5C96A | Highlights and lanterns |
| Warm Ivory | #FFF8E8 | Main text |
| Soft Rose | #D98FAD | Romantic accents |
| Moonlight Silver | #D9E2F2 | Moon and stars |

Use theme variables instead of hardcoding colors throughout components.

Gold should be the primary accent. Rose should be used sparingly.

### Typography

- Elegant serif font for headings.
- Clean sans-serif font for interface text.
- Handwritten-style font for the final love letter.

If Burmese text is introduced, verify that every selected font supports
Myanmar Unicode correctly.

### Visual Elements

- Glowing full moon.
- Distant Myanmar pagoda silhouettes.
- Floating traditional lanterns.
- Golden oil lamps.
- Stars and subtle particles.
- Traditional decorative patterns.
- Moonlight and water reflections.
- Illustrated mystery gift boxes.
- Romantic letters and soft glowing effects.

Prefer SVG and CSS illustrations for decorative elements when possible.

Avoid relying on emoji as the primary visual design.

---

## 4. Mobile-First Responsive Requirements

Mobile responsiveness is the highest design priority.

Design for narrow screens first, then progressively enhance the layout
for tablets and desktops.

### Supported Layouts

- Small mobile screens: approximately 320px and above.
- Standard mobile screens.
- Tablets.
- Laptops and desktop monitors.

### Mobile Rules

1. Use a single-column layout by default.
2. Keep important content centered and readable.
3. Prevent horizontal scrolling.
4. Use `min-height: 100svh` where appropriate.
5. Account for mobile browser interface changes.
6. Respect device safe areas when using full-screen layouts.
7. Use responsive typography with `clamp()`.
8. Keep interactive controls comfortable for touch.
9. Avoid hover-only interactions.
10. Do not require precise mouse movements.
11. Ensure gift boxes remain selectable on narrow screens.
12. Avoid large animations that cause mobile performance issues.
13. Use responsive image sizing and modern image formats.
14. Keep the primary action visible without excessive scrolling.
15. Support portrait and landscape layouts gracefully.

### Gift Box Layout

On mobile:
- Use a responsive grid or a horizontally arranged selection that
  remains comfortable to interact with.
- Never shrink three boxes until their contents become unreadable.
- If necessary, arrange boxes vertically or use a two-column layout
  with the final box centered.
- Keep all choices visible or clearly discoverable.

On desktop:
- Display three gift boxes in a balanced horizontal arrangement.

### Touch Targets

Aim for touch targets of at least 44 × 44 CSS pixels.

### Safe Areas

Consider:

- `env(safe-area-inset-top)`
- `env(safe-area-inset-bottom)`

Use these when appropriate for immersive full-screen scenes.

### Responsive Testing

Test at these widths:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1440px

These are test targets, not a requirement to create separate layouts
for every individual width.

---

## 5. Complete User Journey

Implement the following sequence:

1. Magical Introduction
2. Secret Passcode
3. Thadingyut Festival Entrance
4. Mystery Gift Selection
5. Gift Reveal
6. Personal Love Letter
7. Final Surprise

The journey should feel continuous rather than like navigating
between unrelated website pages.

Use smooth scene transitions while keeping every action responsive.

---

## 6. Scene One: Magical Introduction

### Purpose

Create a beautiful first impression and introduce the romantic theme.

### Visual Design

- Dark midnight background.
- Gradually illuminated full moon.
- Distant pagoda silhouette.
- Floating golden lanterns.
- Subtle stars.
- Elegant centered typography.

### Placeholder Copy

Title:

"For My Love"

Message:

"Among a thousand lights, you are my favorite."

Primary button:

"Begin Our Little Journey"

### Interactions

- Moon fades in.
- Lanterns begin floating.
- Text appears with a subtle staggered animation.
- Button responds to hover and touch.
- Clicking the button transitions to the passcode scene.

### Requirements

- Never force the user to wait for an animation to finish.
- Keep the introduction short.
- Support reduced-motion preferences.
- Do not autoplay audio before a user interaction.

---

## 7. Scene Two: Secret Passcode

### Purpose

Create a playful, private-feeling entrance.

### Visual Design

- Traditional golden gate.
- Glowing decorative patterns.
- Warm golden light.
- Passcode input.
- Unlock button.

### Placeholder Copy

Title:

"A Little Secret"

Message:

"I've prepared something special for you.
But first, there's a little secret you need to remember."

Input label:

"Enter Your Secret Passcode"

Button:

"Unlock My Surprise"

### Interactions

Correct passcode:
- Show a successful unlock animation.
- Open the gate.
- Transition to the festival scene.

Incorrect passcode:
- Apply a short shake animation to the input.
- Display a friendly error message.
- Keep the input usable.

### Security Requirements

A passcode checked only in frontend JavaScript is not secure.

Anyone who can inspect the deployed application may discover the
passcode or bypass the check.

If genuine secrecy is required:
- Verify the passcode on a server or serverless endpoint.
- Avoid placing the expected passcode in public environment variables
  prefixed with `VITE_`.
- Apply reasonable rate limiting to server-side verification.
- Avoid logging the actual passcode.

A client-only passcode is acceptable only as a playful interaction,
not as genuine access control.

---

## 8. Scene Three: Thadingyut Festival Entrance

### Purpose

Welcome her into the main festival experience.

### Visual Design

- Large glowing moon.
- Pagoda silhouette.
- Golden lanterns.
- Oil lamps.
- Subtle water reflections.
- Romantic decorative elements.

### Placeholder Copy

Title:

"Welcome to Your Little Festival, My Love."

Message:

"Tonight, the moon is shining, the lights are glowing,
and someone has prepared a little surprise just for you."

Additional message:

"But there's something special about this surprise..."

Emphasis:

"You get to choose it yourself!"

Button:

"Discover Your Surprise"

### Interactions

- Lanterns continue floating in the background.
- The main message fades in.
- The primary button reveals the mystery gift scene.
- Transition the visual environment into a festival pavilion.

---

## 9. Scene Four: Mystery Gift Selection

### Purpose

Allow her to choose one mystery gift.

### Initial Gift Configuration

Create three placeholder gifts.

#### Gift A: Moonlight Box

- Midnight blue appearance.
- Silver moon illustration.
- Golden ribbon.
- Gentle moonlight animation.

#### Gift B: Golden Lantern Box

- Warm gold appearance.
- Traditional lantern illustration.
- Decorative patterns.
- Glowing golden animation.

#### Gift C: Love Letter Box

- Cream and soft rose appearance.
- Elegant ribbon.
- Romantic illustration.
- Soft glowing animation.

These names and themes are placeholders and may change later.

### Selection Instructions

Title:

"Your Surprise"

Message:

"Which little mystery will you choose?"

Helper text:

"Choose the one you love."

### Interaction Flow

When a gift is selected:

1. Record the selected gift.
2. Prevent accidental duplicate selections.
3. Dim the unselected boxes.
4. Animate the selected box upward.
5. Apply a glowing effect.
6. Darken the surrounding scene.
7. Play the opening animation.
8. Transition into the selected gift's reveal.

### Selection Rules

- Let her choose freely.
- Do not automatically select a random gift.
- For the initial version, allow one primary selection.
- Do not permanently lock the selection until the experience's
  intended behavior is confirmed.
- Make the selection interaction work on touchscreens and keyboards.
- Ensure the gift boxes have meaningful accessible labels.

The selected gift should determine which reveal experience appears.

---

## 10. Scene Five: Gift Reveal

### Purpose

Reveal the selected present in a visually meaningful way.

The actual gifts are undecided.

Implement a reusable reveal system that supports different gift types.

### Supported Reveal Types

#### Physical Gift

Show:
- Gift title.
- Gift image or illustration.
- Personalized message.
- Optional claim instructions.

#### Romantic Experience

Show:
- An appropriate romantic scene.
- Invitation or activity details.
- Personalized message.
- Optional date or redemption instructions.

#### Personal Message

Show:
- A letter or meaningful message.
- Optional photographs.
- A gentle text reveal animation.

### Placeholder Copy

Title:

"Your Little Surprise Is Here"

Message:

"Because you deserve something that makes you smile."

Do not invent the actual gift or claim that a physical gift is available
until the owner provides those details.

### Gift Data Model

Use a typed data model similar to:

```ts
export type GiftRevealType =
  | "physical"
  | "experience"
  | "message";

export type GiftTheme =
  | "moonlight"
  | "lantern"
  | "love";

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
}