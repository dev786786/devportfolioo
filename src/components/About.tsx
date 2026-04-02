import { useEffect, useRef, useState } from 'react';
import { useFadeIn } from '../hooks/useScrollAnimation';

const stats = [
  { label: 'Years Experience', value: 8 },
  { label: 'Projects Shipped', value: 50 },
  { label: 'Happy Clients', value: 20 },
  { label: 'Open Source Contributions', value: 10 },
];

export const About = () => {
  const sectionRef = useFadeIn();
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.value;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6 bg-[#050A14] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full filter blur-[128px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full bg-[#0D1B2E] flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 flex items-center justify-center text-6xl text-cyan-400">
                  JD
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F0F6FF] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              About Me
            </h2>
            <p className="text-[#8899AA] text-lg leading-relaxed mb-8">
              I'm a passionate Senior Software Developer with over 8 years of experience building
              scalable web applications and cloud infrastructure. I specialize in full-stack
              development, system architecture, and leading engineering teams to deliver
              exceptional products. My expertise spans from crafting beautiful user interfaces
              to designing robust backend systems that handle millions of requests.
            </p>

            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#0D1B2E]/50 backdrop-blur-xl border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 group"
                  style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.1)' }}
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform" style={{ fontFamily: 'DM Mono, monospace' }}>
                    {counts[index]}+
                  </div>
                  <div className="text-sm text-[#8899AA]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};
