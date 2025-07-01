import { useState } from 'react'
import { motion } from 'framer-motion'
import BlockbusterLogo from "./BlockbusterLogo";
import CarriePoster from '../Carrieposter.jpg';
import SuspiriaPoster from '../SuspiriaItaly.jpg';

const movies = [
  {
    title: 'Carrie',
    image: CarriePoster,
    description: 'Carrie movie desc.'
  },
  {
    title: 'Suspiria',
    image: SuspiriaPoster,
    description: 'Dancers scary.'
  },
];

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
          <div className="bg-gray-800 px-4 py-6 w-3/4" style={{borderRadius: 0, marginBottom: 0, minHeight: '450px'}}>
            <div className="flex flex-wrap gap-4 justify-center">
              {movies.map((movie, idx) => (
                <motion.button
                  key={movie.title}
                  className="shadow-lg rounded-lg overflow-hidden border-4 border-black bg-white cursor-pointer w-16 h-24"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    delay: idx * 0.1,
                    type: 'spring',
                    stiffness: 300
                  }}
                  onClick={() => setSelectedMovie(movie)}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover block"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        {/* Grey horizontal rectangle at the very bottom, absolutely positioned */}
        <div className="absolute left-0 bottom-0 w-full">
          <div className="bg-gray-400 w-full" style={{height: '48px', borderRadius: 0, marginTop: 0}}></div>
        </div>
        {/* Movie info modal */}
        {selectedMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setSelectedMovie(null)}>
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-black text-xl font-bold" onClick={() => setSelectedMovie(null)}>&times;</button>
              <h2 className="text-2xl font-bold mb-2">{selectedMovie.title}</h2>
              <img src={selectedMovie.image} alt={selectedMovie.title} className="w-32 h-48 object-cover mb-4 mx-auto" />
              <p className="mb-4">{selectedMovie.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
