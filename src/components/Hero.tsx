import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Code, Database, Cloud, Cpu } from 'lucide-react';

const titles = [
  'Senior Software Developer',
  'Full-Stack Engineer',
  'System Architect',
];

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x7c3aed,
      size: 0.02,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.x += 0.002;
      globe.rotation.y += 0.003;
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentTitle.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const techIcons = [
    { Icon: Code, position: { top: '20%', left: '10%' }, delay: 0 },
    { Icon: Database, position: { top: '60%', left: '15%' }, delay: 0.5 },
    { Icon: Cloud, position: { top: '30%', right: '10%' }, delay: 1 },
    { Icon: Cpu, position: { top: '70%', right: '15%' }, delay: 1.5 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #050A14 0%, #0D1B2E 100%)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 z-[1]" />

      {techIcons.map(({ Icon, position, delay }, index) => (
        <div
          key={index}
          className="absolute z-[2] text-cyan-400/20 animate-float"
          style={{
            ...position,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={48} />
        </div>
      ))}

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#F0F6FF]" style={{ fontFamily: 'Space Grotesk, sans-serif', textShadow: '0 0 40px rgba(0, 245, 255, 0.5)' }}>
          John Developer
        </h1>

        <div className="h-12 md:h-16 mb-8">
          <p
            className="text-2xl md:text-4xl text-cyan-400 font-mono"
            style={{ fontFamily: 'DM Mono, monospace' }}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() =>
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-[#050A14] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
            Download Resume
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
