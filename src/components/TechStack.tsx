import { Code2, Server, Cloud, Database, Wrench } from 'lucide-react';
import { useFadeIn } from '../hooks/useScrollAnimation';

const skills = [
  { category: 'Frontend', icon: Code2, skills: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
  ]},
  { category: 'Backend', icon: Server, skills: [
    { name: 'Node.js', level: 93 },
    { name: 'Python', level: 88 },
    { name: 'Go', level: 80 },
    { name: 'GraphQL', level: 87 },
  ]},
  { category: 'Cloud & DevOps', icon: Cloud, skills: [
    { name: 'AWS', level: 90 },
    { name: 'Docker', level: 92 },
    { name: 'Kubernetes', level: 85 },
    { name: 'CI/CD', level: 88 },
  ]},
  { category: 'Databases', icon: Database, skills: [
    { name: 'PostgreSQL', level: 91 },
    { name: 'MongoDB', level: 87 },
    { name: 'Redis', level: 84 },
    { name: 'Elasticsearch', level: 82 },
  ]},
  { category: 'Tools', icon: Wrench, skills: [
    { name: 'Git', level: 94 },
    { name: 'VS Code', level: 96 },
    { name: 'Figma', level: 83 },
    { name: 'Jira', level: 86 },
  ]},
];

export const TechStack = () => {
  const sectionRef = useFadeIn();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-[#0D1B2E] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F0F6FF] mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          My Arsenal
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-[#F0F6FF]">{category.category}</h3>
              </div>

              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-[#050A14]/50 backdrop-blur-xl border border-cyan-400/20 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.05)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#F0F6FF] font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                  </div>

                  <div className="relative h-2 bg-[#0D1B2E] rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
