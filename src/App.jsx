import { useState } from 'react'
import BlockbusterLogo from "./components/BlockbusterLogo";
import MovieGrid from "./components/MovieGrid";
import movies from "./data/movies";

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

  return (
    <>
      <div className="ui-haze-grain"></div>
      <div className="min-h-screen flex items-center justify-center">
        {/* Yellow rectangle container, now taller */}
        <div className="rounded-b-3xl bg-blockbuster-yellow flex flex-col items-center shadow-2xl relative wall-container">
          {/* Place ticket at the top, slightly to the left */}
          <div className="w-full flex justify-start">
            <div className="logo-margin">
              <BlockbusterLogo />
            </div>
          </div>
          {/* Black rectangle for movie tiles */}
          <div className="w-full flex justify-center mt-auto">
            <div className="bg-gray-600 w-3/4 shelf-shadow movie-shelf">
              <MovieGrid movies={movies} />
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
        </div>
      </div>
    </>
  )
}

export default App
