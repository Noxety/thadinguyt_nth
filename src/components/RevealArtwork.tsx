import { useId } from "react";
import type { Gift, GiftTheme } from "../types";

const palettes: Record<
  GiftTheme,
  {
    accent: string;
    accentSoft: string;
    deep: string;
    gold: string;
    paper: string;
    ink: string;
  }
> = {
  moonlight: {
    accent: "#BED3F7",
    accentSoft: "rgba(161, 193, 247, .2)",
    deep: "#172B50",
    gold: "#F4CB77",
    paper: "#F5EDDE",
    ink: "#625B61",
  },
  lantern: {
    accent: "#FFD98C",
    accentSoft: "rgba(247, 190, 100, .2)",
    deep: "#5B3216",
    gold: "#F7CA72",
    paper: "#FFF0D2",
    ink: "#695A51",
  },
  love: {
    accent: "#EAB7C9",
    accentSoft: "rgba(217, 143, 173, .2)",
    deep: "#55283A",
    gold: "#E8C67C",
    paper: "#FFF6E8",
    ink: "#685258",
  },
};

function MessageArt({ palette, uid }: { palette: (typeof palettes)[GiftTheme]; uid: string }) {
  return (
    <svg viewBox="0 0 360 280" fill="none">
      <defs>
        <radialGradient id={`${uid}-message-glow`} cx="0" cy="0" r="1" gradientTransform="translate(180 146) rotate(90) scale(128)" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.accent} stopOpacity=".23" />
          <stop offset="1" stopColor={palette.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-envelope`} x1="74" y1="138" x2="286" y2="226" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.deep} />
          <stop offset="1" stopColor="#101629" />
        </linearGradient>
        <linearGradient id={`${uid}-paper`} x1="140" y1="81" x2="226" y2="214" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.paper} />
          <stop offset="1" stopColor="#E8D9C1" />
        </linearGradient>
      </defs>

      <circle cx="180" cy="145" r="125" fill={`url(#${uid}-message-glow)`} />
      <ellipse cx="180" cy="251" rx="96" ry="12" fill="#000" fillOpacity=".24" />
      <circle cx="180" cy="142" r="112" stroke={palette.gold} strokeOpacity=".13" strokeDasharray="2 8" />

      <path d="M58 118h244v118a8 8 0 0 1-8 8H66a8 8 0 0 1-8-8V118Z" fill={`url(#${uid}-envelope)`} stroke={palette.gold} strokeOpacity=".28" />
      <path d="m58 118 122 72 122-72v118a8 8 0 0 1-8 8H66a8 8 0 0 1-8-8V118Z" fill={palette.deep} fillOpacity=".4" />
      <path d="M58 118 180 46l122 72-122 72-122-72Z" fill={palette.deep} stroke={palette.gold} strokeOpacity=".35" />
      <path d="M58 118 180 46" stroke={palette.gold} strokeOpacity=".13" />

      <g transform="rotate(1.5 180 148)">
        <rect x="98" y="69" width="164" height="138" rx="3" fill={`url(#${uid}-paper)`} stroke={palette.gold} strokeOpacity=".33" />
        <path d="M111 86h138" stroke={palette.ink} strokeOpacity=".2" />
        <path d="M116 111h72M116 121h104M116 131h83M116 150h113M116 160h93M116 178h61" stroke={palette.ink} strokeOpacity=".2" strokeLinecap="round" />
        <path d="M226 180c-5-7-16-4-16 4-1 7 8 12 16 18 8-6 17-11 16-18 0-8-11-11-16-4Z" fill={palette.accent} fillOpacity=".55" />
        <circle cx="243" cy="84" r="5" stroke={palette.gold} strokeOpacity=".5" />
        <path d="m243 80 .9 2.7 2.7.9-2.7.9-.9 2.7-.9-2.7-2.7-.9 2.7-.9.9-2.7Z" fill={palette.gold} fillOpacity=".45" />
      </g>

      <path d="M58 118 180 194l122-76v118a8 8 0 0 1-8 8H66a8 8 0 0 1-8-8V118Z" fill={`url(#${uid}-envelope)`} />
      <path d="M58 118 180 194l122-76" stroke={palette.gold} strokeOpacity=".45" />
      <path d="m66 235 83-68M294 235l-83-68" stroke={palette.gold} strokeOpacity=".1" />

      <g transform="translate(180 194)">
        <circle r="27" fill={palette.deep} stroke={palette.gold} strokeOpacity=".7" />
        <circle r="22" stroke={palette.gold} strokeOpacity=".28" strokeDasharray="1 4" />
        <path d="M0-9c-5-8-16-5-16 3 0 8 9 13 16 19 7-6 16-11 16-19 0-8-11-11-16-3Z" fill={palette.accent} fillOpacity=".8" />
        <circle cx="0" cy="0" r="1.4" fill={palette.gold} />
      </g>

      <g fill={palette.gold}>
        <path d="m63 75 1.4 4.2 4.2 1.4-4.2 1.4-1.4 4.2-1.4-4.2-4.2-1.4 4.2-1.4L63 75Z" opacity=".7" />
        <circle cx="303" cy="92" r="1.5" opacity=".5" />
        <circle cx="287" cy="55" r="1" opacity=".35" />
        <circle cx="43" cy="166" r="1.2" opacity=".4" />
        <path d="m306 160 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" opacity=".35" />
      </g>
    </svg>
  );
}

function ExperienceArt({ palette, uid }: { palette: (typeof palettes)[GiftTheme]; uid: string }) {
  return (
    <svg viewBox="0 0 360 280" fill="none">
      <defs>
        <radialGradient id={`${uid}-experience-glow`} cx="0" cy="0" r="1" gradientTransform="translate(180 133) rotate(90) scale(140 116)" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.accent} stopOpacity=".22" />
          <stop offset="1" stopColor={palette.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-arch`} x1="180" y1="34" x2="180" y2="242" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.deep} stopOpacity=".5" />
          <stop offset="1" stopColor="#0C1120" stopOpacity=".9" />
        </linearGradient>
        <linearGradient id={`${uid}-lantern`} x1="105" y1="68" x2="135" y2="132" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE6AE" />
          <stop offset="1" stopColor="#D58F3B" />
        </linearGradient>
        <filter id={`${uid}-soft`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <circle cx="180" cy="137" r="128" fill={`url(#${uid}-experience-glow)`} />
      <path
        d="M57 247V133c0-69 49-107 123-107s123 38 123 107v114"
        fill={`url(#${uid}-arch)`}
        stroke={palette.gold}
        strokeOpacity=".45"
        strokeWidth="1.1"
      />
      <path
        d="M69 247V134c0-62 45-97 111-97s111 35 111 97v113"
        stroke={palette.gold}
        strokeOpacity=".17"
        strokeDasharray="1 6"
      />
      <path d="M46 248h268" stroke={palette.gold} strokeOpacity=".3" />
      <path d="M40 255h280M64 262h232" stroke={palette.gold} strokeOpacity=".1" />

      <circle cx="180" cy="113" r="37" fill={palette.paper} fillOpacity=".9" />
      <circle cx="180" cy="113" r="37" fill={palette.accent} fillOpacity=".09" />
      <circle cx="165" cy="103" r="7" fill={palette.ink} fillOpacity=".08" />
      <circle cx="192" cy="122" r="10" fill={palette.ink} fillOpacity=".06" />
      <circle cx="180" cy="113" r="47" stroke={palette.accent} strokeOpacity=".16" />

      <g fill={palette.gold} opacity=".6">
        <circle cx="98" cy="81" r="1.3" />
        <circle cx="258" cy="77" r="1" />
        <circle cx="283" cy="139" r="1.2" />
        <circle cx="72" cy="162" r=".9" />
        <path d="m232 56 1.2 3.6L237 61l-3.8 1.2-1.2 3.6-1.2-3.6L227 61l3.8-1.4L232 56Z" />
      </g>

      {/* hanging lanterns */}
      <g>
        <path d="M124 48v37" stroke={palette.gold} strokeOpacity=".35" />
        <path d="M108 85c1-13 7-20 16-20s15 7 16 20l2 31c-12 5-24 5-36 0l2-31Z" fill={`url(#${uid}-lantern)`} opacity=".88" />
        <path d="M108 85c1-13 7-20 16-20s15 7 16 20l2 31c-12 5-24 5-36 0l2-31Z" stroke="#FFE6B0" strokeOpacity=".6" />
        <path d="M113 94h30M114 104h28M116 114h24" stroke="#8F5B22" strokeOpacity=".35" />
        <ellipse cx="124" cy="119" rx="10" ry="3" fill="#6E431D" fillOpacity=".7" />
        <ellipse cx="124" cy="120" rx="5" ry="8" fill="#FFF2BC" filter={`url(#${uid}-soft)`} />
        <circle cx="124" cy="120" r="2.2" fill="#FFFCF0" />

        <path d="M236 54v46" stroke={palette.gold} strokeOpacity=".35" />
        <path d="M221 100c1-13 6-19 15-19s14 6 15 19l2 28c-11 5-22 5-34 0l2-28Z" fill={`url(#${uid}-lantern)`} opacity=".68" />
        <path d="M221 100c1-13 6-19 15-19s14 6 15 19l2 28c-11 5-22 5-34 0l2-28Z" stroke="#FFE6B0" strokeOpacity=".4" />
        <ellipse cx="236" cy="128" rx="9" ry="2.5" fill="#6E431D" fillOpacity=".6" />
        <ellipse cx="236" cy="128" rx="4.5" ry="6" fill="#FFF2BC" opacity=".65" filter={`url(#${uid}-soft)`} />
      </g>

      {/* distant silhouette and path */}
      <path d="M68 216c42-13 78-12 113-2 45-12 74-4 111 4v17H68v-19Z" fill="#070A13" fillOpacity=".7" />
      <path d="M170 198v34M177 188v44M184 202v30" stroke={palette.gold} strokeOpacity=".12" />
      <g fill={palette.gold}>
        <circle cx="153" cy="223" r="1.4" opacity=".8" />
        <circle cx="207" cy="226" r="1.2" opacity=".6" />
      </g>

      <g transform="translate(180 230)">
        <path d="M-67 0h134" stroke={palette.gold} strokeOpacity=".35" />
        <path d="M-53 8h106" stroke={palette.gold} strokeOpacity=".15" />
        <circle cx="0" cy="0" r="3.2" stroke={palette.gold} strokeOpacity=".5" />
        <path d="M0-3.2v-8" stroke={palette.gold} strokeOpacity=".4" />
        <path d="m0-14 2 4-2 3-2-3 2-4Z" fill={palette.gold} fillOpacity=".5" />
      </g>

      <g fill={palette.gold}>
        <path d="m52 71 1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5L52 71Z" opacity=".6" />
        <circle cx="311" cy="98" r="1.4" opacity=".4" />
        <circle cx="46" cy="204" r="1.1" opacity=".35" />
      </g>
    </svg>
  );
}

function PhysicalArt({ palette, uid }: { palette: (typeof palettes)[GiftTheme]; uid: string }) {
  return (
    <svg viewBox="0 0 360 280" fill="none">
      <defs>
        <radialGradient id={`${uid}-physical-glow`} cx="0" cy="0" r="1" gradientTransform="translate(180 126) rotate(90) scale(138 110)" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.accent} stopOpacity=".3" />
          <stop offset="1" stopColor={palette.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-beam`} x1="180" y1="52" x2="180" y2="228" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.gold} stopOpacity=".38" />
          <stop offset="1" stopColor={palette.gold} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${uid}-box`} x1="130" y1="150" x2="226" y2="238" gradientUnits="userSpaceOnUse">
          <stop stopColor={palette.deep} />
          <stop offset="1" stopColor="#090C17" />
        </linearGradient>
      </defs>

      <circle cx="180" cy="130" r="128" fill={`url(#${uid}-physical-glow)`} />
      <path d="M132 231 180 62l48 169c-28 15-68 15-96 0Z" fill={`url(#${uid}-beam)`} />
      <ellipse cx="180" cy="249" rx="107" ry="13" fill="#000" fillOpacity=".3" />

      <g transform="rotate(-11 111 163)">
        <path d="m77 161 74-38 74 38-74 35-74-35Z" fill={palette.deep} stroke={palette.gold} strokeOpacity=".55" />
        <path d="m77 161 74 35v24l-74-33v-26Z" fill="#0C1120" stroke={palette.gold} strokeOpacity=".35" />
        <path d="m225 161-74 35v24l74-33v-26Z" fill="#080A13" stroke={palette.gold} strokeOpacity=".25" />
      </g>
      <g>
        <path d="m78 191 102-48 102 48-102 47-102-47Z" fill={palette.deep} stroke={palette.gold} strokeOpacity=".55" />
        <path d="m78 191 102 47v23L78 215v-24Z" fill={`url(#${uid}-box)`} stroke={palette.gold} strokeOpacity=".4" />
        <path d="m282 191-102 47v23l102-46v-24Z" fill="#090B15" stroke={palette.gold} strokeOpacity=".28" />
        <path d="m78 210 102-46 102 46" stroke={palette.gold} strokeOpacity=".4" />
        <path d="m180 143 42 20-42 19-42-19 42-20Z" fill={palette.accent} fillOpacity=".1" />
        <path d="M180 126v-28M180 98c-9-11-20-8-20 1 0 9 10 15 20 22 10-7 20-13 20-22 0-9-11-12-20-1Z" fill={palette.accent} fillOpacity=".6" />
        <g fill={palette.gold}>
          <circle cx="128" cy="108" r="1.5" opacity=".65" />
          <circle cx="241" cy="82" r="1.2" opacity=".5" />
          <circle cx="252" cy="124" r="1.7" opacity=".55" />
          <path d="m104 79 1.4 4.2 4.2 1.4-4.2 1.4-1.4 4.2-1.4-4.2-4.2-1.4 4.2-1.4L104 79Z" opacity=".5" />
        </g>
      </g>
      <g stroke={palette.gold} strokeOpacity=".2">
        <path d="M90 134 69 123M270 144l28-12M114 64 102 45M253 58l13-18" />
      </g>
    </svg>
  );
}

export function RevealArtwork({ gift }: { gift: Gift }) {
  const palette = palettes[gift.theme];
  const uid = useId().replace(/:/g, "");

  return (
    <div className="reveal-artwork" style={{ color: palette.accent }}>
      <div className="reveal-artwork__halo" aria-hidden="true" />
      {gift.image ? (
        <img className="reveal-artwork__image" src={gift.image} alt={`A glimpse of ${gift.name}`} />
      ) : gift.revealType === "experience" ? (
        <ExperienceArt palette={palette} uid={uid} />
      ) : gift.revealType === "physical" ? (
        <PhysicalArt palette={palette} uid={uid} />
      ) : (
        <MessageArt palette={palette} uid={uid} />
      )}
    </div>
  );
}
