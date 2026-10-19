# Thadingyut Surprise

An interactive, single-page love note for a full-moon Thadingyut night. The
experience moves through seven scenes — a moonlit welcome, a six-digit secret
gate, a festival entrance, three mystery boxes, a reveal, a sealed letter, and a
final lantern wish.

The interface is mobile-first, works from 320 px upward, respects safe-area
insets and reduced-motion preferences, and is built from custom SVG/CSS artwork
rather than stock illustrations.

## The journey

| Scene | What happens |
| --- | --- |
| Intro | A moonlit invitation and the first deliberate tap that starts the ambient sound. |
| Secret gate | Six split digit inputs for the passcode. Correct code opens the ornate gate. |
| Festival entrance | The welcome, the festival aside, and the invitation to choose a surprise. |
| Gift selection | Three illustrated mystery boxes; one is selected and opened. |
| Gift reveal | A gift-specific reveal illustration and message. |
| Letter | A wax-sealed envelope, then an open handwritten letter. |
| Finale | A lantern launch, a heart constellation, and replay. |

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # type-check and create the production build in dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

Deploy the generated `dist/` folder to any static host (Netlify, Vercel, GitHub
Pages, Cloudflare Pages, or a plain web server). There are no routes or server
functions to configure.

## Make it yours

### 1. Words, passcode, and letter

Everything personal is in [`src/data/experience.ts`](src/data/experience.ts):

- `passcode` — currently **`299999`**. Use exactly six characters. The gate
  renders one input box per character.
- `passcodeHint` — the clue shown under the boxes.
- `intro`, `secret`, `festival`, `gifts`, `reveal`, `letter`, and `finale` —
  every heading, button label, note, and line of copy.
- `letter.to`, `letter.paragraphs`, `letter.signoff`, and `letter.signature` —
  the letter itself. Replace the placeholder “My love,” and “Yours” with your
  names or however you sign off.
- `footer` — the tiny closing line.

The split inputs accept digits automatically. If you ever change the passcode to
letters, the boxes still work, but the visible label (“six-digit code”) should be
updated too.

### 2. The three mystery boxes

Edit [`src/data/gifts.ts`](src/data/gifts.ts). For each gift you can change:

- `name`, `teaser`, `number`, and `theme`
  (`moonlight`, `lantern`, or `love`);
- `revealType` — `message`, `experience`, or `physical`, which changes the
  reveal artwork and the small type note;
- `title` and `message` — the words shown after opening;
- `claimInstructions` — optional practical note for a real gift or date;
- `enabled` — set to `false` to hide a box. The layout adapts from three boxes to
  two or one.

The current gifts are intentionally gentle placeholders. **No physical gift or
booking is included by this project.** If the surprise involves something real,
add the details yourself in `claimInstructions` and make sure they are accurate.

### 3. Optional photos

Add an image to `src/assets/`, import it in `src/data/gifts.ts`, and set it as
the gift's `image`:

```ts
import datePhoto from "../assets/our-night.jpg";

// ...
image: datePhoto,
```

The reveal then shows the photo instead of the generated illustration. Use a
landscape image and check that you have permission to share it.

### 4. Sound

The gentle ambient pad and chimes are generated with the Web Audio API in
[`src/hooks/useAmbientSound.ts`](src/hooks/useAmbientSound.ts) — no audio files
are bundled. Sound starts only after the first “Begin” tap and the mute
preference is remembered in `localStorage`.

If you prefer a recorded song, replace the pad setup in that hook with an
`<audio>` element or an `AudioBufferSourceNode`, and keep the same
play/pause/mute wiring in `App.tsx`.

### 5. Look and feel

The design system lives at the top of [`src/index.css`](src/index.css):
midnight, plum, gold, ivory, rose, and silver tokens, plus the display, sans,
and script font stacks. Fonts are bundled locally through `@fontsource`, so the
page does not depend on a third-party font CDN.

The atmosphere, scene layouts, responsive rules, and reduced-motion fallback are
in the same file. Global typography and controls are near the top; each scene has
its own clearly labelled section.

### 6. Page metadata

Update the title, description, theme colour, and social preview metadata in
[`index.html`](index.html), and replace [`public/favicon.svg`](public/favicon.svg)
if you want a different mark.

## Passcode security

The passcode is checked in the browser. It is a playful gate, **not real access
control**:

- it is visible in the built JavaScript;
- anyone can open developer tools and change the scene state;
- there is no server, session, or rate limiting.

Do not put anything genuinely private behind it. For a real private surprise,
use server-side authentication or a private, unlisted link.

## Accessibility notes

- Controls have visible focus styles and a minimum 44 px touch target where
  practical; the six digit boxes are at least 44 px tall on small screens.
- The page supports keyboard navigation, paste, arrow keys, and backspace across
  the split passcode inputs.
- Decorative SVGs are hidden from assistive technology, motion is reduced when
  the operating system asks for it, and scene changes are announced politely.
- No horizontal scrolling is intended at any supported width. If you add long
  names or copy, re-check 320 px and 390 px layouts.

## Placeholder checklist

Before sharing the link, replace or confirm:

- [ ] The passcode (`299999` by default)
- [ ] Recipient name / “My love” wording and sender signature
- [ ] Intro and festival copy
- [ ] Letter paragraphs and sign-off
- [ ] The three gift names, teasers, and reveal messages
- [ ] Any real gift, date, or claim instructions
- [ ] Optional photos
- [ ] Final wish and footer line
- [ ] Page title, description, social metadata, and favicon

## Tech stack

Vite, React, TypeScript, Tailwind CSS (v4 via `@tailwindcss/vite`, with a
custom CSS token/component layer), Framer Motion, Lucide React, and locally
bundled Cormorant Garamond, Manrope, and Great Vibes fonts.
