import { ArrowRight, GraduationCap, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';
import backgroundImage from 'figma:asset/f097e6360e6c6c03feb76bc1c3988755da647c7b.png';
import jesus01 from 'figma:asset/dbbf5d14ff7755aa5f16b46b67a1e437add23a4c.png';
import certificadoMEC from 'figma:asset/4d3fedf68ee5486482bdcdc1e918be1a65c215ef.png';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white to-orange-50 overflow-hidden pt-16 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 md:space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold"
            >
              PÓS-GRADUAÇÃO ANHANGUERA
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500 leading-snug"
            >
              Especialização em Jesus no Mundo Contemporâneo: Cristianismo e Espiritualidade
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Todos Falam em{' '}
              <span className="text-orange-500">Seu Nome</span>{' '}
              mas de qual <span className="text-orange-500">Jesus</span>{' '} estamos falando.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed"
            >
              Uma Jornada acadêmica e espiritual para ir além dos clichês e compreender a figura que continua a definir nosso tempo.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col gap-3 md:gap-4 pt-2 md:pt-4 items-start"
            >
              <motion.a 
                href="#inscricao"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 md:py-4 rounded-lg font-semibold text-center transition-colors shadow-lg hover:shadow-xl relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10">Inscreva-se Agora</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a 
                href="#programa"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3.5 md:py-4 rounded-lg font-semibold text-center transition-colors w-full sm:w-auto"
              >
                Conheça o Programa
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8"
            >
              {[
                { value: '100%', label: 'Online' },
                { value: '360h', label: 'de conteúdo' },
                { value: '12x', label: 'sem juros' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative z-[1] hidden lg:block"
          >
            <img 
              src={jesus01} 
              alt="Jesus" 
              className="w-full h-auto scale-150 pb-[-90px]"
              style={{ paddingBottom: '-90px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}