import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StartPage({ onStart }) {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center font-[--font-noto-tc]"
      style={{ backgroundImage: "url('/images/homepa.png')" }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-10"
      >
        <Image
          src="/images/title.png"
          alt="命中注菌"
          width={300}
          height={100}
          className="mx-auto"
        />
      </motion.div>

      <p className="text-lg font-bold text-orange-800 mb-3">
        測出你體內潛藏的菌格！
      </p>
      <p className="text-lg font-bold text-orange-800 mb-12">
        這是一場內心小宇宙的療癒探索。
      </p>
      <button
        onClick={onStart}
        className="bg-yellow-400 text-white text-xl font-bold px-8 py-4 rounded-full shadow-md hover:bg-yellow-500 transition cursor-pointer"
      >
        開始測驗
      </button>
    </div>
  );
}
