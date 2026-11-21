import { EDUCATION_LIST, MILESTONES } from '../data/portfolioData';
import { SimplePaperclip } from './TactileDecorations';

export function EducationSection() {
  return (
    <section id="education" className="py-16 px-[5vw] max-w-[1120px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-9">
        {/* LEFT PANEL: EDUCATION */}
        <div className="paper-texture bg-[#DDD8CE] text-[#1F1D1B] rounded-[2px] p-8 sm:p-10 relative shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
          <SimplePaperclip className="absolute -top-4 right-8 w-[42px] drop-shadow-[2px_3px_5px_rgba(0,0,0,0.3)] pointer-events-none" />

          <div className="flex flex-wrap justify-between items-baseline gap-2 mb-7 border-b border-dashed border-[#1F1D1B] pb-3.5">
            <h2 className="ed-title text-[26px] text-[#1F1D1B]">EDUCATION</h2>
            <span className="font-brush text-[22px] text-[#E66B9C]">
              academic path ✦
            </span>
          </div>

          {EDUCATION_LIST.map((edu, index) => (
            <div key={edu.id}>
              <div className={index === 0 ? 'mb-6' : ''}>
                <span
                  className={`font-mono-zine text-[11px] font-bold inline-block px-2 py-0.5 rounded-[2px] mb-2 ${
                    edu.variant === 'pink'
                      ? 'bg-[#E66B9C] text-[#1F1D1B]'
                      : 'bg-[#1F1D1B] text-[#DDD8CE]'
                  }`}
                >
                  {edu.period}
                </span>

                <div className="text-[19px] font-extrabold text-[#1F1D1B]">
                  {edu.school}
                </div>

                <div className="text-[14px] text-[#1F1D1B]/75 mt-1 leading-relaxed">
                  <strong className="text-[#1F1D1B] font-semibold">
                    {edu.degree}
                  </strong>
                  <br />
                  {edu.detail}
                </div>
              </div>

              {index === 0 && (
                <hr className="border-0 border-t border-dashed border-[#1F1D1B]/40 my-5" />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT PANEL: MILESTONES */}
        <div className="bg-[#1B1918] text-[#DDD8CE] border-[1.5px] border-[#DDD8CE] rounded-[2px] p-8 sm:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.45)] relative">
          <div className="flex flex-wrap justify-between items-baseline gap-2 mb-7 border-b border-dashed border-[#DDD8CE] pb-3.5">
            <h2 className="ed-title text-[26px] text-[#DDD8CE]">MILESTONES</h2>
            <span className="font-brush text-[22px] text-[#E66B9C]">
              proud moments ✦
            </span>
          </div>

          <ul className="space-y-5">
            {MILESTONES.map((item) => (
              <li
                key={item.year}
                className="pl-6 relative text-[14px] leading-[1.6]"
              >
                <span
                  className="absolute left-0 top-0 text-[#E66B9C] text-[15px]"
                  aria-hidden="true"
                >
                  ✦
                </span>
                <span className="font-mono-zine font-bold text-[#E66B9C] text-[12px] inline-block mr-1.5">
                  {item.year}
                </span>
                — <strong className="text-white">{item.title}</strong>{' '}
                <span className="text-[#DDD8CE]/90">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
