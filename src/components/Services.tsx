import { motion } from 'framer-motion';

export default function Services() {
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
            <iframe 
              src="https://www.youtube.com/embed/GYlyskTQx1Y?si=c24corFxuml3ESWr&rel=0&modestbranding=1&showinfo=0&border=0&wmode=transparent" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              className="w-full h-full border-0"
              title="Pitch Camarize 2025"
            ></iframe>
          </div>
        </motion.div>

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
