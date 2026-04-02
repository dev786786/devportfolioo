import { useEffect, useRef } from 'react';
import { useFadeIn } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "John is an exceptional developer who consistently delivers high-quality solutions. His expertise in system architecture helped us scale our platform to millions of users.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "Tech Giants Inc.",
    avatar: "SJ",
  },
  {
    quote: "Working with John was a game-changer for our team. His leadership and technical skills transformed our development process and doubled our productivity.",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovative Solutions",
    avatar: "MC",
  },
  {
    quote: "John's ability to understand complex business requirements and translate them into elegant technical solutions is unmatched. A true professional.",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Startup Ventures",
    avatar: "ER",
  },
  {
    quote: "The mentorship I received from John accelerated my growth as a developer. His code reviews and guidance were invaluable to my career.",
    name: "David Kim",
    role: "Senior Developer",
    company: "Tech Giants Inc.",
    avatar: "DK",
  },
  {
    quote: "John delivered our project ahead of schedule and under budget. His attention to detail and commitment to quality exceeded all expectations.",
    name: "Lisa Anderson",
    role: "VP Engineering",
    company: "Digital Agency Co.",
    avatar: "LA",
  },
];

export const Testimonials = () => {
  const sectionRef = useFadeIn();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 px-6 bg-[#0D1B2E] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full filter blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F0F6FF] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          What People Say
        </h2>
        <p className="text-center text-[#8899AA] mb-12">Testimonials from colleagues and clients</p>

        <div ref={scrollRef} className="overflow-x-hidden whitespace-nowrap">
          <div className="inline-flex gap-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="inline-block w-96 bg-[#050A14]/50 backdrop-blur-xl border border-cyan-400/20 rounded-lg p-6"
                style={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.1)' }}
              >
                <p className="text-[#8899AA] mb-6 whitespace-normal italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-[#050A14] font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="whitespace-normal">
                    <div className="font-bold text-[#F0F6FF]">{testimonial.name}</div>
                    <div className="text-sm text-[#8899AA]">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
