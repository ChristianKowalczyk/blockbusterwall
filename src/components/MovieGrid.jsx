import MovieTile from './MovieTile';
import { useMemo } from 'react';

export default function MovieGrid({ movies, onTileImageLoad, onTileAnimationComplete }) {
  const numRows = Math.ceil(movies.length / 2);
  function getRandomizedRow(rowTiles) {
    const slots = [null, null];
    const indices = [0, 1];
    for (let i = 0; i < rowTiles.length; i++) {
      const slotIdx = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
      slots[slotIdx] = rowTiles[i];
    }
    return slots;
  }

  const randomizedRows = useMemo(() => (
    Array.from({ length: numRows }).map((_, rowIdx) => {
      const rowTiles = movies.slice(rowIdx * 2, rowIdx * 2 + 2);
      return getRandomizedRow(rowTiles);
    })
  ), [movies]);

  return (
    <div className="flex flex-wrap gap-4 justify-center pt-8">
      {randomizedRows.map((randomizedRow, rowIdx) => (
        <div key={rowIdx} className="w-full">
          <div className="grid grid-cols-2 w-full items-end">
            {randomizedRow.map((movie, idx) => (
              movie ? (
                <MovieTile
                  key={movie.title + idx + rowIdx}
                  movie={movie}
                  animationDelay={(rowIdx * 2 + idx) * 0.1}
                  onImageLoad={() => onTileImageLoad(rowIdx * 2 + idx)}
                  onAnimationComplete={() => onTileAnimationComplete(rowIdx * 2 + idx)}
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