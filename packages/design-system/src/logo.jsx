/* global React */
// Atlaps logo — monogram "A" formed by topographic isolines

const Logo = ({ variant = "horizontal", size, animate = false, className = "" }) => {
  const id = React.useId();

  // Monogram: stylized "A" as elevation contours
  const Monogram = ({ s = 64 }) => (
    <svg width={s} height={s} viewBox="0 0 64 64" className="atlaps-monogram" aria-hidden="true">
      <defs>
        <clipPath id={`atlaps-clip-${id}`}>
          {/* Triangle "A" shape */}
          <path d="M32 6 L58 56 L46 56 L42 46 L22 46 L18 56 L6 56 Z M27 36 L37 36 L32 22 Z" />
        </clipPath>
      </defs>

      {/* Outer A silhouette stroke */}
      <path
        d="M32 6 L58 56 L46 56 L42 46 L22 46 L18 56 L6 56 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        className={animate ? "logo-stroke" : ""}
      />
      {/* Crossbar */}
      <path
        d="M27 36 L37 36 L32 22 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        className={animate ? "logo-stroke logo-stroke-2" : ""}
      />

      {/* Isolines (contour lines) clipped to A */}
      <g clipPath={`url(#atlaps-clip-${id})`} stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.55">
        <ellipse cx="32" cy="32" rx="28" ry="9" />
        <ellipse cx="32" cy="32" rx="22" ry="7" />
        <ellipse cx="32" cy="32" rx="16" ry="5" />
        <ellipse cx="32" cy="32" rx="10" ry="3" />
      </g>

      {/* Summit dot */}
      <circle cx="32" cy="22" r="1.2" fill="currentColor" />
    </svg>
  );

  const Wordmark = ({ s = 48 }) => (
    <span
      className="atlaps-wordmark"
      style={{
        fontFamily: "var(--font-display)",
        fontSize: s * 0.55,
        letterSpacing: "0.08em",
        fontWeight: 500,
        lineHeight: 1,
        color: "currentColor",
      }}
    >
      atlaps
    </span>
  );

  if (variant === "icon") {
    return (
      <div className={`logo logo-icon ${className}`} style={{ display: "inline-flex" }}>
        <Monogram s={size || 64} />
      </div>
    );
  }
  if (variant === "vertical") {
    const s = size || 96;
    return (
      <div className={`logo logo-vertical ${className}`} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: s * 0.16 }}>
        <Monogram s={s} />
        <Wordmark s={s} />
      </div>
    );
  }
  // horizontal
  const s = size || 48;
  return (
    <div className={`logo logo-horizontal ${className}`} style={{ display: "inline-flex", alignItems: "center", gap: s * 0.28 }}>
      <Monogram s={s} />
      <Wordmark s={s} />
    </div>
  );
};

window.Logo = Logo;
