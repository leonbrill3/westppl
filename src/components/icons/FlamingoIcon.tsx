/** Small flamingo accent mark used as a section flourish. */
export function FlamingoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 45"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0 C4 8, 4 16, 10 24 C16 16, 16 8, 10 0 Z"
        fill="currentColor"
      />
      <path
        d="M10 24 Q8 32, 6 38 Q4 44, 2 48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 48 Q0 52, 4 54"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
