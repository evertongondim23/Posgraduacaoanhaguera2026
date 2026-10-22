import { motion } from 'motion/react';
import jesusImage from 'figma:asset/8e858afb087854f22825fec691dbd4bdda2516d7.png';
import darkBg from 'figma:asset/ab07f9103f7999b326a0b5eb5530b749cfdac399.png';

export function WhySection() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-gray-900 relative overflow-hidden pb-20 md:pb-32 lg:pb-96">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${darkBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-end mt-0 lg:-mt-[90px]">
          {/* Left Column - Jesus Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1 self-end"
          >
            <div className="relative max-w-lg w-full">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                src={jesusImage}
                alt="Jesus com ovelha"
                className="w-full h-auto object-contain drop-shadow-2xl mb-0 lg:-mb-[390px]"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white order-1 lg:order-2 lg:pt-8 mb-0 lg:-mb-[250px]"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-2 leading-tight"
            >
              <span className="text-white">O </span>
              <span className="text-orange-500">Brasil</span>
              <span className="text-white"> é cada vez mais</span>
              <br />
              <span className="text-[rgb(255,105,0)]">Cristão, </span>
              <span className="text-[rgb(255,255,255)]">a</span>
              <span className="text-white"> Compreensão</span>
              <br />
              <span className="text-white">sobre Cristo, </span>
              <span className="text-orange-500">nem tanto</span>
              <span className="text-[rgb(255,105,0)]">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
            >
              O Brasil vive um cenário espiritual singular: maior nação católica do mundo, em expansão evangélica e com o crescimento dos "sem-igreja", que buscam uma fé em Jesus fora das instituições. Nesse contexto, surgem múltiplas visões, muitas vezes conflitantes, sobre quem é Jesus. Este curso propõe clareza e profundidade, oferecendo ferramentas críticas, históricas e teológicas para compreender essas narrativas e construir uma base sólida — seja dentro de uma comunidade ou em uma jornada independente.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}