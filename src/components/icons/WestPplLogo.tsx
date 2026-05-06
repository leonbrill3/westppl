export function WestPplLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "west" - thin elegant sans-serif */}
      <text
        x="0"
        y="42"
        fill="white"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="36"
        fontWeight="200"
        letterSpacing="0.2em"
      >
        west
      </text>

      {/* Flamingo icon */}
      <g transform="translate(138, 5)">
        {/* Flamingo body - teardrop/droplet shape pointing down */}
        <path
          d="M10 0 C4 8, 4 16, 10 24 C16 16, 16 8, 10 0 Z"
          fill="#E8A0A0"
        />
        {/* Flamingo curved neck */}
        <path
          d="M10 24 Q8 32, 6 38 Q4 44, 2 48"
          stroke="#E8A0A0"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Flamingo foot curl */}
        <path
          d="M2 48 Q0 52, 4 54"
          stroke="#E8A0A0"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* "ppl" - thin elegant sans-serif */}
      <text
        x="175"
        y="42"
        fill="white"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="36"
        fontWeight="200"
        letterSpacing="0.2em"
      >
        ppl
      </text>
    </svg>
  );
}

export function WestPplLogoSmall({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 45"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "west" */}
      <text
        x="0"
        y="32"
        fill="currentColor"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="26"
        fontWeight="200"
        letterSpacing="0.18em"
      >
        west
      </text>

      {/* Flamingo icon */}
      <g transform="translate(98, 3)">
        {/* Flamingo body - teardrop shape */}
        <path
          d="M8 0 C3 6, 3 12, 8 18 C13 12, 13 6, 8 0 Z"
          fill="#E8A0A0"
        />
        {/* Flamingo curved neck */}
        <path
          d="M8 18 Q6 24, 5 28 Q3 33, 2 36"
          stroke="#E8A0A0"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Flamingo foot curl */}
        <path
          d="M2 36 Q0 40, 3 42"
          stroke="#E8A0A0"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* "ppl" */}
      <text
        x="125"
        y="32"
        fill="currentColor"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="26"
        fontWeight="200"
        letterSpacing="0.18em"
      >
        ppl
      </text>
    </svg>
  );
}
