import { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';
import { useFadeIn } from '../hooks/useScrollAnimation';

const experiences = [
  {
    company: 'Tech Giants Inc.',
    role: 'Senior Software Architect',
    period: '2021 - Present',
    achievements: [
      'Led architecture redesign reducing system latency by 60%',
      'Managed team of 12 engineers across 3 continents',
      'Implemented microservices architecture serving 10M+ users',
      'Reduced infrastructure costs by 40% through optimization',
    ],
  },
  {
    company: 'Innovative Solutions Ltd.',
    role: 'Lead Full-Stack Developer',
    period: '2019 - 2021',
    achievements: [
      'Built customer-facing dashboard handling 1M+ daily transactions',
      'Introduced automated testing reducing bugs by 75%',
      'Mentored 5 junior developers to senior positions',
      'Improved deployment frequency from weekly to daily',
    ],
  },
  {
    company: 'Startup Ventures',
    role: 'Full-Stack Developer',
    period: '2017 - 2019',
    achievements: [
      'Developed MVP that secured $2M in Series A funding',
      'Implemented real-time features using WebSocket technology',
      'Optimized database queries improving response time by 50%',
      'Created CI/CD pipeline reducing deployment time by 80%',
    ],
  },
  {
    company: 'Digital Agency Co.',
    role: 'Junior Developer',
    period: '2016 - 2017',
    achievements: [
      'Contributed to 15+ client projects across various industries',
      'Developed responsive websites with 99.9% uptime',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Learned and applied best practices in agile development',
    ],
  },
];

export const Experience = () => {
  const sectionRef = useFadeIn();
  const [drawPath, setDrawPath] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawPath(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-[#0D1B2E] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-400 rounded-full filter blur-[128px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F0F6FF] mb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Experience Timeline
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400">
            <svg className="absolute inset-0 w-full h-full" style={{ left: '-2px' }}>
              <path
                ref={pathRef}
                d={`M 2 0 L 2 ${experiences.length * 400}`}
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                strokeDashoffset={drawPath ? 0 : 1000}
                style={{ transition: 'stroke-dashoffset 2s ease-out' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00F5FF" />
                  <stop offset="50%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#00F5FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
                  <div
                    className="bg-[#050A14]/50 backdrop-blur-xl border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                    style={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.1)' }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#F0F6FF]">{exp.role}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-[#8899AA] text-sm font-mono">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-[#8899AA] text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 w-8 h-8 -ml-4 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-full border-4 border-[#0D1B2E] flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-[#050A14]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
