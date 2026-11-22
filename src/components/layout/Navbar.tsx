"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";
import { usePortfolioData } from "@/i18n/usePortfolioData";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const data = usePortfolioData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certificates" },
  ];

  useEffect(() => {
    // 1. Throttled scroll listener for navbar background styling
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 40;
        setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
        if (window.scrollY < 120) {
          setActiveSection("");
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. IntersectionObserver for active section (zero layout thrashing)
    const sectionIds = navLinks.map((link) => link.href.substring(1));
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 120) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const targetId = href.substring(1);
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Sections live on the home page only — from a detail route, navigate home first.
    router.push(targetId ? `/#${targetId}` : "/");
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transform-gpu">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 border transform-gpu ${
          scrolled
            ? "bg-surface/85 backdrop-blur-md border-line/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            : "bg-surface/70 backdrop-blur-sm border-line/8 shadow-sm"
        } max-w-5xl w-full`}
      >
        {/* Brand Mark */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="font-display font-extrabold tracking-tight text-ink text-base sm:text-lg flex items-center gap-2 group hover:text-accentText transition-colors"
        >
          <span className="w-2.5 h-2.5 bg-brand-accent cut-corner-sm group-hover:scale-110 transition-transform" />
          <span>{data.personal.shortName}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                  isActive
                    ? "bg-night text-white font-semibold shadow-xs"
                    : "text-ink-soft hover:text-ink hover:bg-night/5"
                }`}
              >
                {t(link.label)}
              </a>
            );
          })}
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-full bg-night text-white hover:bg-brand-accent hover:text-night transition-colors duration-200"
          >
            <span>{t("Contact")}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-ink hover:text-accentText rounded-lg transition-colors"
            aria-label={t("Toggle menu")}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-16 bg-surface/95 backdrop-blur-xl border border-line/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.href);
              }}
              className="px-4 py-2.5 text-sm font-mono uppercase tracking-wider text-ink hover:bg-night/5 rounded-lg flex items-center justify-between"
            >
              <span>{t(link.label)}</span>
              <span className="text-xs text-accentText">↗</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleNavClick(e, "#contact");
            }}
            className="mt-2 w-full text-center py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-lg bg-night text-white hover:bg-brand-accent hover:text-night transition-colors"
          >
            {t("Get in touch ↗")}
          </a>
        </div>
      )}
    </header>
  );
};
