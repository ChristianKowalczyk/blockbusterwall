import { useState, useRef } from 'react'
import html2canvas from 'html2canvas';
import BlockbusterLogo from "./components/BlockbusterLogo";
import MovieGrid from "./components/MovieGrid";
import movies from "./data/movies";
import HazeGrainOverlay from "./HazeGrainOverlay";

function App() {
  // Neon rug shapes as data
  const neonShapes = [
    { type: 'dot', color: 'pink', left: '4%', top: '8px' },
    { type: 'zigzag', color: 'green', left: '15%', top: '16px' },
    { type: 'swirl', color: 'blue', left: '26%', top: '4px' },
    { type: 'dot', color: 'green', left: '37%', top: '18px' },
    { type: 'zigzag', color: 'pink', left: '48%', top: '8px' },
    { type: 'swirl', color: 'green', left: '59%', top: '16px' },
    { type: 'dot', color: 'blue', left: '70%', top: '4px' },
    { type: 'zigzag', color: 'blue', left: '81%', top: '18px' },
    { type: 'swirl', color: 'pink', left: '92%', top: '8px' },
  ];

  const wallRef = useRef(null);
  const numTiles = movies.length;
  const [tilesLoaded, setTilesLoaded] = useState(Array(numTiles).fill(false));
  const [tilesAnimated, setTilesAnimated] = useState(Array(numTiles).fill(false));

  const handleTileImageLoad = (idx) => {
    setTilesLoaded((prev) => {
      if (prev[idx]) return prev;
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };
  const handleTileAnimationComplete = (idx) => {
    setTilesAnimated((prev) => {
      if (prev[idx]) return prev;
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };
  const allLoaded = tilesLoaded.every(Boolean);
  const allAnimated = tilesAnimated.every(Boolean);
  const canDownload = allLoaded && allAnimated;

  const handleSave = async () => {
    // No need to swap input for export
    await new Promise((resolve) => setTimeout(resolve, 50)); // allow DOM to update
    if (wallRef.current && canDownload) {
      const canvas = await html2canvas(wallRef.current, {
        backgroundColor: null,
        useCORS: true,
        scale: 2,
        width: wallRef.current.offsetWidth,
        height: wallRef.current.offsetHeight,
      });
      const link = document.createElement('a');
      link.download = 'blockbuster-wall.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {/* Yellow rectangle container, now taller */}
        <div className="flex flex-row items-start justify-center w-full">
          <div
            ref={wallRef}
            className="rounded-b-3xl bg-blockbuster-yellow flex flex-col items-center shadow-2xl relative wall-container"
            style={{ position: 'relative' }}
          >
            {/* Place ticket at the top, slightly to the left */}
            <div className="w-full flex justify-start">
              <div className="logo-margin">
                <BlockbusterLogo />
              </div>
            </div>
            {/* Black rectangle for movie tiles */}
            <div className="w-full flex justify-center mt-auto">
              <div className="bg-gray-700 w-3/4 shelf-shadow movie-shelf border-black border-4">
                <MovieGrid
                  movies={movies}
                  onTileImageLoad={handleTileImageLoad}
                  onTileAnimationComplete={handleTileAnimationComplete}
                />
                <hr className="border-t-2 border-gray-400 w-full" />
              </div>
            </div>
            {/* Grey horizontal rectangle at the very bottom, absolutely positioned */}
            <div className="absolute left-0 bottom-0 w-full" style={{height: '32px'}}>
              {/* Carpet shadow for depth */}
              <div className="carpet-shadow carpet-shadow-pos"></div>
              <div className="w-full neon-carpet neon-carpet-layout">
                {/* Evenly spaced, repeating neon pattern */}
                {neonShapes.map((shape, i) => (
                  <div
                    key={i}
                    className={`neon-${shape.type} neon-${shape.type}-${shape.color} rug-warp`}
                    style={{ left: shape.left, top: shape.top }}
                  />
                ))}
                <div className="rug-haze"></div>
              </div>
            </div>
            {/* Move Haze/Grain overlay to the very end */}
            <HazeGrainOverlay />
          </div>
          {/* Save icon button to the right */}
          <button
            onClick={handleSave}
            aria-label="Save image"
            className="ml-4 mt-8 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ height: '48px', width: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            disabled={!canDownload}
          >
            {/* SVG Save Icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
