import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Team() {
  const team = [
    {
      name: "Tiago Rodrigues",
      role: "Documentação e Artigo",
      img: "/imgs/profile_tiago.jpg",
      github: "https://github.com/tiagorodrigues9",
      instagram: "https://www.instagram.com/tlrodrigues._/",
      linkedin: "https://www.linkedin.com/in/tiagol-rodrigues?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      name: "Leandro Augusto",
      role: "IoT e Design",
      img: "/imgs/profile_leandro.jpg",
      github: "https://github.com/Leandr0-August0",
      instagram: "https://www.instagram.com/muniz_leandr0?igsh=MXhpdm9jcDEwdXI4cA==",
      linkedin: "https://www.linkedin.com/in/leandromuniz-4ab3942b5?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      name: "Davi Mathais",
      role: "Desenvolvedor Full Stack",
      img: "/imgs/profile_davi.jpg",
      github: "https://github.com/cksalmeida",
      instagram: "https://www.instagram.com/cksalmeida/",
      linkedin: "https://www.linkedin.com/in/cksalmeida/"
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative border-t-4 border-transparent" style={{ borderImage: 'linear-gradient(to right, #e74c3c, #ff6b6b) 1' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nossa Equipe
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
            Conheça os talentos por trás da Progressus!
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <img src="/imgs/progressus.png" alt="Progressus Logo" className="h-24 object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-500" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(20%-1.2rem)] bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgb(0,0,0,0.08)] border-2 border-transparent hover:border-primary hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(231,76,60,0.2)] transition-all duration-300 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between text-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-bold uppercase tracking-wide mb-4">{member.role}</p>
                </div>
                <div className="flex justify-center gap-3">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_20px_rgba(231,76,60,0.3)]">
                    <FaGithub size={18} />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_20px_rgba(231,76,60,0.3)]">
                    <FaInstagram size={18} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_20px_rgba(231,76,60,0.3)]">
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
