import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email",
      detail: "contato@camarize.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Localização",
      detail: "Registro, SP"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Telefone",
      detail: "+55 (13) 99656-6700"
    }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setStatus('idle');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1kruw8j';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_i5g337q';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'nyjLCsUaKE-Rjhi8Y';

    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      publicKey
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section id="contato" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Entre em Contato
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"
          />
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-12 md:w-2/5 text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
              <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">{info.title}</p>
                      <p className="font-semibold">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16">
              <h4 className="text-white/80 text-sm font-medium mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/projeto_camarize?igsh=ZzBpM2dkbHl1Mmhu" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-12 md:w-3/5 bg-gray-50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Envie uma mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Nome Completo</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white disabled:opacity-50"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">E-mail</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white disabled:opacity-50"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Mensagem</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white resize-none disabled:opacity-50"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <div className="relative pb-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
                
                <div className="absolute bottom-0 left-0 w-full">
                  {status === 'success' && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-medium text-center text-sm">
                      Mensagem enviada com sucesso!
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-600 font-medium text-center text-sm">
                      Erro ao enviar. Tente novamente.
                    </motion.p>
                  )}
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
