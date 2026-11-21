import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#22201E]/85 border-b border-dashed border-[#DDD8CE]/15 px-[5vw] py-4">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#about"
          className="font-mono-zine font-bold text-xl tracking-tight text-[#DDD8CE] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#E66B9C] rounded-sm"
        >
          DN<span className="text-[#E66B9C]">.</span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-zine text-[13.5px] text-[#DDD8CE] hover:text-[#E66B9C] transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-[#E66B9C] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="font-mono-zine text-[13px] font-bold border-[1.5px] border-[#E66B9C] text-[#E66B9C] px-4 py-1.5 rounded-full hover:bg-[#E66B9C] hover:text-[#1F1D1B] hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#DDD8CE]"
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#DDD8CE] hover:text-[#E66B9C] transition-colors focus-visible:outline-2 focus-visible:outline-[#E66B9C] rounded"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Compact Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden mt-3 pt-3 border-t border-dashed border-[#DDD8CE]/20 flex flex-wrap gap-x-5 gap-y-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono-zine text-[13px] text-[#DDD8CE] hover:text-[#E66B9C] py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
