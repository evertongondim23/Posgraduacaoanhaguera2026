import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Qual o principal objetivo do curso?',
    answer: 'O objetivo é ir além dos clichês e das respostas prontas. Partimos da pergunta “De qual Jesus estamos falando?” para oferecer uma jornada de aprofundamento acadêmico e espiritual. O curso fornece ferramentas críticas, históricas e teológicas para que você possa navegar pela complexidade de imagens de Jesus na cultura, na mídia e nas religiões, e construir uma compreensão mais profunda e pessoal.'
  },
  {
    question: 'Este curso é de qual religião ou denominação?',
    answer: 'Nenhuma. Nosso compromisso é com a excelência acadêmica e a busca aberta pela verdade, não com uma única denominação. É um espaço de diálogo respeitoso, onde diferentes tradições e pontos de vista se encontram. Nossos professores, embora tenham suas próprias trajetórias espirituais, atuam aqui como pesquisadores e facilitadores do conhecimento.'
  },
  {
    question: 'O curso vai confrontar ou desafiar a minha fé?',
    answer: 'O curso foi desenhado para aprofundar e enriquecer, não para diminuir. Acreditamos que uma fé madura não teme as perguntas. Ao investigar as origens, os contextos e as diversas interpretações, você ganhará uma base mais sólida e uma perspectiva mais ampla para sua própria jornada espiritual, seja ela qual for.'
  },
  {
    question: 'O curso é mais focado em Teologia ou em temas contemporâneos?',
    answer: 'Os dois estão intrinsecamente ligados. Usamos o rigor da Teologia, da História e da Filosofia como lentes para analisar o mundo contemporâneo. Você estudará desde os textos bíblicos e o Jesus histórico até o impacto de suas ideias na sociedade, na cultura, na ética e nos debates atuais.'
  },
  {
    question: 'Preciso ter formação em Teologia para fazer o curso?',
    answer: 'Não. O curso é destinado a concluintes do ensino superior de qualquer área do conhecimento que tenham interesse no tema, seja por motivações acadêmicas, profissionais ou pessoais.'
  },
  {
    question: 'Sou católico/evangélico. Este curso serve para mim?',
    answer: 'Sim. O curso é um excelente espaço para aprofundar o conhecimento sobre as raízes da sua própria fé de uma maneira acadêmica e aberta. Você terá a oportunidade de dialogar com outras perspectivas e enriquecer sua compreensão sobre Jesus e o Cristianismo.'
  },
  {
    question: 'Não faço parte de nenhuma igreja. Este curso é para mim?',
    answer: 'Com certeza. Se você se considera um “buscador” ou alguém que se interessa por espiritualidade de uma forma mais livre, este curso é um porto seguro. Ele oferece conteúdo denso e reflexões profundas sem a necessidade de adesão a uma doutrina específica.'
  },
{
    question: 'Como são as aulas? O curso é 100% online?',
    answer: 'Sim, o curso é 100% online para que você estude com total flexibilidade. A metodologia inclui videoaulas gravadas, material de leitura autoral e curado (artigos, capítulos de livros), podcasts e outros recursos. Todo o conteúdo fica disponível no Ambiente Virtual de Aprendizagem (AVA) para você acessar quando e onde quiser.'
  },
  {
    question: 'Qual a duração e a carga horária do curso de Pós-Graduação?',
    answer: 'A Pós-Graduação completa tem uma carga horária total de 360 horas, distribuídas em 10 disciplinas. A duração prevista para conclusão é de 12 meses.'
  },
  {
    question: 'Terei suporte ou tutoria se tiver dúvidas?',
    answer: 'Sim. Haverá interação via tutoria para o esclarecimento de dúvidas pedagógicas sobre o conteúdo das disciplinas. O contato será disponibilizado dentro do seu ambiente de estudos.'
  },
  {
    question: ' O certificado da Pós-Graduação é reconhecido pelo MEC?',
    answer: 'Sim. O certificado de conclusão da Pós-Graduação é emitido pela Anhanguera, uma Instituição de Ensino Superior reconhecida pelo MEC, e é válido em todo o território nacional, em conformidade com a resolução CNE/CES n.º 1, de 6 de abril de 2018.'
  },
  {
    question: ' Quem são os professores do curso?',
    answer: 'Nosso corpo docente é formado por professores que são referência em suas áreas, com vasta experiência acadêmica e publicações relevantes. Você pode conhecer o perfil e as credenciais de cada um na seção “Professores” do nosso site.'
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-orange-500">Frequentes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Tire suas dúvidas sobre o curso
          </p>
        </motion.div>
        
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left transition-colors min-h-[56px]"
              >
                <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-5 text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}