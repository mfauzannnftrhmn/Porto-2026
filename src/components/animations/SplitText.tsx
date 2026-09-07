"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
  style?: React.CSSProperties;
}

export default function SplitText({
  text,
  className = "",
  delay = 35,
  duration = 2,
  ease = "elastic.out(1, 0.3)",
  splitType = "chars",
  from = { opacity: 0, y: 35 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  tag = "p",
  textAlign = "left",
  onLetterAnimationComplete,
  style = {},
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [inView, setInView] = useState(false);
  const animatedRef = useRef(false);

  // Split text into words and chars
  const words = useMemo(() => {
    return text.split(" ").map((word) => word.split(""));
  }, [text]);

  // Intersection Observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Animate with GSAP when in view
  useEffect(() => {
    if (!inView || animatedRef.current) return;
    animatedRef.current = true;

    const targets = letterRefs.current.filter((el): el is HTMLSpanElement => el !== null);
    if (!targets.length) return;

    gsap.fromTo(
      targets,
      {
        opacity: from.opacity ?? 0,
        y: from.y ?? 35,
        ...from,
      },
      {
        opacity: to.opacity ?? 1,
        y: to.y ?? 0,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: onLetterAnimationComplete,
        ...to,
      }
    );
  }, [inView, duration, ease, delay, from, to, onLetterAnimationComplete]);

  const Tag = (tag || "p") as "p";

  let charIndex = 0;

  return (
    <Tag
      ref={containerRef as React.Ref<HTMLParagraphElement>}
      className={`inline-block ${className}`.trim()}
      style={{
        textAlign,
        ...style,
      }}
    >
      {words.map((wordChars, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {splitType === "words" ? (
            <span
              ref={(el) => {
                letterRefs.current[wordIdx] = el;
              }}
              className="inline-block will-change-transform will-change-opacity"
              style={{ opacity: 0 }}
            >
              {wordChars.join("")}
            </span>
          ) : (
            wordChars.map((char, charInWordIdx) => {
              const currentIndex = charIndex++;
              return (
                <span
                  key={charInWordIdx}
                  ref={(el) => {
                    letterRefs.current[currentIndex] = el;
                  }}
                  className="inline-block will-change-transform will-change-opacity"
                  style={{ opacity: 0 }}
                >
                  {char}
                </span>
              );
            })
          )}
          {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
