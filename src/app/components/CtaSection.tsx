import { useState } from 'react';
import { Mail, User, Phone, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import bgImage from 'figma:asset/2c9653a4da3db2d41980503dff4768b80b396f33.png';

const LEAD_EMAIL = 'pos.teologia.anhanguera@gmail.com';

export function CtaSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          graduacao: formData.course === 'sim' ? 'Sim, concluiu a graduação' : 'Não concluiu a graduação',
          _subject: 'Novo lead — Pós-Graduação em Teologia',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', course: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Não foi possível enviar. Tente novamente em instantes.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section id="inscricao" className="py-10 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-orange-600/90"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            Garanta sua vaga agora!
          </h2>
          <p className="text-base md:text-lg text-orange-100">
            Invista na compreensão que informa e liberta.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-base"
                  placeholder="Digite seu nome completo"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-base"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-base"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                Curso de Interesse
              </label>
              <div className="relative">
                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-white text-base"
                >
                  <option value="">Você já concluiu a graduação?</option>
                  <option value="sim">Sim!</option>
                  <option value="nao">Não!</option>
              
                </motion.select>
              </div>
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting || submitted}
              whileHover={isSubmitting || submitted ? undefined : { scale: 1.03, y: -3 }}
              whileTap={isSubmitting || submitted ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white font-bold py-4 md:py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl relative overflow-hidden text-base md:text-lg"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">
                {isSubmitting
                  ? 'Enviando...'
                  : submitted
                    ? 'Enviado com sucesso!'
                    : 'Quero receber informações'}
              </span>
            </motion.button>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
            
            <p className="text-xs text-gray-500 text-center">
              Ao enviar este formulário, você concorda em receber comunicações da Anhanguera.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}