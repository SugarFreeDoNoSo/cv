import { useEffect, useRef, useState } from "preact/hooks";

interface LazyPageProps {
  children: Element | Element[];
}
export default function LazyPage({ children }: LazyPageProps) {
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
      { threshold: 0.25 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-screen py-20 snap-start overflow-visible">
      {isVisible && (
        <div
          className="w-full animate-slide-up relative z-0"
          style={{ animationDelay: `0.2s` }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
