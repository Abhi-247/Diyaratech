export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-xl animate-float"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27B8F5" />
          <stop offset="100%" stopColor="#1A9FD9" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F8D03F" />
          <stop offset="100%" stopColor="#E6BC2A" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.12" />
        </filter>
      </defs>

      <circle cx="300" cy="250" r="180" fill="#E8F7FE" className="animate-pulse-glow" />
      <circle cx="480" cy="120" r="60" fill="#F8D03F" opacity="0.2" />
      <circle cx="100" cy="380" r="40" fill="#27B8F5" opacity="0.15" />

      <g filter="url(#softShadow)">
        <rect x="80" y="120" width="280" height="200" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="96" y="140" width="80" height="8" rx="4" fill="#27B8F5" />
        <rect x="96" y="160" width="120" height="6" rx="3" fill="#E5E7EB" />
        <rect x="96" y="180" width="200" height="6" rx="3" fill="#E5E7EB" />
        <rect x="96" y="200" width="160" height="6" rx="3" fill="#E5E7EB" />
        <rect x="96" y="230" width="248" height="70" rx="8" fill="#F8FAFC" />
        <rect x="108" y="248" width="60" height="36" rx="6" fill="url(#heroGrad)" />
        <rect x="178" y="248" width="60" height="36" rx="6" fill="url(#accentGrad)" />
        <rect x="248" y="248" width="60" height="36" rx="6" fill="#E8F7FE" stroke="#27B8F5" strokeWidth="1" />
      </g>

      <g filter="url(#softShadow)">
        <rect x="300" y="80" width="200" height="160" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <circle cx="400" cy="130" r="30" fill="url(#heroGrad)" opacity="0.2" />
        <path
          d="M370 170 Q400 140 430 170 T490 170"
          stroke="url(#heroGrad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="320" y="190" width="40" height="30" rx="6" fill="#E8F7FE" />
        <rect x="370" y="190" width="40" height="30" rx="6" fill="#F8D03F" opacity="0.3" />
        <rect x="420" y="190" width="40" height="30" rx="6" fill="#E8F7FE" />
      </g>

      <g filter="url(#softShadow)">
        <rect x="340" y="280" width="200" height="180" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="360" y="300" width="160" height="100" rx="8" fill="#111827" />
        <text x="380" y="330" fill="#27B8F5" fontFamily="monospace" fontSize="11">
          {'const team = {'}
        </text>
        <text x="390" y="350" fill="#F8D03F" fontFamily="monospace" fontSize="11">
          ai: true,
        </text>
        <text x="390" y="370" fill="#27B8F5" fontFamily="monospace" fontSize="11">
          cloud: &apos;AWS&apos;
        </text>
        <text x="380" y="390" fill="#27B8F5" fontFamily="monospace" fontSize="11">
          {'};'}
        </text>
        <circle cx="440" cy="430" r="12" fill="url(#accentGrad)" />
      </g>

      <g filter="url(#softShadow)">
        <rect x="60" y="340" width="160" height="120" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <circle cx="140" cy="385" r="25" fill="url(#heroGrad)" />
        <circle cx="110" cy="420" r="18" fill="url(#accentGrad)" />
        <circle cx="170" cy="420" r="18" fill="#E8F7FE" stroke="#27B8F5" strokeWidth="1.5" />
        <line x1="125" y1="400" x2="155" y2="410" stroke="#27B8F5" strokeWidth="2" />
      </g>

      <path
        d="M240 250 L300 200 L360 250"
        stroke="url(#heroGrad)"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}
