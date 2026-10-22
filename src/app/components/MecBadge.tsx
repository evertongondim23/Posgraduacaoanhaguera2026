import { motion } from 'motion/react';
import certificadoMEC from 'figma:asset/4d3fedf68ee5486482bdcdc1e918be1a65c215ef.png';

export function MecBadge() {
  return (
    <section className="relative h-0 overflow-visible">
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.15, 
          rotate: 10,
          transition: { duration: 0.3 }
        }}
        className="absolute -top-20 right-8 lg:right-24 z-40"
        style={{ width: '180px', height: '180px' }}
      >
        <img 
          src={certificadoMEC} 
          alt="Certificado MEC" 
          className="w-full h-full object-contain drop-shadow-2xl hidden md:block"
        />
      </motion.div>
    </section>
  );
}