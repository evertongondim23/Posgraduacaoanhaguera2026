import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const modules = [
  {
    title: 'Jesus Histórico e Contextos',
    topics: [
      'Contexto histórico da Palestina do século I',
      'Fontes históricas sobre Jesus (canônicas e extra-bíblicas)',
      'Métodos de pesquisa histórico-crítica',
      'Jesus no judaísmo do segundo templo'
    ]
  },
  {
    title: 'Cristologias e Interpretações',
    topics: [
      'Diferentes imagens de Jesus ao longo da história',
      'Cristologia dos evangelhos e tradições paulinas',
      'Jesus na teologia contemporânea',
      'Hermenêutica e interpretação dos textos sagrados'
    ]
  },
  {
    title: 'Jesus e a Cultura Contemporânea',
    topics: [
      'Apropriações culturais e políticas de Jesus',
      'Jesus nos movimentos sociais e na libertação',
      'Diálogo inter-religioso e ecumenismo',
      'Desconstruindo estereótipos e clichês'
    ]
  },
  {
    title: 'Integração Acadêmica-Espiritual',
    topics: [
      'Espiritualidade e rigor acadêmico',
      'Metodologia de pesquisa teológica',
      'Projeto de pesquisa integrador',
      'Práticas contemplativas e estudo crítico'
    ]
  }
];

export function ProgramSection() {
  return (
    <section id="programa" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            PROGRAMA DO CURSO
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conteúdo que prepara você para{' '}
            <span className="text-orange-500">desafios reais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Módulos estruturados com metodologia comprovada e aplicação prática imediata
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold"
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">
                  {module.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {module.topics.map((topic, topicIndex) => (
                  <motion.li 
                    key={topicIndex} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + topicIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{topic}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a 
            href="#inscricao"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Quero me inscrever agora</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}