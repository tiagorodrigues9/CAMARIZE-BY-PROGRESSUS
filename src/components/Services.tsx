import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'p62S2BagXLk';

  const services = [
    {
      title: "1. Qualidade Superior",
      description: "Melhorar a qualidade do camarão produzido em cativeiro, tornando-o mais requintado e adequado para fins gastronômicos.",
      img: "/imgs/camarao.png"
    },
    {
      title: "2. Monitoramento Inteligente",
      description: "Aumentar a eficiência e produtividade através da utilização de tecnologia para monitorar e otimizar o ambiente de cultivo.",
      img: "/imgs/monitoramento.png"
    },
    {
      title: "3. Sustentabilidade",
      description: "Promover práticas sustentáveis na produção de camarões, reduzindo o impacto ambiental e garantindo viabilidade a longo prazo.",
      img: "/imgs/sustentabilidade.png"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white relative border-t-4 border-transparent" style={{ borderImage: 'linear-gradient(to right, #e74c3c, #ff6b6b) 1' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Apresentamos o <strong className="text-primary font-bold">CAMARIZE</strong>: Um sistema de monitoramento contínuo por sensores especializados e alimentação automatizada
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] mb-20 group"
        >
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          <div className="relative z-10 m-[3px] rounded-[calc(1.5rem-3px)] overflow-hidden bg-black aspect-video">
            {isPlaying ? (
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                allow="autoplay; encrypted-media" 
                allowFullScreen
                className="w-full h-full border-0"
                title="Pitch Camarize 2025"
              ></iframe>
            ) : (
              <>
                <img
                  src="/imgs/video-thumbnail.png"
                  alt="Thumbnail do vídeo Pitch Camarize 2025"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/10 transition-all duration-300"
                  role="button"
                  aria-label="Reproduzir vídeo Pitch Camarize 2025"
                >
                  <svg className="w-[68px] h-[48px] drop-shadow-2xl transition-transform duration-300 hover:scale-110" viewBox="0 0 68 48">
                    <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00" />
                    <path d="M45 24L27 14v20" fill="#fff" />
                  </svg>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* System Screens Showcase */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Conheça o Sistema
          </motion.h3>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-12"
          />

          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {[
              { title: "Cadastre seus cativeiros", img: "/imgs/tela_inicio.png" },
              { title: "Verifique os parâmetros", img: "/imgs/tela_parametros.png" },
              { title: "Controle seus sensores", img: "/imgs/tela_sensores.png" },
              { title: "Veja suas solicitações", img: "/imgs/tela_solicitacoes.png" },
            ].map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{screen.title}</span>
                </h4>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)] transition-all duration-500 group-hover:-translate-y-1">
                  <div className="aspect-video w-full">
                    <img
                      src={screen.img}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top block"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-10 h-10 object-contain filter brightness-0 invert transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
