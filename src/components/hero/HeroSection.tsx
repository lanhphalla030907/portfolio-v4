"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Send,
  MapPin,
  Briefcase,
  GraduationCap,
  User,
  Sparkles,
  Trophy,
  Layers,
  FolderGit2,
  Award,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isManualAura, setIsManualAura] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const portraitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keeps the scan mask + ring in sync with the input position.
  const updateScanPosition = (clientX: number, clientY: number) => {
    const portrait = portraitRef.current;
    if (!portrait) return;
    const rect = portrait.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    portrait.style.setProperty("--mouse-x", `${x.toFixed(1)}px`);
    portrait.style.setProperty("--mouse-y", `${y.toFixed(1)}px`);
  };

  // Pointer events cover mouse / stylus hover. Touch is handled separately so
  // the scan keeps tracking even while the finger scrolls the page.
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    updateScanPosition(e.clientX, e.clientY);
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    setIsHovered(true);
    handlePointerMove(e);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    setIsHovered(false);
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0] ?? e.changedTouches[0];
    if (!touch) return;
    updateScanPosition(touch.clientX, touch.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsHovered(true);
    handleTouch(e);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  
const stats = [
  {
    value: "6+",
    label: "Personal Projects",
    detail: "Web applications & backend systems",
    icon: FolderGit2,
    accentColor: "text-ink",
  },
  {
    value: "10+",
    label: "Technologies",
    detail: "Node.js, NestJS, React, Spring Boot",
    icon: Layers,
    accentColor: "text-ink",
  },
  {
    value: "6+",
    label: "Certifications",
    detail: "Professional courses & technical training",
    icon: Award,
    accentColor: "text-ink",
  },
];


  return (
    <section className="hero relative bg-[var(--paper)] overflow-hidden" style={{ height: "100svh", minHeight: 680 }}>
      {/* Background Architectural Contours */}
      <svg className="hero-contours absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="var(--ink)"
              strokeOpacity="0.06"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* ═══ LEFT SECTION: IDENTITY & FOCUS ═══ */}
      <div
        className={`hero-intro absolute z-30 left-[var(--gutter)] top-1/2 -translate-y-[45%] max-w-[540px] transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-[-45%]" : "opacity-0 translate-y-[-40%]"
        }`}
        style={{ ["--gutter" as string]: "clamp(16px, 5vw, 72px)" }}
      >
        {/* Availability Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface/90 border border-line/20 cut-corner-sm shadow-xs mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-ink animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-ink uppercase">
            Available for Projects
          </span>
        </div>

        {/* Master Name */}
        <h1
          className="hero-name font-display font-extrabold uppercase tracking-[-0.02em] leading-[0.85] text-ink"
          style={{
            fontSize: "clamp(60px, 8vw, 126px)",
            fontVariationSettings: '"wdth" 75, "opsz" 96',
          }}
        >
          {portfolioData.personal.name.split(" ").map((word, i) => (
            <span
              key={i}
              className={`block transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Key Credentials List with Authentic Icons */}
        <ul className="hero-credentials mt-5 space-y-2.5 text-sm sm:text-base text-ink font-medium">
          <li className="flex items-center gap-2.5">
            <Briefcase className="w-4 h-4 text-ink shrink-0" />
            <span className="font-semibold text-ink">
              {portfolioData.personal.heroThesis || "Full-Stack Developer"}
            </span>
          </li>
          <li className="flex items-center gap-2.5 text-ink-soft">
            <GraduationCap className="w-4 h-4 text-ink shrink-0" />
            <span>{portfolioData.personal.role}</span>
          </li>
          <li className="flex items-center gap-2.5 text-ink-soft">
            <MapPin className="w-4 h-4 text-ink shrink-0" />
            <span>{portfolioData.personal.location}</span>
          </li>
        </ul>

        {/* Crisp Short Bio */}
        <p className="hero-bio mt-4 text-sm sm:text-base text-ink-soft leading-relaxed max-w-md">
          {portfolioData.personal.bio}
        </p>
      </div>

      {/* ═══ CENTER SECTION: THE PORTRAIT STAGE WITH PARTIAL HOVER REVEAL ═══ */}
      <div className="hero-stage absolute inset-0 z-10 pointer-events-none">
        <div
          ref={portraitRef}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerMove={handlePointerMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouch}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          className={`hero-portrait pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-[-40px] cursor-crosshair transition-opacity duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{
            aspectRatio: "946 / 883",
            height: "calc(100% - 64px)",
            ["--mouse-x" as string]: "50%",
            ["--mouse-y" as string]: "50%",
          }}
        >
          {/* Ambient luminous glow when full aura is active */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 pointer-events-none ${
              isManualAura
                ? "w-[440px] h-[440px] bg-ink/20 blur-3xl scale-110"
                : "w-[300px] h-[300px] bg-transparent blur-2xl scale-90"
            }`}
          />

          {/* BASE LAYER: Full image (Real photo by default, or Suit when Aura button clicked) */}
          <img
            src={isManualAura ? "/img/image.png" : "/img/lanh-aura.png"}
            alt="Lanh Phalla - Developer Portrait"
            className="layer-base absolute inset-0 w-full h-full object-contain select-none transition-all duration-500 ease-out"
            style={{
              transform: "translateY(0.8%)",
              filter: isManualAura ? "drop-shadow(0 0 25px rgba(0,0,0,0.5))" : "none",
            }}
          />

          {/* PARTIAL HOVER PEEK LAYER: Transforms ONLY the area directly under the cursor */}
          <div
            className={`layer-peek-container absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ease-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              WebkitMaskImage:
                "radial-gradient(circle var(--scan-radius) at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, black 65%, transparent 100%)",
              maskImage:
                "radial-gradient(circle var(--scan-radius) at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, black 65%, transparent 100%)",
            }}
          >
            <img
              src={isManualAura ? "/img/lanh-aura.png" : "/img/image.png"}
              alt="Lanh Phalla - Partial Reveal"
              className="layer-peek absolute inset-0 w-full h-full object-contain select-none"
              style={{
                transform: "translateY(0.8%)",
                filter: !isManualAura ? "drop-shadow(0 0 25px rgba(0,0,0,0.5))" : "none",
              }}
            />
          </div>

          {/* Clean Soft Cursor Subtle Light Ring */}
          <div
            className={`absolute pointer-events-none transition-all duration-150 ease-out ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{
              left: "var(--mouse-x, 50%)",
              top: "var(--mouse-y, 50%)",
              transform: "translate(-50%, -50%)",
              width: "var(--scan-ring-size)",
              height: "var(--scan-ring-size)",
            }}
          >
            <div className="w-full h-full rounded-full border border-line/30 shadow-[0_0_20px_rgba(0,0,0,0.15)]" />
          </div>
        </div>
      </div>

      {/* ═══ RIGHT SECTION: MINIMALIST PRODUCTION STAT CARDS ═══ */}
      <div
        className={`hero-panels absolute z-30 right-[var(--gutter)] top-1/2 -translate-y-1/2 w-[270px] hidden lg:flex flex-col gap-3 transition-all duration-700 delay-150 ease-out ${
          mounted ? "opacity-100 translate-y-[-50%]" : "opacity-0 translate-y-[-45%]"
        }`}
        style={{ ["--gutter" as string]: "clamp(16px, 5vw, 72px)" }}
      >
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="hero-stat p-4 bg-surface/90 backdrop-blur-md rounded-xl border border-line/10 shadow-xs hover:border-line/40 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono tracking-widest text-ink-soft uppercase font-semibold">
                  {item.label}
                </span>
                <Icon className="w-4 h-4 text-ink-soft group-hover:text-ink transition-colors" />
              </div>

              <div className="flex items-baseline justify-between">
                <span
                  className={`font-display font-black text-4xl sm:text-5xl ${item.accentColor} leading-none tracking-tight`}
                >
                  {item.value}
                </span>
              </div>

              <p className="mt-2 text-xs text-ink-soft font-mono">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* ═══ BOTTOM BAR: DUAL-MODE TOGGLE / CTA / SOCIAL CHANNELS ═══ */}
      <div
        className={`hero-bar absolute z-30 bottom-7 left-[var(--gutter)] right-[var(--gutter)] grid items-center gap-4 transition-all duration-700 delay-[400ms] ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          ["--gutter" as string]: "clamp(16px, 5vw, 72px)",
          gridTemplateColumns: "1fr auto 1fr",
        }}
      >
        {/* Left: Mode Toggle Button */}
        <button
          onClick={() => setIsManualAura((prev) => !prev)}
          className="hero-mode-toggle justify-self-start inline-flex items-center gap-3 rounded-full py-1 pl-1 pr-3.5 hover:bg-night/[0.06] transition-colors text-left select-none"
          aria-pressed={isManualAura}
        >
          <span
            className={`hero-mode-icon w-10 h-10 rounded-full border-[1.5px] border-line grid place-items-center transition-all duration-500 ${
              isManualAura ? "rotate-180 bg-night text-white" : ""
            }`}
            style={{ transitionTimingFunction: "var(--ease, cubic-bezier(.16,1,.3,1))" }}
          >
            {isManualAura ? (
              <User className="w-[18px] h-[18px]" strokeWidth={1.8} />
            ) : (
              <Sparkles className="w-[18px] h-[18px]" strokeWidth={1.8} />
            )}
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.05em] font-medium">
              {isManualAura ? "Show portrait" : "Show aura"}
            </span>
            <span className="hero-mode-hint block text-[11px] text-ink-soft">
              <span className="sm:hidden">
                {isManualAura ? "Full aura active · Tap to return" : "Touch & drag to reveal · Tap for full suit"}
              </span>
              <span className="hidden sm:inline">
                {isManualAura ? "Full aura active · Click to return" : "Hover to reveal part · Click for full suit"}
              </span>
            </span>
          </span>
        </button>

        {/* Center: Primary CTA Jump to Projects */}
        <a
          href="#projects"
          className="hero-cta inline-flex items-center gap-2.5 border border-line text-ink uppercase tracking-[0.06em] text-[13px] font-medium no-underline py-3 px-[22px] hover:bg-night hover:text-white transition-colors duration-200"
          style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
            background: "rgb(var(--v-surface) / 0.85)",
          }}
        >
          <span>View Projects</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Right: Social Links */}
        <div className="hero-socials justify-self-end flex items-center gap-6 text-xs uppercase tracking-[0.06em]">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-75 hover:opacity-100 hover:text-ink transition-all no-underline flex items-center gap-2"
          >
            <Github className="w-[15px] h-[15px]" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={portfolioData.contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-75 hover:opacity-100 hover:text-ink transition-all no-underline flex items-center gap-2"
          >
            <Facebook className="w-[15px] h-[15px]" />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            href={portfolioData.contact.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-75 hover:opacity-100 hover:text-ink transition-all no-underline flex items-center gap-2"
          >
            <Send className="w-[15px] h-[15px]" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
        </div>
      </div>

      {/* ═══ RESPONSIVE MOBILE OVERRIDES ═══ */}
      <style jsx>{`
        /* Cursor scan sizes (desktop defaults) */
        .hero-portrait {
          --scan-radius: 140px;
          --scan-ring-size: 280px;
        }
        @media (max-width: 1024px) {
          .hero {
            height: auto !important;
            min-height: 0 !important;
            display: flex;
            flex-direction: column;
            padding: 104px 0 28px;
          }
          .hero-intro {
            position: relative !important;
            inset: auto !important;
            transform: none !important;
            padding: 0 clamp(16px, 5vw, 72px);
            order: 1;
            max-width: 100% !important;
          }
          .hero-stage {
            position: relative !important;
            inset: auto !important;
            margin-top: 16px;
            order: 2;
          }
          .hero-portrait {
            position: relative !important;
            left: auto !important;
            transform: none !important;
            bottom: auto !important;
            width: min(100%, 720px);
            height: auto !important;
            aspect-ratio: 946 / 883;
            margin: 0 auto;
            --scan-radius: 110px;
            --scan-ring-size: 220px;
          }
          .hero-panels {
            display: grid !important;
            position: relative !important;
            inset: auto !important;
            transform: none !important;
            width: auto !important;
            padding: 24px clamp(16px, 5vw, 72px) 0;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            order: 3;
          }
          .hero-bar {
            position: relative !important;
            inset: auto !important;
            padding: 28px clamp(16px, 5vw, 72px) 0;
            grid-template-columns: 1fr !important;
            justify-items: start;
            gap: 20px !important;
            order: 4;
          }
          .hero-bar > div:last-child {
            justify-self: start !important;
          }
        }
        @media (max-width: 768px) {
          .hero {
            padding: 88px 0 20px !important;
          }
          .hero-intro h1 {
            font-size: 11.5vw !important;
            line-height: 0.9 !important;
          }
          .hero-portrait {
            width: min(100%, 420px, 46svh) !important;
            --scan-radius: 84px;
            --scan-ring-size: 168px;
          }
          .hero-panels {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding-top: 20px !important;
          }
          .hero-bar {
            gap: 16px !important;
            padding-top: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-portrait {
            --scan-radius: 64px;
            --scan-ring-size: 128px;
          }
        }
      `}</style>
    </section>
  );
};