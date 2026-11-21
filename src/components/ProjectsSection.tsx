export type ModalType = 'project1' | 'project2' | 'cv' | null;

interface ProjectsSectionProps {
  onOpenModal: (modal: Exclude<ModalType, null>) => void;
}

export function ProjectsSection({ onOpenModal }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-[5vw] max-w-[1120px] mx-auto">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-16">
        <h2 className="ed-title text-[clamp(32px,4.5vw,54px)] text-[#DDD8CE] leading-none">
          SELECTED PROJECTS
        </h2>
        <div className="font-brush text-[28px] text-[#E66B9C] -rotate-3 inline-block">
          things I&apos;ve built &amp; analyzed ✦
        </div>
      </div>

      {/* PROJECT 1: Body Temperature Classification Program */}
      <article className="project-card paper-texture bg-[#DDD8CE] text-[#1F1D1B] mb-16 rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative">
        <div className="absolute -top-[30px] left-0 bg-[#DDD8CE] text-[#1F1D1B] font-mono-zine text-[12px] font-bold px-5 py-1.5 rounded-t-[6px] border-t-2 border-black/10 flex items-center gap-2 tracking-[0.05em]">
          <span>PROJECT 01 // PYTHON</span>
          <span className="w-2 h-2 rounded-full bg-[#E66B9C] inline-block" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 p-7 sm:p-11 lg:p-12 items-center">
          <div>
            <div className="font-mono-zine text-[11.5px] font-bold text-[#1F1D1B]/75 tracking-[0.08em] mb-2.5 flex items-center gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-[#E66B9C] inline-block" aria-hidden="true" />
              <span>2026 · ACADEMIC PROJECT · PYTHON DEVELOPER</span>
            </div>

            <h3 className="text-[clamp(24px,2.6vw,32px)] font-extrabold leading-[1.15] mb-3.5 text-[#1F1D1B]">
              Body Temperature Classification Program
            </h3>

            <p className="text-[15px] text-[#1F1D1B]/75 mb-6 leading-[1.65]">
              A Python-based program designed to classify human body temperature into medical threshold categories (hypothermia, normal, fever, and high fever) using structured conditional logic.
            </p>

            <ul className="space-y-3 mb-7 text-[14.5px] leading-[1.6]">
              <li className="relative pl-5">
                <span className="absolute left-0 top-0 text-[#E66B9C] font-bold text-[13px]" aria-hidden="true">✦</span>
                <strong className="text-[#0E0D0C]">Tech Stack:</strong> Python (Conditional Logic{' '}
                <code className="font-mono-zine text-[13px] bg-[#1F1D1B]/10 px-1.5 py-0.5 rounded-[2px]">
                  if-elif-else
                </code>
                , Input Validation &amp; Output Processing).
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-0 text-[#E66B9C] font-bold text-[13px]" aria-hidden="true">✦</span>
                <strong className="text-[#0E0D0C]">Key Feature:</strong> Automatically evaluates user temperature input and maps it to accurate health categories with clear status feedback.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-0 text-[#E66B9C] font-bold text-[13px]" aria-hidden="true">✦</span>
                <strong className="text-[#0E0D0C]">Outcome:</strong> Strengthened algorithmic problem-solving, clean code hygiene, and reproducible logic in foundational programming.
              </li>
            </ul>

            <button
              type="button"
              onClick={() => onOpenModal('project1')}
              className="zine-btn-primary"
            >
              Inspect Logic / Summary ↗
            </button>
          </div>

          {/* Terminal Polaroid Preview */}
          <div className="bg-white p-3 pb-7 rounded-[2px] shadow-[4px_10px_24px_rgba(0,0,0,0.22)] relative rotate-[1.8deg] hover:rotate-0 hover:scale-[1.02] transition-transform duration-300">
            <div className="tape-corner tape-tl" aria-hidden="true" />
            <div className="tape-corner tape-tr" aria-hidden="true" />

            <div className="bg-[#181716] rounded-[4px] p-4 sm:p-[18px] text-[#DDD8CE] font-mono-zine text-[12px] leading-[1.6] border border-[#333] overflow-x-auto">
              <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-[#2A2826]">
                <span className="w-[9px] h-[9px] rounded-full bg-[#FF5F56]" />
                <span className="w-[9px] h-[9px] rounded-full bg-[#FFBD2E]" />
                <span className="w-[9px] h-[9px] rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-[10px] text-[#888]">temp_classifier.py</span>
              </div>

              <pre className="m-0 font-mono-zine text-[12px] leading-[1.6] whitespace-pre">
                <code>
                  <span className="text-[#8C887B] italic"># Temperature Classifier</span>
                  {'\n'}
                  <span className="text-[#E66B9C] font-bold">def</span>{' '}
                  <span className="text-[#7FD1E6]">classify_temp</span>(t):
                  {'\n  '}
                  <span className="text-[#E66B9C] font-bold">if</span> t &lt; 35.0:
                  {'\n    '}
                  <span className="text-[#E66B9C] font-bold">return</span>{' '}
                  <span className="text-[#A8E084]">&quot;Hypothermia&quot;</span>
                  {'\n  '}
                  <span className="text-[#E66B9C] font-bold">elif</span> 35.0 &lt;= t &lt;= 37.5:
                  {'\n    '}
                  <span className="text-[#E66B9C] font-bold">return</span>{' '}
                  <span className="text-[#A8E084]">&quot;Normal&quot;</span>
                  {'\n  '}
                  <span className="text-[#E66B9C] font-bold">elif</span> 37.6 &lt;= t &lt;= 39.0:
                  {'\n    '}
                  <span className="text-[#E66B9C] font-bold">return</span>{' '}
                  <span className="text-[#A8E084]">&quot;Fever&quot;</span>
                  {'\n  '}
                  <span className="text-[#E66B9C] font-bold">else</span>:
                  {'\n    '}
                  <span className="text-[#E66B9C] font-bold">return</span>{' '}
                  <span className="text-[#A8E084]">&quot;High Fever&quot;</span>
                </code>
              </pre>

              <div className="mt-3 pt-2.5 border-t border-dashed border-[#333] text-[#FFBD2E]">
                &gt; input: 38.4°C
                <br />
                &gt; [STATUS]: Fever detected
              </div>
            </div>

            <div className="text-right mt-2 font-mono-zine text-[10px] text-[#E66B9C] font-bold">
              STAMP: VERIFIED PYTHON 3 ✦
            </div>
          </div>
        </div>
      </article>

      {/* PROJECT 2: Digital Hoax & Misinformation Analysis */}
      <article className="project-card paper-texture bg-[#DDD8CE] text-[#1F1D1B] mb-12 rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative">
        <div className="absolute -top-[30px] left-0 bg-[#DDD8CE] text-[#1F1D1B] font-mono-zine text-[12px] font-bold px-5 py-1.5 rounded-t-[6px] border-t-2 border-black/10 flex items-center gap-2 tracking-[0.05em]">
          <span>PROJECT 02 // RESEARCH</span>
          <span className="w-2 h-2 rounded-full bg-[#E66B9C] inline-block" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 p-7 sm:p-11 lg:p-12 items-center">
          <div>
            <div className="font-mono-zine text-[11.5px] font-bold text-[#1F1D1B]/75 tracking-[0.08em] mb-2.5 flex items-center gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-[#E66B9C] inline-block" aria-hidden="true" />
              <span>2026 · ACADEMIC PAPER · DIGITAL ETHICS &amp; RESEARCH</span>
            </div>

            <h3 className="text-[clamp(24px,2.6vw,32px)] font-extrabold leading-[1.15] mb-3.5 text-[#1F1D1B]">
              Digital Hoax &amp; Misinformation Analysis
            </h3>

            <p className="text-[15px] text-[#1F1D1B]/75 mb-6 leading-[1.65]">
              An analytical study examining the psychological and structural spread of digital misinformation, hate speech, and cyber ethics in Indonesia&apos;s online communication ecosystem.
            </p>

            <ul className="space-y-3 mb-7 text-[14.5px] leading-[1.6]">
              <li className="relative pl-5">
                <span className="absolute left-0 top-0 text-[#E66B9C] font-bold text-[13px]" aria-hidden="true">✦</span>
                <strong className="text-[#0E0D0C]">Main Focus:</strong> Investigates algorithmic triggers behind viral hoaxes, digital literacy gaps, and social media echo chambers.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-0 text-[#E66B9C] font-bold text-[13px]" aria-hidden="true">✦</span>
                <strong className="text-[#0E0D0C]">Legal &amp; Security:</strong> Synthesizes Indonesian digital regulations (UU ITE) alongside practical personal data protection protocols.
              </li>
              <li className="relative pl-5">
                <span className="absolute left-0 top-0 text-[#E66B9C] font-bold text-[13px]" aria-hidden="true">✦</span>
                <strong className="text-[#0E0D0C]">Deliverable:</strong> Authored a structured academic thesis report and visual presentation advocating responsible digital citizenship.
              </li>
            </ul>

            <button
              type="button"
              onClick={() => onOpenModal('project2')}
              className="zine-btn-primary"
            >
              Inspect Research Summary ↗
            </button>
          </div>

          {/* Research Paper Infographic Card */}
          <div className="bg-white p-3 pb-7 rounded-[2px] shadow-[4px_10px_24px_rgba(0,0,0,0.22)] relative -rotate-[1.8deg] hover:rotate-0 hover:scale-[1.02] transition-transform duration-300">
            <div className="tape-corner tape-tl" aria-hidden="true" />
            <div className="tape-corner tape-tr" aria-hidden="true" />

            <div className="bg-[#EAE6DF] border-[1.5px] border-dashed border-[#1F1D1B] p-[22px] rounded-[2px]">
              <div className="font-mono-zine text-[10px] font-bold text-[#E66B9C] mb-2">
                ACADEMIC BRIEF // ITPLN 2026
              </div>
              <h4 className="text-[17px] font-extrabold text-[#1F1D1B] mb-3 leading-[1.3]">
                &quot;FACT vs HOAX&quot; · DIGITAL ETHICS IN CYBERSPACE
              </h4>
              <div className="text-[12px] text-[#555] leading-[1.6] mb-3.5">
                • Confirmation Bias Analysis
                <br />
                • UU ITE Compliance Framework
                <br />
                • Data Privacy &amp; Encryption Hygiene
              </div>
              <div className="flex justify-between items-center border-t border-black/15 pt-2">
                <span className="font-mono-zine text-[10px] font-bold text-[#1F1D1B]">
                  PEER REVIEWED
                </span>
                <span className="font-brush text-[18px] text-[#E66B9C]">
                  Dina N. Gurning
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
