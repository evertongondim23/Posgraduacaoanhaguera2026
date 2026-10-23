import { motion } from 'motion/react';
import { Video } from 'lucide-react';

interface VideoSectionProps {
  videoUrl?: string;
  title?: string;
  description?: string;
}

function getEmbedUrl(url: string) {
  if (url.includes('youtube.com/watch')) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes('vimeo.com/')) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
    return `https://player.vimeo.com/video/${videoId}`;
  }
  return url;
}

function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative">
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
        <iframe
          src={src}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl -z-10 blur-xl" />
    </div>
  );
}

export function VideoSection({ 
  videoUrl = "https://youtu.be/gFkmUL-Yv9s?si=Y2TllXPpvf46v4u7",
  title = "Conheça Nossa Pós-Graduação",
  description = "Assista ao vídeo e descubra como este curso pode transformar sua jornada acadêmica e espiritual.",
}: VideoSectionProps) {
  const embedUrl = getEmbedUrl(videoUrl);
  const conversationUrl = getEmbedUrl('https://youtu.be/MT7zJADCGgA');

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1676115388797-5f448ad78e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYmlibGljYWwlMjBzY3JvbGwlMjBwYXJjaG1lbnR8ZW58MXx8fHwxNzY4MjQ1NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Video className="w-10 h-10 text-orange-500" />
            </motion.div>
            <p className="text-sm tracking-[0.3em] text-gray-600 uppercase">
              Vídeo de Apresentação
            </p>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VideoEmbed src={embedUrl} title={title} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center mt-16 mb-8"
        >
          <p className="text-sm tracking-[0.3em] text-gray-600 uppercase mb-3">
            Conversas
          </p>
          <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Jesus de Nazaré: Ternura, Mistério e Subversão
          </h3>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Parte 1 de uma série de conversas sobre o livro (São Só Ideias, 2026), pelos professores Mariana Schietti e Jonathan Menezes (autor do livro).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VideoEmbed
            src={conversationUrl}
            title="Parte 1 — Jesus de Nazaré: Ternura, Mistério e Subversão, com Mariana Schietti e Jonathan Menezes"
          />
        </motion.div>

        {/* Bottom CTA (opcional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#inscricao"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Quero Me Inscrever Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}