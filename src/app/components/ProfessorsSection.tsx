import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import robinsonPhoto from 'figma:asset/ac3d1f0792d577d54cc1183feda909b5cc0ddb16.png';
import jonathanPhoto from 'figma:asset/0c5c24115b867c8b17348aaac4f622ce9e299aea.png';
import marianaPhoto from 'figma:asset/dc49e4295bf3d374b5b22baacc7e99e41d66c3e4.png';
import alfredoPhoto from 'figma:asset/f5cd178ae7649e2b3b8c223f4047790ab030f624.png';
import denielPhoto from 'figma:asset/1d584bd9b2adb06b5ca46debf90a786c573b1e8c.png';
import edsonPhoto from 'figma:asset/367d2bd213f7ac788dd77243b1fa1b673afb7222.png';

const professors = [
  {
    name: 'Robinson Jacintho',
    role: 'Doutor',
    photo: robinsonPhoto,
    bio: 'Doutor em Educação pela Universidade Federal de São Paulo. Possui graduação em Administração e Teologia, com especialização em Teologia e Docência no ensino superior. É Mestre em Educação e Saúde na Infância e Adolescência, pela Universidade Federal de São Paulo (UNIFESP).'
  },
  {
    name: 'Jonathan Menezes',
    role: 'Doutor',
    photo: jonathanPhoto,
    bio: 'Doutor em História pela Universidade Estadual Paulista, UNESP–Assis. Possui graduação em História pela Universidade Estadual de Londrina, graduação em Teologia pela Faculdade Teológica Sul Americana, e mestrado em História Social pela Universidade Estadual de Londrina. Tem experiência de 18 anos atuando no Ensino Superior, na área de Teologia, com pesquisa e publicações acadêmicas na área de Teoria e Filosofia da História e História da historiografia. Autor de diversos livros, dentre eles: "Humanos, graças a Deus! Em busca de uma espiritualidade encarnada", pela editora Recriar, e "Espiritualidade em transformação: sentido, humanidade e vida", pela editora Recriar.'
  },
  {
    name: 'Mariana Schietti',
    role: 'Doutora',
    photo: marianaPhoto,
    bio: 'Doutora em Teologia, na área de concentração em Exegese e Teologia Bíblica pela PUC-PR. Possui graduação em Direito pela UNIVALI. Graduação e especialização em Teologia pela Faculdade Teológica Sul Americana. É Mestre em Teologia pela PUC-PR, na linha de Interpretação da Sagrada Escritura nas línguas originais. Autora dos livros "Missões: Pelas trilhas do mundo a caminho do Reino" pela editora Recriar, e "A CRIAÇÃO: O que é bom (tov), justo e harmônico em Gênesis" pela Fonte Editorial e Alta Books.'
  },
  {
    name: 'Alfredo dos Santos Oliva',
    role: 'Doutor',
    photo: alfredoPhoto,
    bio: 'Possui graduação em Teologia (Bacharelado) pelo Seminário Teológico Antônio de Godoy Sobrinho (1991), graduação em História (Licenciatura) pela Universidade Estadual de Londrina (1993), mestrado em Teologia pelo Seminário Teológico Batista do Norte do Brasil (1999), mestrado em Sociologia pela Universidade Federal do Ceará (2001), doutorado em História pela Universidade Estadual Paulista Júlio de Mesquita Filho (2005) e pós-doutorado em Ciências da Religião pela Universidade Metodista de São Paulo (2017). É professor associado da Universidade Estadual de Londrina, onde atua desde 2007. Tem experiência de ensino na área de História, com ênfase em Teoria da história e História das religiões, atuando principalmente nos seguintes temas: Teoria da história foucaultiana, Historiografia do cristianismo primitivo, História das Religiões na Psicologia Analítica, Sexualidades e relações gênero, Interseccionalidades, Escrita de si.'
  },
  {
    name: 'Deniel Mateus Ladeira',
    role: 'Especialista',
    photo: denielPhoto,
    bio: 'Especialista em Sociologia pela UEL. Graduado em Teologia pela FTSA. Graduado em História pela UNIFAI. Graduando em Psicanálise pela UNINTER. Tem experiência na área de Teologia, atuando principalmente nos seguintes temas: história do cristianismo, teologia contemporânea, liderança, e diálogo entre fé e cultura.'
  },
  {
    name: 'Edson Magalhães Nunes Júnior',
    role: 'Doutor',
    photo: edsonPhoto,
    bio: 'Doutor em Letras pela Universidade de São Paulo (Estudos Judaicos - Bíblia Hebraica). Pós-doutorado em Estudos Judaicos (Bíblia Hebraica) na University of California, Berkeley, sob a supervisão do Dr. Robert Alter. Atualmente, pastor da igreja cristã independente Um Lugar Comunidade. Atua na seguinte linha temática: narrativa bíblica, poesia hebraica bíblica, hebraico bíblico.'
  }
];

export function ProfessorsSection() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <GraduationCap className="w-8 md:w-10 h-8 md:h-10 text-orange-500" />
            </motion.div>
            <p className="text-xs md:text-sm tracking-[0.3em] text-gray-600 uppercase">
              Corpo Docente
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Aprenda com{' '}
            <span className="text-orange-500">Docentes</span> que são referência
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Nossos professores são pesquisadores reconhecidos, com vasta experiência acadêmica e publicações relevantes em suas áreas de atuação.
          </p>
        </motion.div>

        {/* Professors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {professors.map((professor, index) => (
            <motion.div
              key={professor.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 h-full flex flex-col"
              >
                {/* Photo Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-square"
                  >
                    <img 
                      src={professor.photo} 
                      alt={professor.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent flex items-end justify-center pb-6"
                  >
                    <Award className="w-10 md:w-12 h-10 md:h-12 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {professor.name}
                  </h3>
                  
                  {/* Bio */}
                  <p className="text-gray-600 leading-relaxed text-sm flex-1">
                    {professor.bio}
                  </p>

                  {/* Academic Icon */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-orange-500">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm font-semibold">{professor.role}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Estude com quem realmente entende do assunto e é reconhecido no meio acadêmico.
          </p>
          <motion.a
            href="#inscricao"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 md:py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            Inscreva-se Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}