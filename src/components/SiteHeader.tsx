import { Volume2, VolumeX } from "lucide-react";
import type { SceneId } from "../types";
import { MoonMark } from "./Ornaments";

const chapters: { id: SceneId; label: string }[] = [
  { id: "intro", label: "The beginning" },
  { id: "secret", label: "The secret" },
  { id: "festival", label: "The festival" },
  { id: "gifts", label: "The choosing" },
  { id: "reveal", label: "Your surprise" },
  { id: "letter", label: "The letter" },
  { id: "finale", label: "The last wish" },
];

type SiteHeaderProps = {
  scene: SceneId;
  soundEnabled: boolean;
  soundAvailable: boolean;
  onToggleSound: () => void;
};

export function SiteHeader({
  scene,
  soundEnabled,
  soundAvailable,
  onToggleSound,
}: SiteHeaderProps) {
  const currentIndex = chapters.findIndex((chapter) => chapter.id === scene);

  return (
    <header className="site-header">
      <div className="site-header__brand" aria-hidden="true">
        <span className="site-header__mark">
          <MoonMark className="h-full w-full" />
        </span>
        <span className="site-header__wordmark">
          <span>Thadingyut</span>
          <small>a little night for you</small>
        </span>
      </div>

      <nav className="journey-progress" aria-label="Your journey through the night">
        <span className="sr-only">
          Chapter {currentIndex + 1} of {chapters.length}:{" "}
          {chapters[currentIndex]?.label}
        </span>
        {chapters.map((chapter, index) => (
          <span
            key={chapter.id}
            className="journey-progress__step"
            data-active={index === currentIndex}
            data-past={index < currentIndex}
            aria-current={index === currentIndex ? "step" : undefined}
            title={chapter.label}
          />
        ))}
      </nav>

      <div className="site-header__actions">
        {soundAvailable && (
          <button
            type="button"
            className="sound-toggle"
            onClick={onToggleSound}
            aria-pressed={soundEnabled}
            aria-label={soundEnabled ? "Quiet the night" : "Bring the night to life with sound"}
            title={soundEnabled ? "Sound on" : "Sound off"}
          >
            {/* A tiny animated equaliser when sound is on. */}
            {soundEnabled ? (
              <Volume2 size={17} strokeWidth={1.6} aria-hidden="true" />
            ) : (
              <VolumeX size={17} strokeWidth={1.6} aria-hidden="true" />
            )}
            <span className="sound-toggle__label">
              {soundEnabled ? "Sound on" : "Sound off"}
            </span>
          </button>
        )}
      </div>
    </header>
  );
}
