export function Moon() {
  return (
    <div className="moon-shell" aria-hidden="true">
      <div className="moon-halo moon-halo--wide" />
      <div className="moon-halo moon-halo--tight" />
      <svg className="moon-disc" viewBox="0 0 240 240" fill="none">
        <defs>
          <radialGradient id="moonSurface" cx="0" cy="0" r="1" gradientTransform="translate(92 76) rotate(49) scale(158)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFDF3" />
            <stop offset=".42" stopColor="#F7EDCE" />
            <stop offset=".78" stopColor="#E7D8B3" />
            <stop offset="1" stopColor="#CBB98E" />
          </radialGradient>
          <radialGradient id="moonShade" cx="0" cy="0" r="1" gradientTransform="translate(164 168) rotate(-133) scale(132)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AA976F" stopOpacity=".26" />
            <stop offset="1" stopColor="#AA976F" stopOpacity="0" />
          </radialGradient>
          <filter id="moonSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.8" />
          </filter>
        </defs>
        <circle cx="120" cy="120" r="88" fill="url(#moonSurface)" />
        <circle cx="120" cy="120" r="88" fill="url(#moonShade)" />
        <g fill="#A18E65" filter="url(#moonSoft)">
          <ellipse cx="86" cy="79" rx="19" ry="12" transform="rotate(-28 86 79)" opacity=".16" />
          <ellipse cx="154" cy="84" rx="12" ry="8" transform="rotate(22 154 84)" opacity=".13" />
          <ellipse cx="157" cy="149" rx="25" ry="15" transform="rotate(-15 157 149)" opacity=".12" />
          <ellipse cx="100" cy="153" rx="13" ry="19" transform="rotate(31 100 153)" opacity=".15" />
          <ellipse cx="122" cy="116" rx="8" ry="5" opacity=".1" />
          <ellipse cx="69" cy="120" rx="8" ry="11" opacity=".1" />
        </g>
        <circle cx="120" cy="120" r="87.5" stroke="#FFF8DC" strokeOpacity=".32" />
      </svg>
    </div>
  );
}
