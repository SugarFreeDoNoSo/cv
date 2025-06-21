import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

interface LazyPageProps {
  children: JSX.Element | JSX.Element[];
  delay?: number; // animation delay in seconds
}

export default function LazyPage({ children, delay = 0 }: LazyPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center snap-start">
      {isVisible && (
        <div className="w-full animate-slide-up" style={{ animationDelay: `${delay}s` }}>
          {children}
        </div>
      )}
    </div>
  );
}
