export function TempleSkyline() {
  return (
    <div className="landscape" aria-hidden="true">
      <svg
        className="landscape-art"
        viewBox="0 0 1440 430"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <defs>
          <linearGradient id="hillFar" x1="720" y1="230" x2="720" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1934" stopOpacity=".48" />
            <stop offset="1" stopColor="#0C0D19" stopOpacity=".96" />
          </linearGradient>
          <linearGradient id="hillMid" x1="720" y1="280" x2="720" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#17152C" />
            <stop offset="1" stopColor="#090A14" />
          </linearGradient>
          <linearGradient id="templeFace" x1="720" y1="130" x2="720" y2="390" gradientUnits="userSpaceOnUse">
            <stop stopColor="#201B3E" />
            <stop offset=".62" stopColor="#100E21" />
            <stop offset="1" stopColor="#090913" />
          </linearGradient>
          <linearGradient id="waterFade" x1="720" y1="360" x2="720" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0C0E1D" stopOpacity="0" />
            <stop offset=".35" stopColor="#0C1225" />
            <stop offset="1" stopColor="#070A14" />
          </linearGradient>
          <filter id="templeGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softFar" x="-5%" y="-20%" width="110%" height="140%">
            <feGaussianBlur stdDeviation="1.1" />
          </filter>
        </defs>

        {/* distant hills */}
        <path
          d="M0 319C99 301 177 312 267 288c84-23 175-10 254-28 101-23 166-3 264-12 121-12 190 10 285-12 93-22 196 3 370-24v218H0V319Z"
          fill="url(#hillFar)"
          filter="url(#softFar)"
        />
        <path
          d="M0 362c145-19 247 2 386-21 95-16 167-2 280-20 108-17 166 4 270 2 148-3 256-26 504-6v113H0V362Z"
          fill="url(#hillMid)"
        />

        {/* far temple cluster — left */}
        <g opacity=".5" filter="url(#softFar)">
          <path d="M172 338h226v17H172z" fill="#080810" />
          <path d="M204 338V315l34-23h94l34 23v23h-30v-14H234v14h-30Z" fill="#0B0A18" />
          <path d="M202 315h166" stroke="#F5C96A" strokeOpacity=".12" />
          <path d="M247 292v-19h80v19" stroke="#100E20" strokeWidth="6" />
          <path d="M287 273v-46m0 0-5 12h10l-5-12Z" stroke="#F5C96A" strokeOpacity=".18" />
          <path d="M338 318v-35l19-16h27l19 16v35" fill="#0B0A18" />
          <path d="M392 268v-34" stroke="#F5C96A" strokeOpacity=".13" />
        </g>

        {/* main pagoda — centre */}
        <g className="temple-main">
          <g fill="url(#templeFace)" stroke="#F5C96A" strokeOpacity=".27" strokeWidth=".7">
            <path d="M543 371h354l-24 25H567l-24-25Z" />
            <path d="M573 354h294v17H573z" />
            <path d="M600 342h240v12H600z" />
            <path d="M626 329h188v13H626z" />
            <path d="M646 317h148v12H646z" />
            <path d="M662 317v-17h116v17" />
            <path
              d="M668 302c0-32 12-61 34-79 5-4 10-7 18-9 8 2 13 5 18 9 22 18 34 47 34 79H668Z"
            />
            <path d="M703 214h34v26h-34z" />
            <path d="M712 214v-16h16v16" />
          </g>

          {/* stupa shading */}
          <path
            d="M690 300c5-32 17-58 30-71v73h-30Z"
            fill="#FFF8E8"
            fillOpacity=".025"
          />
          <path
            d="M720 125c-1 0-2 42-5 73h10c-3-31-4-73-5-73Z"
            fill="#17132B"
            stroke="#F5C96A"
            strokeOpacity=".38"
            strokeWidth=".6"
          />
          {/* rings on spire */}
          <g stroke="#F5C96A" strokeOpacity=".32" strokeWidth=".6">
            <path d="M710 214h20M708 206h24M706 198h28M704 190h32M702 182h36M700 174h40M699 166h42M698 158h44M697 150h46M697 142h46M698 134h44" />
          </g>
          {/* hti finial */}
          <g stroke="#F5C96A" strokeOpacity=".5" strokeWidth=".8">
            <path d="M720 124V76" />
            <path d="M720 76c-14 4-23 10-28 18M720 76c14 4 23 10 28 18" />
            <path d="M720 68v-12" />
            <path d="m720 49-5 8h10l-5-8Z" fill="#F5C96A" fillOpacity=".28" />
            <path d="M712 84h16M714 92h12M716 100h8" />
          </g>

          {/* side stupas */}
          <g fill="#0A0A16" stroke="#F5C96A" strokeOpacity=".25" strokeWidth=".6">
            <path d="M486 363h106l-11 15H497l-11-15Z" />
            <path d="M505 353h69v10h-69z" />
            <path d="M518 345h44v8h-44z" />
            <path d="M525 345v-9h30v9" />
            <path d="M530 336c0-17 5-29 10-36 5 7 10 19 10 36h-20Z" />
            <path d="M540 300v-22" />
            <path d="M540 300h0M536 291h8M538 284h4" />
            <path d="M852 363h106l-11 15H863l-11-15Z" />
            <path d="M871 353h69v10h-69z" />
            <path d="M884 345h44v8h-44z" />
            <path d="M891 345v-9h30v9" />
            <path d="M896 336c0-17 5-29 10-36 5 7 10 19 10 36h-20Z" />
            <path d="M906 300v-22" />
            <path d="M902 291h8M904 284h4" />
          </g>

          {/* warm windows */}
          <g fill="#F5C96A" filter="url(#templeGlow)">
            <rect x="579" y="359" width="5" height="6" rx="1" opacity=".55" />
            <rect x="602" y="359" width="4" height="5" rx="1" opacity=".35" />
            <rect x="767" y="359" width="4" height="5" rx="1" opacity=".3" />
            <rect x="846" y="359" width="5" height="6" rx="1" opacity=".5" />
            <rect x="634" y="348" width="3.5" height="4.5" rx="1" opacity=".32" />
            <rect x="800" y="348" width="3.5" height="4.5" rx="1" opacity=".4" />
            <rect x="680" y="279" width="4" height="7" rx="2" opacity=".6" />
            <rect x="752" y="279" width="4" height="7" rx="2" opacity=".5" />
            <circle cx="720" cy="320" r="2.4" opacity=".6" />
            <rect x="516" y="356" width="3" height="4" rx="1" opacity=".35" />
            <rect x="545" y="356" width="3" height="4" rx="1" opacity=".25" />
            <rect x="882" y="356" width="3" height="4" rx="1" opacity=".32" />
            <rect x="911" y="356" width="3" height="4" rx="1" opacity=".25" />
          </g>

          {/* golden moonlight catching the silhouette */}
          <path d="M720 125c33 22 55 71 55 107M720 125c-33 22-55 71-55 107" stroke="#D9E2F2" strokeOpacity=".1" strokeWidth="1" />
        </g>

        {/* small pagoda — right */}
        <g opacity=".62" filter="url(#softFar)">
          <path d="M1120 366h168v22h-168z" fill="#080812" />
          <path d="M1145 366v-20l24-18h70l24 18v20h-21v-12h-76v12h-21Z" fill="#0B0A17" stroke="#F5C96A" strokeOpacity=".16" strokeWidth=".6" />
          <path d="M1170 346v-23h70v23" stroke="#100E20" strokeWidth="4" />
          <path d="M1205 323v-46m0 0-7 14h14l-7-14Z" stroke="#F5C96A" strokeOpacity=".2" />
          <path d="M1231 344v-30l14-12h22l14 12v30h-12v-18h-26v18h-12Z" fill="#0B0A17" />
          <path d="M1265 302v-24" stroke="#F5C96A" strokeOpacity=".15" />
        </g>

        {/* foreground canopy */}
        <g fill="#070810">
          <path d="M0 397c27-15 44-12 64-21 18-9 30 2 48-2 20-4 31 3 48 16 14 11 23 15 35 14v27H0v-34Z" />
          <path d="M1440 398c-31-18-51-13-72-22-18-8-34 3-51-1-20-5-31 4-48 17-12 10-21 13-33 14v25h204v-33Z" />
          <path d="M632 410c6-13 21-22 36-18 19-10 41-4 48 11 11-8 31-7 39 7 11-4 25 1 26 12H632Z" />
          <path d="M89 412c10-17 30-23 45-12 14-15 42-11 51 7 15-4 30 5 33 19H89Z" opacity=".55" />
          <path d="M1196 412c10-17 30-23 45-12 14-15 42-11 51 7 15-4 30 5 33 19h-129Z" opacity=".55" />
        </g>

        {/* water and its shimmer */}
        <rect x="0" y="368" width="1440" height="62" fill="url(#waterFade)" />
        <g opacity=".17" transform="translate(0 742) scale(1 -1)" filter="url(#softFar)">
          <path d="M543 371h354l-24 25H567l-24-25Z" fill="#F5C96A" fillOpacity=".3" />
          <path d="M573 354h294v17H573z" fill="#F5C96A" fillOpacity=".22" />
          <path d="M600 342h240v12H600z" fill="#F5C96A" fillOpacity=".17" />
          <path d="M646 317h148v12H646z" fill="#F5C96A" fillOpacity=".14" />
          <path d="M720 125v160" stroke="#F5C96A" strokeWidth="1.4" />
        </g>
        <g stroke="#F5C96A" strokeOpacity=".16">
          <path d="M502 393h120M658 396h196M844 392h91M1090 399h158" />
          <path d="M582 407h96M740 410h125M947 405h77M1203 412h104" strokeOpacity=".09" />
          <path d="M674 420h100M480 418h77M1071 420h115" strokeOpacity=".06" />
        </g>
        <ellipse cx="720" cy="407" rx="116" ry="9" fill="#F5C96A" opacity=".035" filter="url(#softFar)" />
      </svg>
      <div className="landscape-fog" />
    </div>
  );
}

export function OilLamps() {
  const lamps = [
    { left: "6%", delay: "0.2s", scale: 0.8 },
    { left: "16%", delay: "1.4s", scale: 0.62 },
    { left: "28%", delay: "2.3s", scale: 0.95 },
    { left: "43%", delay: "0.8s", scale: 0.66 },
    { left: "58%", delay: "1.8s", scale: 0.9 },
    { left: "72%", delay: "0.4s", scale: 0.7 },
    { left: "84%", delay: "2.1s", scale: 0.8 },
    { left: "94%", delay: "1s", scale: 0.55 },
  ];

  return (
    <div className="oil-lamps" aria-hidden="true">
      {lamps.map((lamp, index) => (
        <div
          key={index}
          className="oil-lamp"
          style={{
            left: lamp.left,
            animationDelay: lamp.delay,
            transform: `scale(${lamp.scale})`,
          }}
        >
          <svg viewBox="0 0 42 54" fill="none">
            <ellipse cx="21" cy="50" rx="16" ry="3.2" fill="#F5C96A" opacity=".08" />
            <path d="M8 38c2-6 8-9 13-9s11 3 13 9c-4 4-22 4-26 0Z" fill="#2C1D2B" stroke="#F5C96A" strokeOpacity=".48" strokeWidth=".7" />
            <path d="M11 38c4-2 6-2 10-2s7 0 10 2" stroke="#F5C96A" strokeOpacity=".35" strokeWidth=".7" />
            <path d="M21 36c-6-3-8-8-3-12 1 4 3 5 3 5 0-4 5-7 7-11 4 9 1 15-7 18Z" fill="#FFE5A2" opacity=".9" />
            <path d="M21 34c-2.7-2-3.6-4.7-1.2-6.7.3 1.7 1.6 2.8 1.6 2.8.2-1.6 1.2-2.7 2.6-4.2 1 4.3-.3 6.8-3 8.1Z" fill="#FFF9E7" />
            <circle cx="21" cy="35" r="1.5" fill="#FFFDF4" />
            <path d="M21 40v3" stroke="#F5C96A" strokeOpacity=".3" strokeWidth=".7" />
          </svg>
        </div>
      ))}
    </div>
  );
}
