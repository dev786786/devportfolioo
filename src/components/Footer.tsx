import { useEffect, useState } from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#0D1B2E] border-t border-cyan-400/20 py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-400 rounded-full filter blur-[128px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-4">&lt;SD /&gt;</div>
              <p className="text-[#8899AA] text-sm">
                Senior Software Developer crafting exceptional digital experiences.
              </p>
            </div>

            <div>
              <h3 className="text-[#F0F6FF] font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() =>
                      document
                        .querySelector(`#${link.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="block text-[#8899AA] hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#F0F6FF] font-bold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-[#8899AA]">
                <p>john@example.com</p>
                <p>Available for freelance opportunities</p>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-400/20 pt-8 text-center">
            <p className="text-[#8899AA] text-sm flex items-center justify-center gap-2">
              Designed & built with{' '}
              <Heart
                size={16}
                className="text-red-500 animate-heartbeat"
                fill="currentColor"
              />{' '}
              by John Developer
            </p>
            <p className="text-[#8899AA] text-xs mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-full flex items-center justify-center text-[#050A14] shadow-lg hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 z-[100] ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(0.9); }
          20%, 40% { transform: scale(1.1); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
