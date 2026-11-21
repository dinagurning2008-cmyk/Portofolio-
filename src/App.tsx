import { useRef, useState } from 'react';
import { Header } from './components/Header';
import { HeroAboutSection } from './components/HeroAboutSection';
import { ProjectsSection, type ModalType } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactFooter } from './components/ContactFooter';
import { DetailModal } from './components/DetailModal';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const handleCopyEmail = (email: string) => {
    const showToast = (msg: string) => {
      setToastMessage(msg);
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
      toastTimerRef.current = window.setTimeout(() => {
        setToastMessage(null);
      }, 2600);
    };

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => showToast('Copied to clipboard! ✦'))
        .catch(() => showToast(`Email: ${email}`));
    } else {
      showToast(`Email: ${email}`);
    }
  };

  return (
    <div className="min-h-screen text-[#DDD8CE]">
      <Header />

      <main>
        <HeroAboutSection onOpenCV={() => setActiveModal('cv')} />
        <ProjectsSection onOpenModal={(modal) => setActiveModal(modal)} />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactFooter onCopyEmail={handleCopyEmail} />
      </main>

      <DetailModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />

      {/* Toast Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-7 right-7 bg-[#E66B9C] text-[#1F1D1B] font-mono-zine font-bold text-[13px] px-5 py-3 rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 pointer-events-none transition-all duration-300 ${
          toastMessage
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5'
        }`}
      >
        {toastMessage ?? ''}
      </div>
    </div>
  );
}
