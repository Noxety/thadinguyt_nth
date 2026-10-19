import { useId } from "react";
import type { CSSProperties } from "react";
import type { GiftTheme } from "../types";

type GiftBoxArtProps = {
  theme: GiftTheme;
  className?: string;
  floating?: boolean;
};

const palettes: Record<
  GiftTheme,
  {
    top: string;
    topLight: string;
    front: string;
    side: string;
    frontShade: string;
    edge: string;
    ribbon: string;
    ribbonLight: string;
    ribbonDark: string;
    emblem: string;
    accent: string;
    glow: string;
  }
> = {
  moonlight: {
    top: "#2B4B84",
    topLight: "#3B62A1",
    front: "#152B57",
    side: "#0D1D3D",
    frontShade: "#0D1B37",
    edge: "#F2CA77",
    ribbon: "#F6D58F",
    ribbonLight: "#FFF0C4",
    ribbonDark: "#B98834",
    emblem: "#E5ECFA",
    accent: "#AFC6F2",
    glow: "rgba(143, 185, 255, .33)",
  },
  lantern: {
    top: "#D08A3D",
    topLight: "#E6A34E",
    front: "#8A4C20",
    side: "#663614",
    frontShade: "#743E19",
    edge: "#FFD98C",
    ribbon: "#F7C76C",
    ribbonLight: "#FFF0C2",
    ribbonDark: "#A96D27",
    emblem: "#FFE9B0",
    accent: "#FFD887",
    glow: "rgba(255, 188, 96, .38)",
  },
  love: {
    top: "#F4E4D3",
    topLight: "#FFF4E6",
    front: "#E5CCBA",
    side: "#CDA99A",
    frontShade: "#D8B9A7",
    edge: "#E4B458",
    ribbon: "#C981A0",
    ribbonLight: "#E7AFC5",
    ribbonDark: "#92516E",
    emblem: "#8F5068",
    accent: "#D98FAD",
    glow: "rgba(255, 191, 208, .32)",
  },
};

function Emblem({
  theme,
  color,
  secondary,
}: {
  theme: GiftTheme;
  color: string;
  secondary: string;
}) {
  if (theme === "moonlight") {
    return (
      <g transform="translate(102 180) rotate(-1)">
        <circle r="28" stroke={color} strokeOpacity=".38" />
        <path
          d="M8-16c-11 2.2-17 9.2-17 18.4 0 10 7.4 17.8 17.1 18.1A20 20 0 1 1 8-16Z"
          fill={color}
          fillOpacity=".86"
        />
        <circle cx="15" cy="-9" r="1.7" fill={color} />
        <circle cx="20" cy="1" r=".9" fill={color} fillOpacity=".7" />
        <path d="M-22 20h44" stroke={color} strokeOpacity=".25" />
      </g>
    );
  }

  if (theme === "lantern") {
    return (
      <g transform="translate(102 178)">
        <path d="M-20-19v-5m40 5v-5M-23-24h46" stroke={color} strokeOpacity=".48" />
        <path d="M-18-13c2-13 8-18 18-18s16 5 18 18l2 30c-13 6-27 6-40 0l2-30Z" fill={color} fillOpacity=".12" stroke={color} strokeOpacity=".82" />
        <path d="M-13-10h26M-13 3h26M-12 16h24" stroke={color} strokeOpacity=".35" />
        <path d="M-4-7v28M4-7v28" stroke={color} strokeOpacity=".25" />
        <ellipse cy="20" rx="13" ry="3.5" fill={secondary} fillOpacity=".4" />
        <path d="M0 21c-5-4-4-9 0-12 4 3 5 8 0 12Z" fill="#FFF3CA" />
      </g>
    );
  }

  return (
    <g transform="translate(102 178)">
      <path d="M-27-16h54v34H-27z" fill={color} fillOpacity=".08" stroke={color} strokeOpacity=".55" />
      <path d="m-27-16 27 19 27-19M-27 18l19-16M27 18 8 2" stroke={color} strokeOpacity=".6" />
      <path d="M0 3c-4-6-13-5-14 2-1 6 7 10 14 15 7-5 15-9 14-15-1-7-10-8-14-2Z" fill={color} fillOpacity=".75" />
    </g>
  );
}

export function GiftBoxArt({
  theme,
  className = "",
  floating = true,
}: GiftBoxArtProps) {
  const palette = palettes[theme];
  const uid = useId().replace(/:/g, "");
  const topGradient = `gift-top-${uid}`;
  const frontGradient = `gift-front-${uid}`;
  const sideGradient = `gift-side-${uid}`;
  const ribbonGradient = `gift-ribbon-${uid}`;
  const patternId = `gift-pattern-${uid}`;
  const auraGradient = `gift-aura-${uid}`;

  return (
    <div
      className={`gift-box-art gift-box-art--${theme} ${floating ? "gift-box-art--floating" : ""} ${className}`}
      style={{ "--gift-glow": palette.glow } as CSSProperties}
    >
      <svg viewBox="0 0 300 290" fill="none" role="presentation">
        <defs>
          <linearGradient id={topGradient} x1="66" y1="64" x2="224" y2="143" gradientUnits="userSpaceOnUse">
            <stop stopColor={palette.topLight} />
            <stop offset=".72" stopColor={palette.top} />
            <stop offset="1" stopColor={palette.side} />
          </linearGradient>
          <linearGradient id={frontGradient} x1="62" y1="102" x2="149" y2="239" gradientUnits="userSpaceOnUse">
            <stop stopColor={palette.front} />
            <stop offset="1" stopColor={palette.frontShade} />
          </linearGradient>
          <linearGradient id={sideGradient} x1="154" y1="142" x2="246" y2="206" gradientUnits="userSpaceOnUse">
            <stop stopColor={palette.side} />
            <stop offset=".7" stopColor={palette.frontShade} />
          </linearGradient>
          <linearGradient id={ribbonGradient} x1="74" y1="112" x2="231" y2="169" gradientUnits="userSpaceOnUse">
            <stop stopColor={palette.ribbonDark} />
            <stop offset=".34" stopColor={palette.ribbonLight} />
            <stop offset=".69" stopColor={palette.ribbon} />
            <stop offset="1" stopColor={palette.ribbonDark} />
          </linearGradient>
          <pattern id={patternId} width="17" height="17" patternUnits="userSpaceOnUse" patternTransform="rotate(26)">
            <path d="m8.5 2.5 6 6-6 6-6-6 6-6Z" stroke={palette.edge} strokeOpacity=".45" strokeWidth=".55" />
            <circle cx="8.5" cy="8.5" r="1" fill={palette.edge} fillOpacity=".22" />
          </pattern>
        </defs>

        {/* glow and shadow */}
        <ellipse cx="150" cy="257" rx="91" ry="17" fill="#000" fillOpacity=".3" />
        <ellipse cx="150" cy="253" rx="68" ry="10" fill={palette.accent} fillOpacity=".11" />
        <circle cx="150" cy="157" r="108" fill={`url(#${auraGradient})`} opacity=".35" />
        <ellipse cx="150" cy="156" rx="118" ry="81" stroke={palette.accent} strokeOpacity=".1" strokeDasharray="1 8" />

        {/* main box */}
        <g>
          <path
            d="m56 98 94-48 94 48-94 44-94-44Z"
            fill={`url(#${topGradient})`}
            stroke={palette.edge}
            strokeOpacity=".66"
            strokeWidth="1.1"
          />
          <path
            d="m56 98 94 44v103L56 202V98Z"
            fill={`url(#${frontGradient})`}
            stroke={palette.edge}
            strokeOpacity=".45"
            strokeWidth="1"
          />
          <path
            d="m244 98-94 44v103l94-43V98Z"
            fill={`url(#${sideGradient})`}
            stroke={palette.edge}
            strokeOpacity=".32"
            strokeWidth="1"
          />

          {/* patterned sheen */}
          <path d="m56 98 94 44v103L56 202V98Z" fill={`url(#${patternId})`} opacity=".4" />
          <path d="m244 98-94 44v103l94-43V98Z" fill={`url(#${patternId})`} opacity=".2" />

          {/* lid */}
          <path
            d="m48 94 102-52 102 52-10 8-92 43-92-43-10-8Z"
            fill={`url(#${topGradient})`}
            stroke={palette.edge}
            strokeOpacity=".9"
            strokeWidth="1.2"
          />
          <path
            d="m48 94 102 51 102-51"
            stroke={palette.edge}
            strokeOpacity=".6"
            strokeWidth="1.2"
          />
          <path
            d="m58 100 92 44v9l-92-44v-9Z"
            fill={palette.edge}
            fillOpacity=".24"
          />
          <path
            d="m242 100-92 44v9l92-44v-9Z"
            fill={palette.edge}
            fillOpacity=".13"
          />

          {/* ribbon band */}
          <path
            d="m56 135 94 44v19l-94-44v-19Z"
            fill={`url(#${ribbonGradient})`}
            opacity=".96"
          />
          <path
            d="m244 135-94 44v19l94-44v-19Z"
            fill={`url(#${ribbonGradient})`}
            opacity=".82"
          />
          <path d="m56 154 188-19" stroke={palette.ribbonLight} strokeOpacity=".18" />
          <path d="m98 56 94 47 12-6-94-46-12 5Z" fill={palette.ribbonDark} fillOpacity=".38" />
          <path d="m150 103 94-47-3-2-94 47 3 2Z" fill={palette.ribbonLight} fillOpacity=".3" />

          {/* emblem */}
          <Emblem theme={theme} color={palette.emblem} secondary={palette.ribbon} />

          {/* base and corner details */}
          <path
            d="M56 196v6l94 44 94-43v-6l-94 43-94-44Z"
            fill={palette.edge}
            fillOpacity=".26"
          />
          <path d="M62 103v91M235 104v88" stroke={palette.edge} strokeOpacity=".16" />
          <path d="M64 198c28 13 55 27 86 40M236 197c-24 12-50 25-78 38" stroke={palette.edge} strokeOpacity=".12" />
        </g>

        {/* bow */}
        <g>
          <path
            d="M151 52c-12-19-28-26-37-17-10 10-4 27 14 34 8 3 17 2 23-2v-15Z"
            fill={`url(#${ribbonGradient})`}
            stroke={palette.edge}
            strokeOpacity=".5"
            strokeWidth=".7"
          />
          <path
            d="M149 52c12-19 28-26 37-17 10 10 4 27-14 34-8 3-17 2-23-2V52Z"
            fill={`url(#${ribbonGradient})`}
            stroke={palette.edge}
            strokeOpacity=".5"
            strokeWidth=".7"
          />
          <path
            d="M151 55c-7-12-16-19-24-19 1 9 7 16 16 20l8-1ZM149 55c7-12 16-19 24-19-1 9-7 16-16 20l-8-1Z"
            fill={palette.ribbonDark}
            fillOpacity=".35"
          />
          <path
            d="M145 67c-3 13-9 21-19 27l8 4c10-7 16-16 18-28l-7-3ZM155 67c3 13 9 21 19 27l-8 4c-10-7-16-16-18-28l7-3Z"
            fill={`url(#${ribbonGradient})`}
            stroke={palette.edge}
            strokeOpacity=".32"
            strokeWidth=".6"
          />
          <rect x="143" y="51" width="14" height="17" rx="6" transform="rotate(-2 143 51)" fill={palette.ribbonLight} stroke={palette.ribbonDark} strokeOpacity=".5" />
          <circle cx="150" cy="59" r="2.2" fill={palette.ribbonDark} fillOpacity=".5" />
        </g>

        {/* magic dust */}
        <g fill={palette.accent}>
          <circle cx="41" cy="118" r="1.3" opacity=".7" />
          <circle cx="263" cy="86" r="1" opacity=".45" />
          <circle cx="235" cy="47" r="1.6" opacity=".65" />
          <circle cx="58" cy="58" r=".9" opacity=".2" />
          <path d="m271 132 1.2 3.6 3.6 1.2-3.6 1.2-1.2 3.6-1.2-3.6-3.6-1.2 3.6-1.2 1.2-3.6Z" opacity=".7" />
          <path d="m29 76 1 2.9 2.9 1-2.9 1-1 2.9-1-2.9-2.9-1 2.9-1 1-2.9Z" opacity=".5" />
        </g>

        <defs>
          <radialGradient id={auraGradient} cx="0" cy="0" r="1" gradientTransform="translate(150 157) rotate(90) scale(118 84)" gradientUnits="userSpaceOnUse">
            <stop stopColor={palette.accent} stopOpacity=".4" />
            <stop offset="1" stopColor={palette.accent} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
