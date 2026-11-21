import { EXPERIENCES } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-[5vw] max-w-[1120px] mx-auto">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
        <h2 className="ed-title text-[clamp(32px,4.5vw,54px)] text-[#DDD8CE] leading-none">
          EXPERIENCE
        </h2>
        <div className="font-brush text-[28px] text-[#E66B9C] -rotate-3 inline-block">
          leadership, media &amp; community ✦
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className={`exp-card-zine paper-texture p-7 sm:p-8 relative ${
              exp.fullWidth ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex justify-between items-start gap-3 mb-3">
              <span className="font-mono-zine text-[11.5px] font-bold text-[#1F1D1B]/75 tracking-[0.05em]">
                {exp.period}
              </span>
              {exp.badge && (
                <span
                  className={`font-mono-zine text-[10.5px] font-bold px-2.5 py-0.5 rounded-[3px] tracking-[0.05em] ${
                    exp.badgeVariant === 'dark'
                      ? 'bg-[#1F1D1B] text-[#DDD8CE]'
                      : 'bg-[#E66B9C] text-[#1F1D1B]'
                  }`}
                >
                  {exp.badge}
                </span>
              )}
            </div>

            <h3 className="text-[19px] font-extrabold text-[#1F1D1B] leading-[1.3] mb-1.5">
              {exp.title}
            </h3>

            <div className="font-mono-zine text-[12.5px] text-[#C84A7D] font-bold mb-3.5">
              {exp.organization}
            </div>

            <p className="text-[14px] leading-[1.65] text-[#1F1D1B]/75">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
