import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} mb-12 md:mb-16`}>
      {eyebrow && (
        <ScrollReveal delay={0}>
          <span
            className={`text-xs tracking-[0.3em] uppercase font-medium mb-3 ${
              light ? "text-[#E8C97A]" : "text-[#5C7C5E]"
            }`}
          >
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
            light ? "text-white" : "text-[#2D3A2E]"
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p
            className={`mt-4 max-w-xl text-base md:text-lg leading-relaxed ${
              light ? "text-white/70" : "text-[#8B8578]"
            }`}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}