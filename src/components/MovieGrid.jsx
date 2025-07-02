import { useMemo } from 'react';
import MovieTile from './MovieTile';

export default function MovieGrid({ movies, onSelect }) {
  const numRows = Math.ceil(movies.length / 3);
  function getRandomizedRow(rowTiles) {
    const slots = [null, null, null];
    const indices = [0, 1, 2];
    for (let i = 0; i < rowTiles.length; i++) {
      const slotIdx = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
      slots[slotIdx] = rowTiles[i];
    }
    return slots;
  }

  // Memoize the randomized rows so they only randomize on mount
  const randomizedRows = useMemo(() => {
    return Array.from({ length: numRows }).map((_, rowIdx) => {
      const rowTiles = movies.slice(rowIdx * 3, rowIdx * 3 + 3);
      return getRandomizedRow(rowTiles);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {randomizedRows.map((randomizedRow, rowIdx) => (
        <div key={rowIdx} className="w-full">
          <div className="grid grid-cols-3 w-full items-end">
            {randomizedRow.map((movie, idx) => (
              movie ? (
                <MovieTile
                  key={movie.title + idx + rowIdx}
                  movie={movie}
                  onClick={() => onSelect(movie)}
                  animationDelay={(rowIdx * 3 + idx) * 0.1}
                />
              ) : (
                <div key={"empty-" + idx + rowIdx}></div>
              )
            ))}
          </div>
          {rowIdx < numRows - 1 && (
            <hr className="border-t-2 border-gray-400 w-full" />
          )}
        </div>
      ))}
    </div>
  );
} 