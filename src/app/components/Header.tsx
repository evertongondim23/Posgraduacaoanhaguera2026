import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import anhangueraLogo from 'figma:asset/8a057397c557ffd769f19f7374d548d9d2e82ebd.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-lg py-2 md:py-3' 
          : 'bg-white/95 backdrop-blur-sm py-3 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <img 
              src={anhangueraLogo} 
              alt="Anhanguera" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-7 md:h-8' : 'h-8 md:h-10'
              }`}
            />
          </motion.a>

          {/* CTA Button */}
          <motion.a
            href="#inscricao"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl relative overflow-hidden group text-sm md:text-base"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <span className="hidden sm:inline">Comece sua Jornada</span>
              <span className="sm:hidden">Inscreva-se</span>
            </span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}