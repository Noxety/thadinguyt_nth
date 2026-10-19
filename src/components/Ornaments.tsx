import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

type OrnateButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> & {
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  children: ReactNode;
};

export function OrnateButton({
  variant = "primary",
  icon,
  children,
  className = "",
  disabled,
  ...props
}: OrnateButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.975 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      disabled={disabled}
      className={`ornate-button ornate-button--${variant} ${className}`}
      {...props}
    >
      <span className="ornate-button__shine" aria-hidden="true" />
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 shrink-0" aria-hidden="true">
        {icon ?? <ArrowRight size={15} strokeWidth={1.8} />}
      </span>
    </motion.button>
  );
}

export function Eyebrow({
  children,
  className = "",
  align = "center",
}: {
  children: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <p
      className={`eyebrow ${align === "left" ? "eyebrow--left" : ""} ${className}`}
    >
      <span className="eyebrow__line" aria-hidden="true" />
      <Sparkles className="eyebrow__star" size={11} strokeWidth={1.5} aria-hidden="true" />
      <span>{children}</span>
      <Sparkles className="eyebrow__star" size={11} strokeWidth={1.5} aria-hidden="true" />
      <span className="eyebrow__line" aria-hidden="true" />
    </p>
  );
}

export function LotusDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`lotus-divider ${className}`}
      viewBox="0 0 260 30"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 15h87" stroke="currentColor" strokeOpacity=".34" />
      <path d="M169 15h87" stroke="currentColor" strokeOpacity=".34" />
      <path d="M100 15c7-6 14-8 21-8-1 8-5 15-13 19" stroke="currentColor" strokeOpacity=".55" />
      <path d="M160 15c-7-6-14-8-21-8 1 8 5 15 13 19" stroke="currentColor" strokeOpacity=".55" />
      <path d="M109 15c4-10 10-14 21-14s17 4 21 14c-4 10-10 14-21 14s-17-4-21-14Z" stroke="currentColor" strokeOpacity=".75" />
      <path d="M118 15c3-4 6-6 12-6s9 2 12 6c-3 6-6 8-12 8s-9-2-12-8Z" fill="currentColor" fillOpacity=".22" />
      <circle cx="130" cy="15" r="2.2" fill="currentColor" fillOpacity=".9" />
      <circle cx="94" cy="15" r="1.2" fill="currentColor" fillOpacity=".55" />
      <circle cx="166" cy="15" r="1.2" fill="currentColor" fillOpacity=".55" />
    </svg>
  );
}

export function MoonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeOpacity=".35" />
      <path
        d="M25.8 10.6c-6 1.2-9.4 5.2-9.4 10.1 0 5.4 4.1 9.5 9.3 9.6-1.6 1.5-3.7 2.3-6 2.3-5.7 0-10.3-4.6-10.3-10.3S14 12.1 19.7 12.1c2.3 0 4.4.8 6.1 2.1Z"
        fill="currentColor"
        fillOpacity=".85"
      />
      <circle cx="28.5" cy="14.5" r="1.1" fill="currentColor" />
      <circle cx="30" cy="22.5" r=".7" fill="currentColor" fillOpacity=".7" />
    </svg>
  );
}

export function CornerFlourish({
  position = "top-left",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  return (
    <svg
      className={`corner-flourish corner-flourish--${position}`}
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 42V10a8 8 0 0 1 8-8h32" stroke="currentColor" strokeOpacity=".55" strokeWidth=".8" />
      <path d="M13 43V19a6 6 0 0 1 6-6h24" stroke="currentColor" strokeOpacity=".26" strokeWidth=".7" />
      <path d="M16 16c8 0 12 4 12 12M24 24c4-4 8-5 14-4" stroke="currentColor" strokeOpacity=".55" strokeWidth=".7" />
      <path d="m22 36 3-6 3 6-3 6-3-6Z" fill="currentColor" fillOpacity=".45" />
      <circle cx="9" cy="9" r="1.3" fill="currentColor" fillOpacity=".8" />
    </svg>
  );
}
