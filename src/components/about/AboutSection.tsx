// import React from "react";
// import { portfolioData } from "@/data/portfolioData";
// import { SectionHeader } from "../ui/SectionHeader";
// import { Compass, Cpu, GraduationCap, MapPin } from "lucide-react";

// export const AboutSection: React.FC = () => {
//   const icons = [GraduationCap, MapPin, Cpu, Compass];

//   return (
//     <section id="about" className="bg-night text-white py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Blueprint background grid lines */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <SectionHeader
//           tag="WHO I AM // 01"
//           title="Architectural thinking joined with relentless execution."
//           subtitle={data.about.headline}
//           theme="dark"
//         />

//         {/* Narrative Columns */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-slate-300 leading-relaxed text-base sm:text-lg">
//           <div className="lg:col-span-6 space-y-4">
//             <p>{data.about.narrative[0]}</p>
//           </div>
//           <div className="lg:col-span-6 space-y-4">
//             <p>{data.about.narrative[1]}</p>
//           </div>
//         </div>

//         {/* 4 Blueprint-Bracketed Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {data.about.blueprintCards.map((card, idx) => {
//             const IconComponent = icons[idx % icons.length];
//             return (
//               <div
//                 key={idx}
//                 className="bracket-card p-6 bg-night-card/60 backdrop-blur-sm border border-white/10 hover:border-brand-accent/40 transition-all duration-300 group hover:-translate-y-1"
//               >
//                 {/* Monospace Architectural Card Tag */}
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-[11px] font-mono tracking-widest text-brand-accent uppercase font-semibold">
//                     {card.tag}
//                   </span>
//                   <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-brand-accent transition-colors" />
//                 </div>

//                 {/* Primary Card Label */}
//                 <h3 className="font-display font-bold text-lg text-white tracking-tight group-hover:text-brand-accent transition-colors">
//                   {card.label}
//                 </h3>

//                 {/* Technical Detail */}
//                 <p className="mt-2 text-sm text-slate-300 font-mono">
//                   {card.detail}
//                 </p>

//                 {/* Secondary Subtext */}
//                 <p className="mt-2 text-xs text-slate-400">
//                   {card.subtext}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";

import React from "react";
import { Compass, Cpu, GraduationCap, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { usePortfolioData } from "@/i18n/usePortfolioData";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const data = usePortfolioData();
  const icons = [GraduationCap, MapPin, Cpu, Compass];

  return (
    <section id="about" className="bg-night text-white py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ═══ TOP: Compact Split Header ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left: Tag + Title */}
          <div className="lg:col-span-5 reveal-on-scroll">
            <span className="block text-xs font-mono tracking-[0.25em] text-white/60 uppercase mb-3 font-semibold">
              {t("Who I Am // 01")}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight uppercase text-white">
              {t("Architectural")}
              <br />
              <span className="text-white/50">{t("Thinking.")}</span>
            </h2>
          </div>

          {/* Right: Headline + Narrative combined */}
          <div className="lg:col-span-7 lg:pt-4 reveal-on-scroll" data-delay="120">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-5 font-light">
              {data.about.headline}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base text-white/70 leading-relaxed">
              <p>{data.about.narrative[0]}</p>
              <p>{data.about.narrative[1]}</p>
            </div>
          </div>
        </div>

        {/* ═══ BOTTOM: Compact Blueprint Rows ═══ */}
        <div className="border-t border-white/20">
          {data.about.blueprintCards.map((card, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                data-delay={100 + idx * 80}
                className="reveal-on-scroll group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center py-5 border-b border-white/20 hover:bg-surface/[0.04] transition-colors duration-300 px-3 -mx-3"
              >
                {/* Index */}
                <div className="md:col-span-1">
                  <span className="text-xs font-mono font-bold text-white/50 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Tag & Icon */}
                <div className="md:col-span-3 flex items-center gap-2.5">
                  <IconComponent className="w-4 h-4 text-white/60 group-hover:text-white transition-colors shrink-0" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors font-semibold">
                    {card.tag}
                  </span>
                </div>

                {/* Label */}
                <div className="md:col-span-4">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                    {card.label}
                  </h3>
                </div>

                {/* Detail */}
                <div className="md:col-span-4">
                  <p className="text-sm text-white/70 font-mono leading-relaxed group-hover:text-white/90 transition-colors">
                    {card.detail}
                  </p>
                  <p className="text-xs text-white/50 mt-1">
                    {card.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};