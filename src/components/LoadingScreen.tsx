import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#050A14] z-[10000] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold text-cyan-400 mb-8 tracking-wider">
          SD
        </div>
        <div className="w-64 h-1 bg-[#0D1B2E] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-cyan-400/60 mt-4 font-mono">{progress}%</div>
      </div>
    </div>
  );
};
