import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };

    window.addEventListener('mousemove', updatePosition);
    const interval = setInterval(updateTrail, 16);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearInterval(interval);
    };
  }, [position]);

  return (
    <>
      <div
        className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.8)',
        }}
      />
      <div
        className="fixed w-8 h-8 border-2 border-cyan-400/50 rounded-full pointer-events-none z-[9999] transition-all duration-200"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
