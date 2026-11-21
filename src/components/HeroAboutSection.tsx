import { useState } from 'react';
import { MapPin, GraduationCap, Zap, Camera, Briefcase } from 'lucide-react';
import { PORTRAIT_IMAGE_URL } from '../data/portfolioData';
import {
  CrossStitchTrail,
  MetallicPaperclip,
  RubberPostmarkStamp,
} from './TactileDecorations';

interface HeroAboutSectionProps {
  onOpenCV: () => void;
}

export function HeroAboutSection({ onOpenCV }: HeroAboutSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="pt-20 md:pt-28 pb-20 px-[5vw] relative">
      <div className="max-w-[1080px] mx-auto relative">
        {/* Top Floating Brush Headline */}
        <div className="mb-6 text-center md:mb-0 md:text-right md:absolute md:-top-16 md:right-6 z-20 -rotate-2 md:-rotate-[3.5deg] pointer-events-none select-none">
          <span className="font-brush text-[42px] sm:text-[54px] lg:text-[66px] text-[#E66B9C] leading-[0.95] block drop-shadow-[2px_3px_0_rgba(0,0,0,0.5)]">
            Tak kenal maka
          </span>
          <span className="font-brush text-[46px] sm:text-[60px] lg:text-[74px] text-[#E66B9C] leading-[0.95] inline-block md:-mr-2.5 relative drop-shadow-[2px_3px_0_rgba(0,0,0,0.5)]">
            Tak connect
            <span
              className="block absolute -bottom-1.5 left-[10%] w-[90%] h-1.5 bg-[#E66B9C] rounded-[50%_40%_60%_30%] opacity-85"
              aria-hidden="true"
            />
          </span>
        </div>

        {/* Cross-Stitch Left Trail */}
        <CrossStitchTrail />

        {/* Main Beige Paper Sheet */}
        <div className="paper-texture bg-[#DDD8CE] text-[#1F1D1B] rounded-[2px] shadow-[0_25px_65px_rgba(0,0,0,0.55),0_4px_15px_rgba(0,0,0,0.3)] px-7 py-10 md:px-14 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[310px_1px_1fr] gap-8 lg:gap-11 items-start">
            {/* LEFT COLUMN: Polaroid + Paperclip + Stamp + Bio */}
            <div>
              <div className="relative w-[240px] mx-auto lg:mx-0 mt-2">
                {/* Metallic Paperclip Vector */}
                <MetallicPaperclip className="absolute -top-6 -left-3 w-16 h-[98px] z-30 drop-shadow-[3px_4px_6px_rgba(0,0,0,0.45)] pointer-events-none rotate-[6deg]" />

                {/* Polaroid Card */}
                <div className="bg-white p-3 pb-10 shadow-[4px_10px_24px_rgba(0,0,0,0.28),0_2px_6px_rgba(0,0,0,0.18)] -rotate-2 hover:-rotate-0.5 hover:scale-[1.02] transition-transform duration-300 rounded-[1px] relative">
                  {!imgError ? (
                    <img
                      src={PORTRAIT_IMAGE_URL}
                      alt="Dina Novelina Gurning"
                      onError={() => setImgError(true)}
                      className="w-full h-[275px] object-cover object-[50%_78%] block contrast-[1.04] bg-[#ccc]"
                    />
                  ) : (
                    <div className="w-full h-[275px] bg-[#22201E] text-[#DDD8CE] flex flex-col items-center justify-center p-6 text-center border border-[#1F1D1B]/20">
                      <span className="font-mono-zine text-3xl font-bold tracking-widest text-[#E66B9C]">
                        DNG
                      </span>
                      <span className="font-brush text-2xl mt-2 text-[#DDD8CE]">
                        Dina N. Gurning
                      </span>
                      <span className="font-mono-zine text-[10px] tracking-[0.12em] text-[#DDD8CE]/70 mt-3 uppercase">
                        Informatics · ITPLN
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3.5 font-mono-zine text-[11px] font-bold text-[#666] tracking-[0.05em]">
                    JAKARTA // 2026
                  </div>
                </div>

                {/* Rubber Postmark Stamp */}
                <RubberPostmarkStamp className="absolute -bottom-8 -right-9 z-25 w-[165px] h-[105px] pointer-events-none -rotate-[13deg] opacity-90 mix-blend-multiply" />
              </div>

              {/* About Me Quick Info */}
              <div className="mt-12 lg:mt-14 text-center lg:text-left">
                <h2 className="ed-title text-[26px] text-[#1F1D1B] mb-3">
                  ABOUT ME
                </h2>
                <ul className="font-mono-zine text-[13.5px] leading-[1.8] text-[#1F1D1B]/75 font-medium space-y-1.5">
                  <li className="flex items-center justify-center lg:justify-start gap-2.5">
                    <MapPin size={14} className="text-[#E66B9C] shrink-0" aria-hidden="true" />
                    <span>Based in Jakarta, Indonesia</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2.5">
                    <GraduationCap size={14} className="text-[#E66B9C] shrink-0" aria-hidden="true" />
                    <span>Informatics Engineering · ITPLN</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2.5">
                    <Zap size={14} className="text-[#E66B9C] shrink-0" aria-hidden="true" />
                    <span>PLN Group&apos;s Bonded Program</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2.5">
                    <Camera size={14} className="text-[#E66B9C] shrink-0" aria-hidden="true" />
                    <span>
                      Instagram: <strong className="text-[#1F1D1B]">@dinaagurning_</strong>
                    </span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2.5">
                    <Briefcase size={14} className="text-[#E66B9C] shrink-0" aria-hidden="true" />
                    <span>
                      LinkedIn: <strong className="text-[#1F1D1B]">Dina Novelina Gurning</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vertical Paper Divider */}
            <div className="hidden lg:block bg-[#1F1D1B]/30 h-full min-h-[480px]" />

            {/* RIGHT COLUMN: Narrative + CTAs */}
            <div className="lg:pt-6">
              <p className="text-[16px] leading-[1.76] text-[#1F1D1B] mb-5">
                I&apos;m <strong className="font-bold text-[#0E0D0C]">Dina Novelina Gurning</strong>, an Informatics Engineering student at{' '}
                <strong className="font-bold text-[#0E0D0C]">Institut Teknologi PLN (ITPLN)</strong> and a recipient of the prestigious{' '}
                <strong className="font-bold text-[#0E0D0C]">PLN Group&apos;s Bonded Program</strong>. I have a genuine curiosity for modern technology, data science, and programming.{' '}
                <em className="italic text-[#2F2C29]">
                  Fun fact: I love turning raw logic and structured data into meaningful, human-centered solutions!
                </em>
              </p>

              <p className="text-[16px] leading-[1.76] text-[#1F1D1B] mb-5">
                Currently, I am building a rigorous foundation in Python programming, algorithmic data classification, and digital ethics—combining deep analytical thinking from my competitive physics olympiad background with creative visual communication and documentation skills.
              </p>

              <p className="text-[16px] leading-[1.76] text-[#1F1D1B] mb-5">
                I believe technology works best when it is both logically sound and thoughtfully presented. That&apos;s why I&apos;m excited to grow in collaborative environments where I can learn, contribute, and create real impact for Indonesia&apos;s energy and digital future.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-9 pt-5 border-t border-dashed border-[#1F1D1B]/25">
                <a href="#projects" className="zine-btn-primary">
                  Explore My Projects ↓
                </a>
                <button
                  type="button"
                  onClick={onOpenCV}
                  className="font-mono-zine text-[13px] font-bold text-[#1F1D1B] pb-0.5 border-b-2 border-[#E66B9C] hover:text-[#E66B9C] transition-colors cursor-pointer bg-transparent"
                >
                  Download / View CV ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
