import { Mail, MessageCircle, Linkedin, Instagram } from 'lucide-react';

interface ContactFooterProps {
  onCopyEmail: (email: string) => void;
}

export function ContactFooter({ onCopyEmail }: ContactFooterProps) {
  return (
    <section
      id="contact"
      className="pt-24 pb-12 px-[5vw] border-t border-dashed border-[#DDD8CE]/20 text-center relative"
    >
      <div className="max-w-[860px] mx-auto">
        <h2 className="font-brush text-[clamp(40px,6.2vw,76px)] text-[#E66B9C] leading-[1.1] -rotate-[2.5deg] mb-4 drop-shadow-[2px_4px_0_rgba(0,0,0,0.5)]">
          Tak kenal maka Tak connect — let&apos;s say hi!
        </h2>

        <p className="text-[#DDD8CE]/85 text-[15px] sm:text-[16px] font-mono-zine max-w-[580px] mx-auto mb-10">
          Open to discussions on technology, data science, student collaborations, and future energy-tech opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            type="button"
            onClick={() => onCopyEmail('dinagurning2008@gmail.com')}
            className="contact-sticker-btn"
          >
            <Mail size={18} aria-hidden="true" />
            <span>dinagurning2008@gmail.com ✦</span>
          </button>

          <a
            href="https://wa.me/6282172834048"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-sticker-btn"
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>+62 821-7283-4048 ↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dina-novelina-gurning-99039030a"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-sticker-btn"
          >
            <Linkedin size={18} aria-hidden="true" />
            <span>Dina Novelina Gurning ↗</span>
          </a>

          <a
            href="https://www.instagram.com/dinaagurning_"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-sticker-btn"
          >
            <Instagram size={18} aria-hidden="true" />
            <span>@dinaagurning_ ↗</span>
          </a>
        </div>

        <footer className="mt-14 pt-6 border-t border-dashed border-[#DDD8CE]/15 flex flex-wrap justify-between items-center gap-3 font-mono-zine text-[11.5px] text-[#DDD8CE]/60">
          <div>© 2026 DINA NOVELINA GURNING</div>
          <div>INFORMATICS ENGINEERING · ITPLN</div>
        </footer>
      </div>
    </section>
  );
}
