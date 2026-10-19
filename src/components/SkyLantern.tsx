import { useId, type CSSProperties } from "react";

type LanternProps = {
  className?: string;
  style?: CSSProperties;
  muted?: boolean;
};

export function SkyLantern({ className = "", style, muted = false }: LanternProps) {
  const rawId = useId();
  const uid = rawId.replace(/:/g, "");
  const bodyGradient = `lantern-body-${uid}`;
  const flameGradient = `lantern-flame-${uid}`;

  return (
    <div className={`sky-lantern ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 80 126" fill="none">
        <defs>
          <linearGradient id={bodyGradient} x1="24" y1="20" x2="58" y2="96" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE3A1" />
            <stop offset=".34" stopColor="#F3C46B" />
            <stop offset=".74" stopColor="#C78334" />
            <stop offset="1" stopColor="#8C4F1D" />
          </linearGradient>
          <radialGradient id={flameGradient} cx="0" cy="0" r="1" gradientTransform="translate(40 96) rotate(90) scale(12 18)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFBEA" />
            <stop offset=".35" stopColor="#FFE49A" />
            <stop offset="1" stopColor="#F5A93F" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="40" cy="104" rx="24" ry="8" fill="#F5C96A" opacity={muted ? 0.08 : 0.2} />
        <path
          d="M25 35C25 19.5 31 13 40 13s15 6.5 15 22l2.6 59.5c-11 5-24.2 5-35.2 0L25 35Z"
          fill={`url(#${bodyGradient})`}
          opacity={muted ? 0.36 : 0.88}
        />
        <path
          d="M25 35C25 19.5 31 13 40 13s15 6.5 15 22l2.6 59.5c-11 5-24.2 5-35.2 0L25 35Z"
          stroke="#FFE9B5"
          strokeOpacity={muted ? 0.25 : 0.55}
          strokeWidth=".8"
        />
        <path d="M31 24.5c2.2-6.6 5.1-9 9-9s6.8 2.4 9 9" stroke="#FFF3CF" strokeOpacity=".6" strokeWidth=".9" />
        <path d="M26.6 48.5c8.8 3 18.1 3 26.8 0M27.7 64c8 2.6 16.6 2.6 24.6 0M28.7 79.2c7.4 2.2 15.2 2.2 22.6 0" stroke="#7F4719" strokeOpacity=".45" strokeWidth=".8" />
        <path d="M33 34v56M47 34v56" stroke="#8E521E" strokeOpacity=".28" strokeWidth=".8" />
        <ellipse cx="40" cy="92" rx="14.5" ry="4.5" fill="#5E3517" fillOpacity=".8" />
        <ellipse cx="40" cy="93.5" rx="7.5" ry="10" fill={`url(#${flameGradient})`} opacity={muted ? 0.15 : 0.9} />
        <ellipse cx="40" cy="95" rx="2.8" ry="5.4" fill="#FFF6D8" opacity={muted ? 0.15 : 0.9} />
        <path d="M40 13V7M36.5 8.5 40 5l3.5 3.5" stroke="#F5C96A" strokeOpacity=".5" strokeWidth=".8" />
        <circle cx="56" cy="20" r=".9" fill="#FFF0C2" fillOpacity=".6" />
        <circle cx="20" cy="46" r=".65" fill="#FFF0C2" fillOpacity=".4" />
      </svg>
    </div>
  );
}
