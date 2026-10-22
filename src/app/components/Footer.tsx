import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import logoAnhanguera from 'figma:asset/cc1aec499818ae3bd6cf874c2f4ccb3dd847b97c.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={logoAnhanguera} 
              alt="Anhanguera" 
              className="h-12 md:h-16 mb-3 md:mb-4 object-contain"
            />
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Transformando vidas através da educação de qualidade há mais de 25 anos.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:ml-auto"
          >
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Siga-nos</h4>
            <div className="flex gap-3">
              <motion.a 
                href="https://www.facebook.com/posjesushoje"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, backgroundColor: "#f97316" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-12 h-12 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/pos.jesushoje/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, backgroundColor: "#f97316" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-12 h-12 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
          <p>&copy; 2026 Anhanguera Educacional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}