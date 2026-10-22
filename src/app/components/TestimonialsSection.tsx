import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Padre Marcelo Ferreira',
    role: 'Pároco e Teólogo',
    company: 'Diocese de São Paulo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    text: 'Esta pós-graduação revolucionou minha compreensão sobre Jesus. O rigor acadêmico aliado à profundidade espiritual me permitiu ir muito além dos discursos superficiais. Hoje consigo pregar com muito mais fundamentação histórica e teológica.',
    rating: 5
  },
  {
    name: 'Débora Rodrigues',
    role: 'Professora de História',
    company: 'Colégio Santa Cruz',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    text: 'Finalmente um curso que une excelência acadêmica e profundidade espiritual sem cair em reducionismos. Os professores doutores trouxeram uma perspectiva histórica e teológica que transformou minha prática docente e minha fé pessoal.',
    rating: 5
  },
  {
    name: 'Pastor Ricardo Almeida',
    role: 'Líder Religioso e Escritor',
    company: 'Igreja Batista Central',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    text: 'Depois de 20 anos no ministério, este curso me mostrou um Jesus que eu achava conhecer, mas que ainda tinha muito a descobrir. A jornada acadêmica e espiritual propostas pelos professores é simplesmente transformadora. Recomendo de olhos fechados!',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que dizem{' '}
            <span className="text-orange-500">nossos alunos</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Histórias reais de transformação e sucesso profissional
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all cursor-pointer"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="flex gap-1 mb-4 md:mb-6"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.4 + index * 0.15 + i * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
                  </motion.div>
                ))}
              </motion.div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic text-sm md:text-base">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 md:w-14 h-12 md:h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs md:text-sm text-orange-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}