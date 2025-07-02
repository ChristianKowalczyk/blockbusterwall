export default function MovieModal({ movie, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-black text-xl font-bold" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <img src={movie.image} alt={movie.title} className="w-32 h-48 object-cover mb-4 mx-auto" />
        <p className="mb-4">{movie.description}</p>
      </div>
    </div>
  );
} 