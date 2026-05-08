import { motion } from 'framer-motion';
import { Fish, Star } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            O que é a Progressus?
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Fish className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inovação na Aquicultura</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                A <strong className="text-primary">Progressus</strong> é uma equipe dedicada a revolucionar a aquicultura na região do Vale do Ribeira. Nosso sistema, aliado ao uso de tecnologias avançadas, auxilia na produção e criação de camarões em cativeiro, automatizando a alimentação, captando e administrando os dados dos habitats.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="group bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                <Star className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualidade Superior</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nosso objetivo é elevar a qualidade e sustentabilidade da produção de camarões, criando uma espécie mais requintada, ideal para fins gastronômicos. Promovemos práticas eficientes e responsáveis na aquicultura.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl z-0"></div>
            <img 
              src="/imgs/bg_positivo.png" 
              alt="Aquicultura Sustentável" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
