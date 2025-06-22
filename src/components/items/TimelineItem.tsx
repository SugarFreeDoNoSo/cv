import type { JSX } from "preact";

interface TimelineItemProps {
  index: number;
  showLine: boolean;
  lineGradient: string;
  dotGradient: string;
  pingGradient: string;
  glowGradient: string;
  children: JSX.Element | JSX.Element[];
}

export default function TimelineItem({
  index,
  showLine,
  lineGradient,
  dotGradient,
  pingGradient,
  glowGradient,
  children,
}: TimelineItemProps) {
  return (
    <div
      className="group relative"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative">
        {showLine && (
          <div
            className={`absolute left-6 top-16 bottom-0 w-px ${lineGradient}`}
          ></div>
        )}
        <div
          className={`absolute left-4 top-8 w-4 h-4 ${dotGradient} rounded-full shadow-lg   transition-all duration-300 z-10`}
        >
          <div
            className={`absolute inset-0 ${pingGradient} rounded-full animate-ping opacity-20`}
          ></div>
          <div className="absolute inset-1 bg-white rounded-full opacity-80"></div>
        </div>
        <div className="ml-12 relative overflow-hidden">{children}</div>
      </div>
      <div
        className={`absolute inset-0 ${glowGradient} rounded-2xl blur-xl opacity-0  transition-all duration-700 -z-10 ml-12`}
      ></div>
    </div>
  );
}
