import { useEffect, useState } from 'react';
import { X, Printer, Mail } from 'lucide-react';
import type { ModalType } from './ProjectsSection';

interface DetailModalProps {
  activeModal: ModalType;
  onClose: () => void;
}

function classifyTemperature(tempStr: string): {
  status: string;
  advisory: string;
  toneClass: string;
} {
  const value = parseFloat(tempStr);
  if (Number.isNaN(value)) {
    return {
      status: 'Invalid Input',
      advisory: 'Enter a numeric Celsius temperature.',
      toneClass: 'text-[#FFBD2E]',
    };
  }
  if (value < 30.0 || value > 45.0) {
    return {
      status: 'Sensor Range Warning',
      advisory: 'Reading outside physiological sensor bounds (30.0°C–45.0°C).',
      toneClass: 'text-[#FF5F56]',
    };
  }
  if (value < 35.0) {
    return {
      status: 'Hypothermia',
      advisory: 'Core temperature below 35.0°C threshold.',
      toneClass: 'text-[#7FD1E6]',
    };
  }
  if (value <= 37.5) {
    return {
      status: 'Normal',
      advisory: 'Within healthy baseline range (35.0°C–37.5°C).',
      toneClass: 'text-[#A8E084]',
    };
  }
  if (value <= 39.0) {
    return {
      status: 'Fever',
      advisory: 'Elevated temperature detected (37.6°C–39.0°C).',
      toneClass: 'text-[#FFBD2E]',
    };
  }
  return {
    status: 'High Fever',
    advisory: 'Critical threshold exceeded (>39.0°C).',
    toneClass: 'text-[#E66B9C]',
  };
}

export function DetailModal({ activeModal, onClose }: DetailModalProps) {
  const [testTemp, setTestTemp] = useState('38.4');

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const evalResult = classifyTemperature(testTemp);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio detail modal"
      onClick={onClose}
      className="fixed inset-0 bg-[#121110]/85 backdrop-blur-sm z-50 flex items-center justify-center p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="paper-texture bg-[#DDD8CE] text-[#1F1D1B] max-w-[660px] w-full max-h-[90vh] overflow-y-auto p-7 sm:p-9 rounded-[2px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 bg-[#1F1D1B] text-[#DDD8CE] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E66B9C] hover:text-[#1F1D1B] transition-colors"
        >
          <X size={18} />
        </button>

        {activeModal === 'project1' && (
          <div>
            <div className="font-mono-zine text-[11px] text-[#C84A7D] font-bold mb-2">
              PROJECT ARCHITECTURE // 2026
            </div>
            <h3 className="text-[24px] font-extrabold mb-3 text-[#1F1D1B] pr-8">
              Body Temperature Classification Program
            </h3>
            <p className="text-[14.5px] leading-[1.7] text-[#1F1D1B]/75 mb-4">
              This program implements rigorous input parsing to classify clinical human temperatures. It uses boundary checks to flag sensor errors (&lt;30°C or &gt;45°C) and isolates critical fever thresholds.
            </p>

            <div className="bg-[#1B1A19] p-4 rounded-[4px] font-mono-zine text-[12px] text-[#DDD8CE] mb-5">
              <div className="text-[#E66B9C] mb-1.5 font-bold">
                Algorithm Logic:
              </div>
              • Input: Floating-point Celsius temperature
              <br />
              • Thresholds: Hypothermia (&lt;35°C), Normal (35.0–37.5°C), Fever (37.6–39.0°C), High Fever (&gt;39.0°C)
              <br />• Output: Categorized medical status advisory
            </div>

            {/* Interactive Python Classifier Sandbox */}
            <div className="border border-dashed border-[#1F1D1B]/35 bg-[#EAE6DF] p-4 rounded-[2px] mb-4">
              <div className="font-mono-zine text-[11px] font-bold text-[#1F1D1B] mb-2">
                INTERACTIVE CLASSIFIER TESTER
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <label
                  htmlFor="temp-input"
                  className="font-mono-zine text-[12px] font-bold"
                >
                  Temp (°C):
                </label>
                <input
                  id="temp-input"
                  type="number"
                  step="0.1"
                  value={testTemp}
                  onChange={(e) => setTestTemp(e.target.value)}
                  className="font-mono-zine text-[13px] bg-white border border-[#1F1D1B] px-2.5 py-1.5 w-24 rounded-[2px]"
                />
                <div className="flex flex-wrap gap-1.5">
                  {['34.2', '36.6', '38.4', '39.8'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setTestTemp(preset)}
                      className={`font-mono-zine text-[11px] px-2.5 py-1 rounded-[2px] border border-[#1F1D1B]/40 cursor-pointer transition-colors ${
                        testTemp === preset
                          ? 'bg-[#E66B9C] text-[#1F1D1B] font-bold'
                          : 'bg-white text-[#1F1D1B] hover:bg-[#1F1D1B] hover:text-[#DDD8CE]'
                      }`}
                    >
                      {preset}°C
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#181716] text-[#DDD8CE] p-3 rounded-[4px] font-mono-zine text-[12px]">
                <div>&gt; classify_temp({testTemp || '0'})</div>
                <div className={`font-bold mt-1 ${evalResult.toneClass}`}>
                  &gt; [STATUS]: {evalResult.status}
                </div>
                <div className="text-[#DDD8CE]/75 text-[11px] mt-0.5">
                  &gt; {evalResult.advisory}
                </div>
              </div>
            </div>

            <div className="font-mono-zine text-[13px] text-[#1F1D1B]">
              Status: Deployed &amp; Validated in Python 3.11
            </div>
          </div>
        )}

        {activeModal === 'project2' && (
          <div>
            <div className="font-mono-zine text-[11px] text-[#C84A7D] font-bold mb-2">
              RESEARCH WHITE PAPER // 2026
            </div>
            <h3 className="text-[24px] font-extrabold mb-3 text-[#1F1D1B] pr-8">
              Digital Hoax &amp; Misinformation Analysis
            </h3>
            <p className="text-[14.5px] leading-[1.7] text-[#1F1D1B]/75 mb-5">
              A comprehensive analytical review examining how digital echo chambers accelerate fabricated news, clickbait sensationalism, and cyber harassment in contemporary Indonesian social media.
            </p>
            <div className="bg-[#1B1A19] p-4 rounded-[4px] font-mono-zine text-[12px] text-[#DDD8CE] mb-5 space-y-2">
              <div className="text-[#E66B9C] font-bold">
                Key Research Conclusions:
              </div>
              <div>
                • 74% of spreaders fail to verify second-hand sources before forwarding.
              </div>
              <div>
                • Integration of UU ITE legal protections with early digital literacy reduces viral misinformation impact.
              </div>
              <div>
                • Proposed guidelines for ethical digital engagement for higher-education students.
              </div>
            </div>
            <div className="font-mono-zine text-[13px] text-[#1F1D1B]">
              Status: Published Academic Paper &amp; Presentation Deck
            </div>
          </div>
        )}

        {activeModal === 'cv' && (
          <div>
            <div className="font-mono-zine text-[11px] text-[#C84A7D] font-bold mb-1">
              CURRICULUM VITAE DOSSIER // 2026
            </div>
            <h3 className="text-[26px] font-extrabold text-[#1F1D1B] pr-8">
              Dina Novelina Gurning
            </h3>
            <p className="font-mono-zine text-[12px] text-[#1F1D1B]/75 mb-5">
              Informatics Engineering · Institut Teknologi PLN · PLN Group&apos;s Bonded Program
            </p>

            <div className="space-y-4 text-[13.5px] leading-relaxed border-t border-b border-dashed border-[#1F1D1B]/30 py-4 mb-5">
              <div>
                <div className="font-mono-zine font-bold text-[12px] text-[#1F1D1B] mb-1">
                  EDUCATION
                </div>
                <p>
                  <strong>Institut Teknologi PLN (ITPLN)</strong> (2026–Present) — S1 Informatics Engineering (Program Ikatan Dinas PLN Group).
                </p>
                <p>
                  <strong>SMAN 1 GSB</strong> (2023–2026) — Science &amp; Physics Olympiad Track (OSN Physics Regency Delegate).
                </p>
              </div>
              <div>
                <div className="font-mono-zine font-bold text-[12px] text-[#1F1D1B] mb-1">
                  PROJECTS &amp; LEADERSHIP
                </div>
                <p>
                  • Body Temperature Classification Program (Python 3 conditional logic &amp; clinical threshold validation).
                </p>
                <p>
                  • Digital Hoax &amp; Misinformation Analysis (Academic thesis &amp; UU ITE digital ethics brief).
                </p>
                <p>
                  • Social Media Manager, Graduation Documentation Committee &amp; HKBP Parapat Youth Core Committee.
                </p>
              </div>
              <div>
                <div className="font-mono-zine font-bold text-[12px] text-[#1F1D1B] mb-1">
                  CORE TOOLKIT
                </div>
                <p>
                  Python · MS Excel · Canva Pro · Photo &amp; Video Documentation · Digital Research
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="zine-btn-primary text-[13px] py-2.5 px-5"
              >
                <Printer size={15} aria-hidden="true" />
                <span>Print / Save PDF</span>
              </button>
              <a
                href="mailto:dinagurning2008@gmail.com"
                className="font-mono-zine text-[13px] font-bold text-[#1F1D1B] border border-[#1F1D1B] px-4 py-2.5 inline-flex items-center gap-2 hover:bg-[#1F1D1B] hover:text-[#DDD8CE] transition-colors"
              >
                <Mail size={15} aria-hidden="true" />
                <span>Request Full PDF</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
