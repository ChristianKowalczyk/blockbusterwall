export default function BlockbusterLogo() {
  return (
    <div className="blockbuster-flicker">
      <svg
        width="140"
        height="70"
        viewBox="0 0 140 70"
        style={{ display: 'block', transform: 'rotate(-8deg)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Grain pattern from .ui-haze-grain */}
          <pattern id="grain" patternUnits="userSpaceOnUse" width="60" height="60">
            <circle cx="6" cy="6" r="1" fill="white" fillOpacity="0.12"/>
            <circle cx="30" cy="12" r="1.5" fill="white" fillOpacity="0.10"/>
            <circle cx="54" cy="18" r="1" fill="white" fillOpacity="0.10"/>
            <circle cx="18" cy="30" r="1.2" fill="white" fillOpacity="0.10"/>
            <circle cx="42" cy="36" r="1.1" fill="white" fillOpacity="0.10"/>
            <circle cx="12" cy="54" r="1.3" fill="white" fillOpacity="0.10"/>
            <circle cx="36" cy="48" r="1.1" fill="white" fillOpacity="0.10"/>
          </pattern>
          {/* Haze lines pattern */}
          <pattern id="hazeLines" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect x="0" y="0" width="2" height="2" fill="white" fillOpacity="0.16" />
            <rect x="2" y="2" width="2" height="2" fill="transparent" />
          </pattern>
        </defs>
        {/* Ticket background */}
        <rect
          x="1.5"
          y="1.5"
          width="137"
          height="67"
          rx="16"
          ry="20"
          fill="#1751b5"
          stroke="#ffc72c"
          strokeWidth="3"
        />
        {/* BLOCKBUSTER text */}
        <rect x="20" y="14" width="100" height="20" rx="6" fill="#1751b5" stroke="#ffc72c" strokeWidth="2" />
        <text
          x="70"
          y="28"
          textAnchor="middle"
          fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="bold"
          fontSize="10"
          letterSpacing="1.2"
          fill="#ffc72c"
        >
          BLOCKBUSTER
        </text>
        {/* WALL text */}
        <rect x="32" y="38" width="76" height="16" rx="6" fill="#1751b5" stroke="#ffc72c" strokeWidth="2" />
        <text
          x="70"
          y="50"
          textAnchor="middle"
          fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="bold"
          fontSize="10"
          letterSpacing="3"
          fill="#ffc72c"
        >
          WALL
        </text>
        {/* Haze/Grain overlay (on top of everything) */}
        <rect x="0" y="0" width="140" height="70" fill="url(#hazeLines)" opacity="0.32" />
        <rect x="0" y="0" width="140" height="70" fill="url(#grain)" opacity="0.32" />
      </svg>
    </div>
  );
}