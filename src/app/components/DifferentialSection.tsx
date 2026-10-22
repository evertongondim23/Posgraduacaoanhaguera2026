import { motion } from 'motion/react';
import backgroundImage from 'figma:asset/f097e6360e6c6c03feb76bc1c3988755da647c7b.png';

const differentials = [
  {
    number: '01',
    title: 'PERSPECTIVA ACADÊMICA E ABERTA',
    description: 'Nosso compromisso é com o rigor intelectual, livre de amarras denominacionais. Aqui, diferentes tradições dialogam em um ambiente de respeito e busca pela verdade.'
  },
  {
    number: '02',
    title: 'UMA ESPIRITUALIDADE PARA O NOSSO TEMPO',
    description: 'Mais que um curso, uma proposta de aprofundamento. Pensamos nas inquietações do mundo atual para encontrar um Jesus humano, acessível e transformador, como ponto de encontro da fé em construção.'
  },
  {
    number: '03',
    title: 'CORPO DOCENTE DE REFERÊNCIA',
    description: 'Aprenda com docentes que são referência e vivem o que ensinam, com sensibilidade aguçada para as questões do mundo contemporâneo.'
  }
];

const journeyCards = [
  {
    number: '01',
    title: 'Ambientação',
    description: 'Ensino a distância: características desta modalidade de estudo. A tecnologia e o ensino a distância: da Educação da Ensino a Distância no Brasil. Aspectos relacionados ao perfil no Ensino à Distância'
  },
  {
    number: '02',
    title: 'Jesus: Aproximações Históricas',
    description: 'Estudo de Jesus histórico a partir de abordagens historiográficas e fontes primárias, considerando os contextos socioculturais e culturais do século I. Visa compreender as complexidades da vida e mensagem de Jesus dentro de seu ambiente, iluminando as bases para uma reflexão mais profunda sobre sua duradoura relevância.'
  },
  {
    number: '03',
    title: 'O Antigo Testamento em Perspectiva Cristã',
    description: 'Estudo do Antigo Testamento a partir da pessoa de Cristo, procurando entender como certos textos, narrativas, figuras e a sabedoria do Antigo Testamento prefiguram e encontram seu cumprimento em Jesus Cristo à luz da tradição cristã.'
  },
  {
    number: '04',
    title: 'Espiritualidade: Seguindo o Evangelho',
    description: 'Estudo da espiritualidade cristã à luz das boas-novas de Jesus no Novo Testamento, focando na prática de seguimento de Jesus, sua vivência do Reino de Deus e as implicações humano-espirituais de suas palavras e ações.'
  },
  {
    number: '05',
    title: 'Cristianismo e Ocidente Cristão',
    description: 'Esta disciplina explora a trajetória do cristianismo desde suas origens, analisando sua inserção e desenvolvimento em meio às religiões antigas e sua complexa relação com o Império Romano. Aborda a formação e consolidação do Ocidente sob a influência cristã, culminando na análise dos processos de secularização que moldaram o Ocidente Cristão na contemporaneidade.'
  },
  {
    number: '06',
    title: 'O Evangelho do Cristo Cósmico',
    description: 'Estudo do Evangelho de Cristo enquanto força criativa, ativa e empresente no cosmo, transcendente à história e ao tempo, não apenas Salvador humano, mas fonte de vida, criação e reconciliação do universo todo. Ênfase no místico fundado nas apóstolos João e Paulo, e na teologia cósmica de Teilhard de Chardin, Leonardo Boff e Richard Rohr.'
  },
  {
    number: '07',
    title: 'O Mundo Contemporâneo',
    description: 'Estudo aprofundado do mundo contemporâneo a partir das análises críticas do teólogo coreano-germano Byung-Chul Han, que aborda as transformações sociais, culturais e psicológicas do século XXI. Ênfase nas noções de "sociedade do paliativos", "do cansaço", "do desempenho", e na necessidade de uma "vita contemplativa".'
  },
  {
    number: '08',
    title: 'Novos Caminhos para a Fé',
    description: 'Estudo de alternativas para a vivência da fé cristã dentro de formas religiosas tradicionais, considerando novas formas de espiritualidade e de ser igreja no mundo, e os desafios para um cristianismo que se cria à luz dos ensinamentos de Jesus da Nazaré.'
  }
];

export function DifferentialSection() {
  return (
    <section className="relative bg-gradient-to-br from-white to-orange-50 overflow-hidden py-10 md:py-16 lg:py-24">
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
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] text-gray-600 mb-3 md:mb-4 uppercase">
            Nosso Diferencial
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Uma formação para a
            <br />
            <span className="text-orange-500">Mente e para o Espírito</span>
          </h2>
        </motion.div>

        {/* Grid Layout - 3 cards horizontally */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {differentials.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                rotate: 1,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative bg-white p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-orange-500 hover:border-orange-600"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 96%, 98% 98%, 95% 96%, 92% 98%, 88% 97%, 85% 99%, 80% 97%, 75% 98%, 70% 96%, 65% 98%, 60% 97%, 55% 99%, 50% 97%, 45% 98%, 40% 96%, 35% 98%, 30% 97%, 25% 99%, 20% 97%, 15% 98%, 10% 96%, 5% 98%, 2% 97%, 0 99%)',
                boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.1)',
              }}
            >
              {/* Animated Border Effect */}
              <motion.div
                className="absolute inset-0 border-4 border-orange-400 opacity-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 96%, 98% 98%, 95% 96%, 92% 98%, 88% 97%, 85% 99%, 80% 97%, 75% 98%, 70% 96%, 65% 98%, 60% 97%, 55% 99%, 50% 97%, 45% 98%, 40% 96%, 35% 98%, 30% 97%, 25% 99%, 20% 97%, 15% 98%, 10% 96%, 5% 98%, 2% 97%, 0 99%)',
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Number */}
              <div className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-orange-500 mb-3 md:mb-4 leading-none">
                {item.number}
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-3 md:mb-4 tracking-wide">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Journey Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Construa sua Jornada de{' '}
            <span className="text-orange-500">Conhecimento</span>
          </h2>
        </motion.div>

        {/* Grid Layout - 4 cards horizontally */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-10">
          {journeyCards.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                rotate: 1,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative bg-white p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-orange-500 hover:border-orange-600"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 96%, 98% 98%, 95% 96%, 92% 98%, 88% 97%, 85% 99%, 80% 97%, 75% 98%, 70% 96%, 65% 98%, 60% 97%, 55% 99%, 50% 97%, 45% 98%, 40% 96%, 35% 98%, 30% 97%, 25% 99%, 20% 97%, 15% 98%, 10% 96%, 5% 98%, 2% 97%, 0 99%)',
                boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.1)',
              }}
            >
              {/* Animated Border Effect */}
              <motion.div
                className="absolute inset-0 border-4 border-orange-400 opacity-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 96%, 98% 98%, 95% 96%, 92% 98%, 88% 97%, 85% 99%, 80% 97%, 75% 98%, 70% 96%, 65% 98%, 60% 97%, 55% 99%, 50% 97%, 45% 98%, 40% 96%, 35% 98%, 30% 97%, 25% 99%, 20% 97%, 15% 98%, 10% 96%, 5% 98%, 2% 97%, 0 99%)',
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Number */}
              <div className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-orange-500 mb-3 md:mb-4 leading-none">
                {item.number}
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-3 md:mb-4 tracking-wide">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}