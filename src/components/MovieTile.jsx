import { motion } from 'framer-motion';

export default function MovieTile({ movie, onClick, animationDelay, onImageLoad, onAnimationComplete }) {
  return (
    <motion.button
      className="shadow-lg rounded-lg overflow-hidden border-4 border-black bg-white cursor-pointer w-16 h-24 justify-self-center select-none"
      style={{ userSelect: 'none' }}
      initial={{ opacity: 0, y: 50, scale: 0.8, rotate: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      whileHover={{
        rotate: [0, -5, 5, -5, 0],
        transition: {
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
      }}
      whileTap={{ scale: 0.97 }}
      transition={{
        duration: 0.3,
        delay: animationDelay,
        type: 'spring',
        stiffness: 300
      }}
      onClick={onClick}
      onAnimationComplete={onAnimationComplete}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover block select-none"
        style={{ userSelect: 'none' }}
        onLoad={onImageLoad}
      />
    </motion.button>
  );
} 