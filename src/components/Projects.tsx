import { ExternalLink, Github, Star } from 'lucide-react';
import { useFadeIn } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    featured: true,
  },
  {
    title: 'AI-Powered Chat Application',
    description: 'Real-time messaging platform with AI-assisted responses, end-to-end encryption, and multi-language support.',
    tags: ['Vue.js', 'Python', 'WebSocket', 'OpenAI', 'Docker'],
    featured: false,
  },
  {
    title: 'DevOps Automation Suite',
    description: 'Comprehensive CI/CD pipeline automation tool with infrastructure as code, monitoring, and automated testing.',
    tags: ['Go', 'Kubernetes', 'Terraform', 'Prometheus', 'GitHub Actions'],
    featured: false,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Enterprise-grade analytics platform with real-time data visualization, custom reporting, and predictive analytics.',
    tags: ['React', 'D3.js', 'GraphQL', 'Redis', 'BigQuery'],
    featured: false,
  },
];

export const Projects = () => {
  const sectionRef = useFadeIn();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-[#050A14] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400 rounded-full filter blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F0F6FF] mb-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Work That Ships
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0D1B2E] rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.1)' }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-cyan-400 to-violet-500 px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-[#050A14]">Featured</span>
                </div>
              )}

              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 flex items-center justify-center">
                <span className="text-8xl font-bold text-cyan-400/30 transition-transform duration-500 group-hover:scale-110">P</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] to-transparent" />
              </div>

              <div className="absolute inset-0 bg-[#050A14]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-2xl font-bold text-[#F0F6FF] mb-3">{project.title}</h3>
                <p className="text-[#8899AA] mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-[#050A14] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-all duration-300 flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="px-4 py-2 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2">
                    <Github size={16} />
                    GitHub
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F0F6FF] mb-2">{project.title}</h3>
                <p className="text-[#8899AA] text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
