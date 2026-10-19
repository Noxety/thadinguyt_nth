import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, ClipboardEvent, FormEvent, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LockKeyhole, Sparkles, Star, UnlockKeyhole } from "lucide-react";
import { experience } from "../data/experience";
import { Eyebrow, OrnateButton } from "../components/Ornaments";

const codeCharacters = Array.from(experience.passcode.trim());
const codeLength = codeCharacters.length;
const numericPasscode = /^\d+$/.test(experience.passcode.trim());
const emptyCode = Array.from({ length: codeLength }, () => "");
const sanitizeCharacter = (value: string) =>
  numericPasscode ? value.replace(/\D/g, "") : value.replace(/\s/g, "");

type SecretSceneProps = {
  onUnlock: () => void;
};

function GateCrest() {
  return (
    <svg className="gate-crest" viewBox="0 0 180 94" fill="none" aria-hidden="true">
      <path d="M4 70h42M134 70h42" stroke="currentColor" strokeOpacity=".3" />
      <path d="M52 70c12-3 19-9 24-17M128 70c-12-3-19-9-24-17" stroke="currentColor" strokeOpacity=".4" />
      <path d="M90 15v22M75 29c9 0 15 5 15 14 0-9 6-14 15-14-9 0-15-5-15-14 0 9-6 14-15 14Z" stroke="currentColor" strokeOpacity=".65" />
      <circle cx="90" cy="43" r="2.4" fill="currentColor" fillOpacity=".7" />
      <path d="M68 57c7-7 14-9 22-9s15 2 22 9" stroke="currentColor" strokeOpacity=".3" />
      <path d="M74 68c5 4 10 6 16 6s11-2 16-6" stroke="currentColor" strokeOpacity=".22" />
    </svg>
  );
}

export function SecretScene({ onUnlock }: SecretSceneProps) {
  const [digits, setDigits] = useState<string[]>(emptyCode);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [shaking, setShaking] = useState(false);
  const unlockTimer = useRef<number | null>(null);
  const shakeTimer = useRef<number | null>(null);
  const resetTimer = useRef<number | null>(null);
  const digitRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    return () => {
      if (unlockTimer.current) window.clearTimeout(unlockTimer.current);
      if (shakeTimer.current) window.clearTimeout(shakeTimer.current);
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, []);

  const focusDigit = (index: number) => {
    const target = digitRefs.current[Math.max(0, Math.min(index, codeLength - 1))];
    target?.focus();
    target?.select();
  };

  const updateDigit = (index: number, character: string) => {
    setDigits((current) => {
      const next = [...current];
      next[index] = character;
      return next;
    });
    if (error) setError("");
  };

  const fillFrom = (index: number, characters: string[]) => {
    if (characters.length === 0) return;
    const clipped = characters.slice(0, codeLength - index);
    setDigits((current) => {
      const next = [...current];
      clipped.forEach((character, offset) => {
        next[index + offset] = character;
      });
      return next;
    });
    if (error) setError("");
    focusDigit(index + clipped.length);
  };

  const handleDigitChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    if (success) return;
    const characters = Array.from(sanitizeCharacter(event.target.value));
    if (characters.length === 0) {
      updateDigit(index, "");
      return;
    }
    fillFrom(index, characters);
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      if (digits[index]) {
        updateDigit(index, "");
        return;
      }
      if (index > 0) {
        updateDigit(index - 1, "");
        focusDigit(index - 1);
      }
      return;
    }
    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      focusDigit(index - 1);
    }
    if (event.key === "ArrowRight" && index < codeLength - 1) {
      event.preventDefault();
      focusDigit(index + 1);
    }
  };

  const handlePaste = (index: number, event: ClipboardEvent<HTMLInputElement>) => {
    if (success) return;
    const pasted = sanitizeCharacter(event.clipboardData.getData("text"));
    if (!pasted) return;
    event.preventDefault();
    fillFrom(index, Array.from(pasted));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (success) return;

    const entered = digits.join("").toLowerCase();
    const isCorrect = entered === experience.passcode.trim().toLowerCase();

    if (!isCorrect) {
      setError(experience.secret.error);
      setShaking(true);
      if (shakeTimer.current) window.clearTimeout(shakeTimer.current);
      shakeTimer.current = window.setTimeout(() => setShaking(false), 480);
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => {
        setDigits(emptyCode);
        focusDigit(0);
      }, 330);
      return;
    }

    setError("");
    setSuccess(true);
    unlockTimer.current = window.setTimeout(onUnlock, 2050);
  };

  const feedbackId = error ? "passcode-error" : "passcode-hint";

  return (
    <section className="scene scene--secret" aria-labelledby="secret-title">
      <div className="scene__inner secret-layout">
        <div className={`gate-stage ${success ? "gate-stage--unlocked" : ""}`}>
          <div className="gate-halo" aria-hidden="true" />
          <div className="gate-structure" aria-hidden="true">
            <div className="gate-doors">
              <motion.div
                className="gate-door gate-door--left"
                animate={success ? { x: "-106%", opacity: 0.2 } : { x: 0, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.2, 1], delay: 0.46 }}
              >
                <span className="gate-door__medallion" />
              </motion.div>
              <motion.div
                className="gate-door gate-door--right"
                animate={success ? { x: "106%", opacity: 0.2 } : { x: 0, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.2, 1], delay: 0.46 }}
              >
                <span className="gate-door__medallion" />
              </motion.div>
              <motion.div
                className="gate-light"
                animate={success ? { opacity: 1, scale: 1.15 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1.1, delay: 0.28, ease: "easeOut" }}
              />
            </div>
            <div className="gate-frame" />
            <div className="gate-pillar gate-pillar--left" />
            <div className="gate-pillar gate-pillar--right" />
            <GateCrest />
          </div>

          <div className="gate-content">
            <motion.div
              className="secret-panel"
              animate={
                success
                  ? { opacity: 0, y: -18, filter: "blur(5px)" }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              transition={{ duration: 0.65, delay: success ? 0.28 : 0 }}
            >
              <span className="secret-lock" aria-hidden="true">
                {success ? (
                  <UnlockKeyhole size={21} strokeWidth={1.5} />
                ) : (
                  <LockKeyhole size={21} strokeWidth={1.5} />
                )}
              </span>

              <Eyebrow>{experience.secret.eyebrow}</Eyebrow>
              <h2 id="secret-title" className="secret-title">
                {experience.secret.title}
              </h2>
              <p className="secret-message">{experience.secret.message}</p>

              <form className="secret-form" onSubmit={handleSubmit} noValidate>
                <p className="secret-label" id="passcode-label">
                  {experience.secret.inputLabel}
                </p>

                <div
                  className={`secret-code ${shaking ? "is-shaking" : ""}`}
                  role="group"
                  aria-labelledby="passcode-label"
                  aria-describedby={feedbackId}
                >
                  {digits.map((digit, index) => (
                    <input
                      key={index}
                      ref={(element) => {
                        digitRefs.current[index] = element;
                      }}
                      className="secret-digit"
                      type="text"
                      value={digit}
                      onChange={(event) => handleDigitChange(index, event)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
                      onPaste={(event) => handlePaste(index, event)}
                      onFocus={(event) => event.currentTarget.select()}
                      autoComplete={index === 0 ? "one-time-code" : "off"}
                      autoCapitalize="off"
                      autoCorrect="off"
                      inputMode={numericPasscode ? "numeric" : "text"}
                      pattern={numericPasscode ? "[0-9]*" : undefined}
                      spellCheck={false}
                      maxLength={1}
                      disabled={success}
                      data-filled={Boolean(digit)}
                      aria-label={`Digit ${index + 1} of ${codeLength}`}
                      aria-invalid={Boolean(error)}
                    />
                  ))}
                </div>

                <div className="secret-feedback" aria-live="polite">
                  <AnimatePresence mode="wait">
                    {error ? (
                      <motion.p
                        id="passcode-error"
                        key="error"
                        className="secret-error"
                        role="alert"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                      >
                        {error}
                      </motion.p>
                    ) : (
                      <motion.p
                        id="passcode-hint"
                        key="hint"
                        className="secret-hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Star size={11} strokeWidth={1.5} aria-hidden="true" />
                        {experience.passcodeHint}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <OrnateButton
                  type="submit"
                  className="secret-submit"
                  disabled={success}
                  icon={
                    success ? (
                      <UnlockKeyhole size={15} strokeWidth={1.7} />
                    ) : (
                      <Sparkles size={15} strokeWidth={1.6} />
                    )
                  }
                >
                  {success ? "The gate is opening" : experience.secret.button}
                </OrnateButton>
              </form>
            </motion.div>

            <AnimatePresence>
              {success && (
                <motion.p
                  className="gate-success"
                  role="status"
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.65, duration: 0.9 }}
                >
                  {experience.secret.success}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
