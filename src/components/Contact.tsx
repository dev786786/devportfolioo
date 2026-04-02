import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import { useFadeIn } from '../hooks/useScrollAnimation';

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:john@example.com', label: 'Email' },
];

export const Contact = () => {
  const sectionRef = useFadeIn();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6 bg-[#050A14] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full filter blur-[128px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F0F6FF] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Let's Build Something
        </h2>
        <p className="text-center text-[#8899AA] mb-12">Have a project in mind? Let's talk about it.</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-2xl animate-float" />
                <div className="absolute inset-2 bg-[#0D1B2E] rounded-2xl flex items-center justify-center">
                  <Mail size={64} className="text-cyan-400" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[#8899AA] mb-8">
                <MapPin size={20} className="text-cyan-400" />
                <span>Available for remote & on-site roles worldwide</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-[#0D1B2E] border border-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0D1B2E] border border-cyan-400/20 rounded-lg text-[#F0F6FF] placeholder-[#8899AA] focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all duration-300"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0D1B2E] border border-cyan-400/20 rounded-lg text-[#F0F6FF] placeholder-[#8899AA] focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all duration-300"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-[#0D1B2E] border border-cyan-400/20 rounded-lg text-[#F0F6FF] placeholder-[#8899AA] focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all duration-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-violet-500 text-[#050A14] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
