import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import type { SceneId } from "../types";
import { Moon } from "./Moon";
import { SkyLantern } from "./SkyLantern";
import { TempleSkyline, OilLamps } from "./Landscape";

type AtmosphereProps = {
  scene: SceneId;
};

const fract = (value: number) => value - Math.floor(value);

const stars = Array.from({ length: 74 }, (_, index) => {
  const x = fract(Math.sin(index * 12.9898) * 43758.5453);
  const y = fract(Math.sin(index * 36.771 + 11) * 14358.5453);
  const size = index % 13 === 0 ? 2.3 : index % 5 === 0 ? 1.6 : 1;
  return {
    left: `${(x * 100).toFixed(2)}%`,
    top: `${(y * 78).toFixed(2)}%`,
    width: `${size}px`,
    height: `${size}px`,
    opacity: 0.25 + fract(index * 3.17) * 0.65,
    animationDelay: `${(fract(index * 7.39) * 8).toFixed(2)}s`,
    animationDuration: `${(3.8 + fract(index * 2.91) * 5.2).toFixed(2)}s`,
    background: index % 9 === 0 ? "#F5C96A" : "#EDF2FF",
  } satisfies CSSProperties;
});

const lanterns = [
  { left: "3.5%", top: "23%", size: 36, opacity: 0.46, duration: 13, delay: "-2s", mobile: true },
  { left: "11%", top: "68%", size: 54, opacity: 0.56, duration: 17, delay: "-9s", mobile: true },
  { left: "18%", top: "38%", size: 28, opacity: 0.28, duration: 15, delay: "-5s", mobile: false },
  { left: "79%", top: "41%", size: 34, opacity: 0.38, duration: 14, delay: "-7s", mobile: false },
  { left: "91%", top: "58%", size: 58, opacity: 0.5, duration: 19, delay: "-11s", mobile: true },
  { left: "74%", top: "78%", size: 34, opacity: 0.38, duration: 16, delay: "-4s", mobile: false },
  { left: "44%", top: "9%", size: 24, opacity: 0.25, duration: 18, delay: "-13s", mobile: false },
  { left: "31%", top: "82%", size: 28, opacity: 0.24, duration: 14, delay: "-10s", mobile: false },
];

const motes = Array.from({ length: 13 }, (_, index) => {
  const x = fract(Math.sin(index * 9.71 + 4) * 5911.37);
  const y = fract(Math.sin(index * 3.13 + 7) * 8811.71);
  return {
    left: `${8 + x * 84}%`,
    top: `${40 + y * 55}%`,
    animationDelay: `${(index * 1.7) % 12}s`,
    animationDuration: `${10 + (index % 7) * 2.2}s`,
    width: `${index % 4 === 0 ? 3 : 1.6}px`,
    height: `${index % 4 === 0 ? 3 : 1.6}px`,
  };
});

export function Atmosphere({ scene }: AtmosphereProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = glowRef.current;
    if (!node) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        node.style.setProperty("--pointer-x", `${event.clientX}px`);
        node.style.setProperty("--pointer-y", `${event.clientY}px`);
        node.style.opacity = "1";
        frame = 0;
      });
    };
    const onLeave = () => {
      node.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="atmosphere" data-scene={scene} aria-hidden="true">
      <div className="atmosphere__base" />
      <div className="aurora aurora--gold" />
      <div className="aurora aurora--rose" />
      <div className="aurora aurora--violet" />

      <div className="starfield">
        {stars.map((style, index) => (
          <span
            key={index}
            className={`star ${index % 13 === 0 ? "star--bright" : ""}`}
            style={style}
          />
        ))}
        <span className="shooting-star shooting-star--one" />
        <span className="shooting-star shooting-star--two" />
      </div>

      <Moon />

      <div className="mist mist--one" />
      <div className="mist mist--two" />

      <div className="floating-lanterns">
        {lanterns.map((lantern, index) => (
          <SkyLantern
            key={index}
            className={lantern.mobile ? "" : "sky-lantern--desktop"}
            style={
              {
                left: lantern.left,
                top: lantern.top,
                "--lantern-size": `${lantern.size}px`,
                "--lantern-opacity": lantern.opacity,
                "--float-duration": `${lantern.duration}s`,
                "--float-delay": lantern.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="mote-field">
        {motes.map((mote, index) => (
          <span
            key={index}
            className="mote"
            style={{
              left: mote.left,
              top: mote.top,
              width: mote.width,
              height: mote.height,
              animationDelay: mote.animationDelay,
              animationDuration: mote.animationDuration,
            }}
          />
        ))}
      </div>

      <TempleSkyline />
      <div className="water-shimmer" />
      <OilLamps />

      <div className="vignette" />
      <div className="pointer-glow" ref={glowRef} />
      <div className="grain" />
    </div>
  );
}
