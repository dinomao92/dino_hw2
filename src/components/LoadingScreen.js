
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home.png')" }}
    >
      <motion.h1
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-4xl sm:text-4xl text-orange-500 font-bold tracking-wide drop-shadow-sm"
      >
        Loading...
      </motion.h1>
    </div>
  );
}
