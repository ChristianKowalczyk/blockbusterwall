import React from "react";

export default function HazeGrainOverlay() {
  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0.32,
        mixBlendMode: "lighten",
      }}
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
      {/* Haze/Grain overlay (on top of everything) */}
      <rect x="0" y="0" width={window.innerWidth} height={window.innerHeight} fill="url(#hazeLines)" />
      <rect x="0" y="0" width={window.innerWidth} height={window.innerHeight} fill="url(#grain)" />
    </svg>
  );
} 