import { useState } from 'react'
import BlockbusterLogo from "./components/BlockbusterLogo";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";
import movies from "./data/movies";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Yellow rectangle container, now taller */}
      <div className="rounded-b-3xl bg-blockbuster-yellow pt-10 px-10 flex flex-col items-center shadow-2xl relative" style={{ minWidth: 700, minHeight: 650 }}>
        {/* Place ticket at the top, slightly to the left */}
        <div className="w-full flex justify-start">
          <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
            <BlockbusterLogo />
          </div>
        </div>
        {/* Black rectangle for movie tiles */}
        <div className="w-full flex justify-center mt-auto">
          <div className="bg-gray-600 px-4 py-6 w-3/4" style={{borderRadius: 0, marginBottom: 0, minHeight: '450px'}}>
            <MovieGrid movies={movies} onSelect={setSelectedMovie} />
            <hr className="border-t-2 border-gray-400 w-full" />
          </div>
        </div>
        {/* Grey horizontal rectangle at the very bottom, absolutely positioned */}
        <div className="absolute left-0 bottom-0 w-full">
          <div className="w-full diamond-pattern" style={{height: '32px', borderRadius: 0, marginTop: 0}}></div>
        </div>
        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </div>
    </div>
  )
}

export default App
