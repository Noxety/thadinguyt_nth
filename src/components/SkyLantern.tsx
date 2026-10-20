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
      <svg viewBox="0 0 80 80" fill="none">
        <defs>
          <linearGradient id={bodyGradient} x1="24" y1="16" x2="58" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE3A1" />
            <stop offset=".34" stopColor="#F3C46B" />
            <stop offset=".74" stopColor="#C78334" />
            <stop offset="1" stopColor="#8C4F1D" />
          </linearGradient>
          <radialGradient id={flameGradient} cx="0" cy="0" r="1" gradientTransform="translate(40 61) rotate(90) scale(11 14)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFBEA" />
            <stop offset=".35" stopColor="#FFE49A" />
            <stop offset="1" stopColor="#F5A93F" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="40" cy="70" rx="26" ry="6.5" fill="#F5C96A" opacity={muted ? 0.08 : 0.2} />
        <path
          d="M26 13C30 11 50 11 54 13l9 11c1.6 1.8 2.4 4.4 2.4 7.4l.6 26.2c.2 4-2 7.2-5.8 8.6-12.4 4.6-28 4.6-40.4 0C16 64.8 13.8 61.6 14 57.6l.6-26.2c0-3 .8-5.6 2.4-7.4l9-11Z"
          fill={`url(#${bodyGradient})`}
          opacity={muted ? 0.36 : 0.88}
        />
        <path
          d="M26 13C30 11 50 11 54 13l9 11c1.6 1.8 2.4 4.4 2.4 7.4l.6 26.2c.2 4-2 7.2-5.8 8.6-12.4 4.6-28 4.6-40.4 0C16 64.8 13.8 61.6 14 57.6l.6-26.2c0-3 .8-5.6 2.4-7.4l9-11Z"
          stroke="#FFE9B5"
          strokeOpacity={muted ? 0.25 : 0.55}
          strokeWidth=".8"
        />
        <path d="M28 22c3-7.4 6.6-9.8 12-9.8s9 2.4 12 9.8" stroke="#FFF3CF" strokeOpacity=".6" strokeWidth=".9" />
        <path d="M16.6 32c10.6 3.2 36.2 3.2 46.8 0M15.8 44c10.8 3 37.6 3 48.4 0M15.2 55c11 2.6 38.6 2.6 49.6 0" stroke="#7F4719" strokeOpacity=".45" strokeWidth=".8" />
        <path d="M30 24v34M50 24v34" stroke="#8E521E" strokeOpacity=".28" strokeWidth=".8" />
        <ellipse cx="40" cy="59.5" rx="17" ry="4.4" fill="#5E3517" fillOpacity=".8" />
        <ellipse cx="40" cy="61" rx="8" ry="9.6" fill={`url(#${flameGradient})`} opacity={muted ? 0.15 : 0.9} />
        <ellipse cx="40" cy="62.4" rx="3" ry="5.2" fill="#FFF6D8" opacity={muted ? 0.15 : 0.9} />
        <path d="M40 12V7M36.5 8.5 40 5l3.5 3.5" stroke="#F5C96A" strokeOpacity=".5" strokeWidth=".8" />
        <circle cx="60" cy="22" r=".9" fill="#FFF0C2" fillOpacity=".6" />
        <circle cx="18" cy="42" r=".65" fill="#FFF0C2" fillOpacity=".4" />
      </svg>
    </div>
  );
}
