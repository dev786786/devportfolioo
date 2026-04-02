import { GitFork, Star, Circle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useFadeIn } from '../hooks/useScrollAnimation';

const repos = [
  {
    name: 'awesome-react-components',
    description: 'A curated collection of production-ready React components with TypeScript support',
    stars: 2400,
    forks: 340,
    language: 'TypeScript',
    color: '#3178c6',
  },
  {
    name: 'microservices-toolkit',
    description: 'Golang toolkit for building scalable microservices with built-in observability',
    stars: 1850,
    forks: 280,
    language: 'Go',
    color: '#00ADD8',
  },
  {
    name: 'devops-automation',
    description: 'Infrastructure as Code templates and automation scripts for AWS, GCP, and Azure',
    stars: 1620,
    forks: 215,
    language: 'Python',
    color: '#3572A5',
  },
];

export const OpenSource = () => {
  const sectionRef = useFadeIn();
  const [activeSquares, setActiveSquares] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const newSquares = new Set<number>();
      const count = Math.floor(Math.random() * 20) + 10;
      for (let i = 0; i < count; i++) {
        newSquares.add(Math.floor(Math.random() * 364));
      }
      setActiveSquares(newSquares);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const weeks = 52;
  const days = 7;

  return (
    <section
      id="opensource"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-[#050A14] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full filter blur-[128px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F0F6FF] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          In the Wild
        </h2>
        <p className="text-center text-[#8899AA] mb-12">Contributing to open source and building in public</p>

        <div className="bg-[#0D1B2E]/50 backdrop-blur-xl border border-cyan-400/20 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-[#F0F6FF] mb-6 text-center">GitHub Contributions</h3>
          <div className="overflow-x-auto">
            <div className="inline-flex gap-1">
              {[...Array(weeks)].map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {[...Array(days)].map((_, dayIndex) => {
                    const index = weekIndex * days + dayIndex;
                    const isActive = activeSquares.has(index);
                    const intensity = isActive ? Math.floor(Math.random() * 4) + 1 : 0;
                    return (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-sm transition-all duration-500 ${
                          intensity === 0
                            ? 'bg-[#0D1B2E]'
                            : intensity === 1
                            ? 'bg-cyan-400/20'
                            : intensity === 2
                            ? 'bg-cyan-400/40'
                            : intensity === 3
                            ? 'bg-cyan-400/60'
                            : 'bg-cyan-400'
                        }`}
                        style={{
                          boxShadow: intensity > 0 ? '0 0 10px rgba(0, 245, 255, 0.3)' : 'none',
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <div
              key={index}
              className="bg-[#0D1B2E]/50 backdrop-blur-xl border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.1)' }}
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono">{repo.name}</h3>
              <p className="text-[#8899AA] text-sm mb-4 line-clamp-2">{repo.description}</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-[#8899AA] text-sm">
                  <Star size={16} />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1 text-[#8899AA] text-sm">
                  <GitFork size={16} />
                  <span>{repo.forks}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Circle size={12} fill={repo.color} color={repo.color} />
                <span className="text-[#8899AA] text-sm">{repo.language}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
