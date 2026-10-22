import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Pós-Graduação Anhanguera</h3>
                <p className="text-xs text-gray-600">Jornada sobre Jesus</p>
              </div>
            </div>
            
            <motion.a
              href="#inscricao"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
            >
              Inscreva-se Agora
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
