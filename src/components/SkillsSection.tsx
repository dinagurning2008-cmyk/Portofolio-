import { Code2, Table2, Palette, Film } from 'lucide-react';
import { SOFT_SKILL_PILLS } from '../data/portfolioData';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-[5vw] max-w-[1120px] mx-auto">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
        <h2 className="ed-title text-[clamp(32px,4.5vw,54px)] text-[#DDD8CE] leading-none">
          SKILLS &amp; TOOLKIT
        </h2>
        <div className="font-brush text-[28px] text-[#E66B9C] -rotate-3 inline-block">
          logic meets creativity ✦
        </div>
      </div>

      <div className="paper-texture bg-[#DDD8CE] text-[#1F1D1B] rounded-[2px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
        {/* Decorative Cross Stitches */}
        <div
          className="absolute top-4 right-6 text-[#E66B9C] font-mono-zine text-[22px] font-bold pointer-events-none select-none"
          aria-hidden="true"
        >
          + x +
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-2">
          {/* Column 1: Technical & Data */}
          <div>
            <h3 className="font-mono-zine text-[17px] font-extrabold mb-4 flex items-center gap-2 border-b-2 border-[#1F1D1B] pb-2">
              01 // TECHNICAL &amp; DATA
            </h3>

            <div className="flex flex-wrap gap-3 mb-4">
              <div className="bg-[#1F1D1B] text-[#DDD8CE] px-3.5 py-2 rounded-[4px] font-mono-zine text-[12px] font-bold inline-flex items-center gap-2 shadow-[2px_2px_0_#E66B9C] hover:-translate-y-0.5 hover:-rotate-1 transition-transform">
                <Code2 size={14} className="text-[#E66B9C]" aria-hidden="true" />
                <span>Python</span>
              </div>
              <div className="bg-[#1F1D1B] text-[#DDD8CE] px-3.5 py-2 rounded-[4px] font-mono-zine text-[12px] font-bold inline-flex items-center gap-2 shadow-[2px_2px_0_#E66B9C] hover:-translate-y-0.5 hover:-rotate-1 transition-transform">
                <Table2 size={14} className="text-[#E66B9C]" aria-hidden="true" />
                <span>MS Excel</span>
              </div>
            </div>

            <ul className="space-y-2 text-[13.5px] text-[#1F1D1B]/75 leading-[1.6]">
              {[
                'Basic Programming & Algorithmic Logic',
                'Conditional Structures & Validation',
                'Data Classification & Health Metrics',
                'Digital Ethics & Cyber Research',
              ].map((item) => (
                <li key={item} className="pl-4 relative">
                  <span
                    className="absolute left-0 text-[#E66B9C] font-bold"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Creative & Media */}
          <div>
            <h3 className="font-mono-zine text-[17px] font-extrabold mb-4 flex items-center gap-2 border-b-2 border-[#1F1D1B] pb-2">
              02 // CREATIVE &amp; MEDIA
            </h3>

            <div className="flex flex-wrap gap-3 mb-4">
              <div className="bg-[#1F1D1B] text-[#DDD8CE] px-3.5 py-2 rounded-[4px] font-mono-zine text-[12px] font-bold inline-flex items-center gap-2 shadow-[2px_2px_0_#E66B9C] hover:-translate-y-0.5 hover:-rotate-1 transition-transform">
                <Palette size={14} className="text-[#E66B9C]" aria-hidden="true" />
                <span>Canva Pro</span>
              </div>
              <div className="bg-[#1F1D1B] text-[#DDD8CE] px-3.5 py-2 rounded-[4px] font-mono-zine text-[12px] font-bold inline-flex items-center gap-2 shadow-[2px_2px_0_#E66B9C] hover:-translate-y-0.5 hover:-rotate-1 transition-transform">
                <Film size={14} className="text-[#E66B9C]" aria-hidden="true" />
                <span>Photo &amp; Video</span>
              </div>
            </div>

            <ul className="space-y-2 text-[13.5px] text-[#1F1D1B]/75 leading-[1.6]">
              {[
                'Social Media Feed & Visual Layouting',
                'Event Documentation & Content Curation',
                'Presentation & Infographic Design',
                'Editorial Zine & Poster Aesthetics',
              ].map((item) => (
                <li key={item} className="pl-4 relative">
                  <span
                    className="absolute left-0 text-[#E66B9C] font-bold"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collaboration Sticker Board */}
          <div>
            <h3 className="font-mono-zine text-[17px] font-extrabold mb-4 flex items-center gap-2 border-b-2 border-[#1F1D1B] pb-2">
              03 // COLLABORATION
            </h3>

            <p className="text-[13px] text-[#1F1D1B]/75 mb-4">
              Core interpersonal strengths cultivated across community and academic projects:
            </p>

            <div className="flex flex-wrap gap-2.5">
              {SOFT_SKILL_PILLS.map((pill) => (
                <span
                  key={pill.label}
                  className={`font-mono-zine text-[12px] font-bold px-3.5 py-1.5 rounded-full inline-block shadow-[2px_3px_6px_rgba(0,0,0,0.18)] hover:scale-105 hover:rotate-0 transition-transform ${
                    pill.variant === 'dark'
                      ? 'bg-[#1F1D1B] text-[#DDD8CE] -rotate-2'
                      : 'bg-[#E66B9C] text-[#1F1D1B] rotate-[2.5deg]'
                  }`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
