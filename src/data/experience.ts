/**
 * ─────────────────────────────────────────────────────────────
 *  MAKE IT YOURS
 *  Everything personal lives in this file. Nothing else needs
 *  to be touched to customise the words, passcode, or letter.
 * ─────────────────────────────────────────────────────────────
 */
export const experience = {
  /**
   * Exactly six characters, shown as six split input boxes.
   * This is a playful front-end lock, not real access control.
   * Read the security note in README.md.
   */
  passcode: "299999",
  passcodeHint: "Six digits, quietly kept under the moon.",

  intro: {
    eyebrow: "A Thadingyut night · for you",
    titleLead: "For My",
    titleAccent: "Love",
    message: "Among a thousand lights, you are my favorite.",
    button: "Begin Our Little Journey",
  },

  secret: {
    eyebrow: "Behind the golden gate",
    title: "A Little Secret",
    message:
      "I've prepared something special for you. But first, there's a little secret you need to remember.",
    inputLabel: "Enter our secret six-digit code",
    button: "Unlock My Surprise",
    error: "That isn't quite it. The moon is keeping six digits.",
    success: "The gate remembers you. Come inside…",
  },

  festival: {
    eyebrow: "Chapter two · the festival",
    titleLead: "Welcome to",
    titleEmphasis: "your",
    titleTail: "little festival, my love.",
    message:
      "Tonight, the moon is shining, the lights are glowing, and someone has prepared a little surprise just for you.",
    aside: "But there's something special about this surprise…",
    emphasis: "You get to choose it yourself!",
    button: "Discover Your Surprise",
  },

  gifts: {
    eyebrow: "Chapter three · the choosing",
    title: "Your Surprise",
    message: "Which little mystery will you choose?",
    helper: "Choose the one you love.",
    selectedHelper: "A beautiful choice. Shall we open it?",
    button: "Open My Gift",
    changeButton: "Choose another",
    opening: "The lanterns are leaning closer…",
  },

  reveal: {
    eyebrow: "The box is open",
    nextButton: "There's a letter for you",
    note: "The night isn't over yet.",
  },

  letter: {
    eyebrow: "One more little thing",
    title: "Before the night is over…",
    button: "Break the seal",
    openedEyebrow: "A letter, written under the moon",
    to: "Ngal,",
    signature: "Yours, Arca",
    nextButton: "There's one last light…",

    /**
     * The letter is written fresh every time: one teaser, one envelope
     * address and one whole letter are picked at random when the scene
     * opens, so the words are never the same twice.
     */
    messages: [
      "There's a letter inside. I wrote it slowly, the way I'd say it to you.",
      "I sealed a few honest lines in here. They're yours.",
      "Some things are easier to write than to say, so I wrote it down instead.",
    ],
    envelopeNames: ["For Ngal", "For Ngal, under this moon", "Only for you, Ngal"],
    variants: [
      {
        signoff: "Always, under the same moon,",
        paragraphs: [
          "Look at you — reading this under a full moon, with a whole festival of little lights glowing for you. I thought of you in every single one of them, and each time the thought got warmer.",
          "There is no grand way to say this, so I'll say it plainly: I am happier because you exist. Not only on the big days — on the ordinary ones. The way you laugh without warning, the way a quiet room suddenly feels like it belongs to someone I never want to stop talking to. I would choose a thousand ordinary evenings with you over one perfect night without.",
          "So keep this little piece of Thadingyut with you. And when the next full moon rises somewhere over your shoulder, make a wish for me — I'll be making one for you at the same time, under the same sky.",
        ],
      },
      {
        signoff: "With all my heart,",
        paragraphs: [
          "There is a version of this night I keep replaying — not the lanterns, but you, walking toward them. Some people arrive in your life loudly. You arrived quietly, and somehow that is the loudest thing that has ever happened to me.",
          "I have never been good at saying things while they are happening, so I'll say them here, where I can take my time: I love you. Not the loud, easy kind. The kind that makes you want to be gentler, braver, and more patient with the whole world.",
          "Keep this. And when the noise of a day gets too close, read it once more and remember that someone is thinking of you very tenderly under a very bright moon.",
        ],
      },
      {
        signoff: "Every night, and every morning after,",
        paragraphs: [
          "Some nights I think about how lucky I am that you exist — not the celebrations, not the milestones, but the ordinary magic of you in the middle of an ordinary Tuesday.",
          "You make the world softer at the edges. You make me braver in small things, kinder in big ones, and much less interested in being right than I used to be.",
          "Whatever this year holds for us, I want to meet it the way we met this night: gently, with our eyes up, and with far too much love.",
        ],
      },
      {
        signoff: "More than words can hold,",
        paragraphs: [
          "If I could fold this night into a little paper boat and set it on the river, it would carry the gold of the lanterns, the hush of the crowd, and my stubborn, endless hope that you are happy.",
          "You are not one small part of my life, Ngal. You are the part that makes the rest of it worth living.",
          "And if the tide brings it back to me someday, I will read it again and fall for you a second time.",
        ],
      },
      {
        signoff: "Until the next full moon,",
        paragraphs: [
          "I love that I get to be close to you: the way you laugh when you are truly surprised, the way you go quiet when you are thinking, the way you forgive before you have even finished being angry.",
          "I don't need a perfect version of you. I get all of them — the laughing one, the tired one, the one who worries at two in the morning — and I am grateful for every single one.",
          "Tonight the whole sky is celebrating the fact that you are in it. So make a wish, my love — I'll be right here, wishing for the same thing.",
        ],
      },
      {
        signoff: "Under this moon, and every next one,",
        paragraphs: [
          "You walked through a gate tonight like it was nothing. To me it was everything — proof that you would follow one small light to the end just to see what I had waiting for you.",
          "That is rather like us, isn't it? Following lights. Following each other. And every time I do, I am astonished by how much kinder the world becomes.",
          "So here is my heart in the simplest words I know: I choose you — today, and every ordinary day after this one.",
        ],
      },
      {
        signoff: "Goodnight, and happy Thadingyut,",
        paragraphs: [
          "I keep thinking that this is the part of the night when the world goes quiet and the two of us get the rest of it.",
          "If you close your eyes tonight, I hope you dream of lanterns and warm hands and the sound of someone loving you without needing to say it loudly.",
          "Because that is what I do, Ngal. I love you in the quiet hours, in the busy ones, and in the in-between moments nobody else thinks to notice.",
        ],
      },
      {
        signoff: "Yours, in every lifetime,",
        paragraphs: [
          "I have been thinking about how ridiculous it is that a festival of lights is what convinced me I could be brave enough to tell you how I feel. Ten thousand lanterns, and still they were only enough to light up one word: please.",
          "Please. That is all it has ever been. Please stay close. Please let me keep making you laugh. Please let me be the person you tell your ordinary Tuesdays to.",
          "The lanterns are floating up now, and I am still standing here, holding my breath a little — hoping you look up and remember that one of them has your name on it.",
        ],
      },
    ],
  },

  finale: {
    eyebrow: "The last little thing",
    title: "One Last Wish",
    message:
      "They say wishes made under a Thadingyut moon find their way home. So make one, my love.",
    button: "Light the Lantern",
    releasedEyebrow: "Your wish is on its way",
    releasedTitle: "Look how far one little light can go.",
    releasedMessage:
      "I hope every wish you make finds you. And I hope I'm lucky enough to be part of all the good ones.",
    finalLine: "Happy Thadingyut, my love.",
    replayButton: "Live the night again",
  },

  footer: "Made with love · under a full moon",
};

export const letter = experience.letter;
export const finale = experience.finale;
