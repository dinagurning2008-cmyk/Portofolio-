export function MetallicPaperclip({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 70 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#C8CCD4" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#9AA0A8" />
          <stop offset="100%" stopColor="#E2E5EA" />
        </linearGradient>
      </defs>
      <path
        d="M22 36V90C22 101.046 30.9543 110 42 110C53.0457 110 62 101.046 62 90V28C62 12.536 49.464 0 34 0C18.536 0 6 12.536 6 28V92C6 107.464 18.536 120 34 120"
        stroke="rgba(0,0,0,0.3)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M22 36V90C22 99.9411 30.0589 108 40 108C49.9411 108 58 99.9411 58 90V28C58 14.7452 47.2548 4 34 4C20.7452 4 10 14.7452 10 28V90"
        stroke="url(#metalGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SimplePaperclip({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 70 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 36V90C22 99.9411 30.0589 108 40 108C49.9411 108 58 99.9411 58 90V28C58 14.7452 47.2548 4 34 4C20.7452 4 10 14.7452 10 28V90"
        stroke="#777"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RubberPostmarkStamp({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <path id="stampArcTop" d="M 24 65 A 76 42 0 0 1 176 65" />
        <path id="stampArcBot" d="M 24 65 A 76 42 0 0 0 176 65" />
      </defs>
      <g fill="none" stroke="#E66B9C" strokeWidth="2.2">
        <ellipse cx="100" cy="65" rx="92" ry="58" />
        <ellipse cx="100" cy="65" rx="84" ry="50" strokeWidth="1.2" />

        <text
          fontFamily="'Space Mono', monospace"
          fontSize="10.5"
          fontWeight="700"
          fill="#E66B9C"
          stroke="none"
          letterSpacing="1.5"
        >
          <textPath href="#stampArcTop" startOffset="50%" textAnchor="middle">
            DINA NOVELINA GURNING
          </textPath>
        </text>

        <line x1="28" y1="52" x2="172" y2="52" strokeWidth="1.2" stroke="#E66B9C" />
        <line x1="28" y1="78" x2="172" y2="78" strokeWidth="1.2" stroke="#E66B9C" />

        <text
          x="100"
          y="68"
          fontFamily="'Space Mono', monospace"
          fontSize="11"
          fontWeight="700"
          fill="#E66B9C"
          stroke="none"
          textAnchor="middle"
          letterSpacing="1"
        >
          ITPLN · 2026 · BONDED
        </text>

        <text
          fontFamily="'Space Mono', monospace"
          fontSize="8.8"
          fontWeight="700"
          fill="#E66B9C"
          stroke="none"
          letterSpacing="1"
        >
          <textPath href="#stampArcBot" startOffset="50%" textAnchor="middle">
            ★ INFORMATICS ENGINEERING ★
          </textPath>
        </text>
      </g>
    </svg>
  );
}

export function CrossStitchTrail() {
  const marks = ['+', 'x', '+', 'x', '+', 'x', '+', 'x'];
  return (
    <div
      className="hidden md:flex flex-col justify-around items-center absolute -left-8 top-10 bottom-5 w-11 pointer-events-none z-25 text-[#E66B9C]"
      aria-hidden="true"
    >
      {marks.map((mark, idx) => (
        <span
          key={idx}
          className="font-mono-zine font-bold text-2xl leading-none opacity-85 drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] select-none"
        >
          {mark}
        </span>
      ))}
    </div>
  );
}
