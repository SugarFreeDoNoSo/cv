import type { JSX } from "preact";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SectionProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export default function Section({
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <Card
      className={`w-full print-break-inside-avoid relative group hover:scale-[1.02] transition-all duration-500 ${className}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-adaptive rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>

      {/* Decorative elements */}
      <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full blur-sm opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-4">
            {/* Icon container */}
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Title */}
            <CardTitle className="text-2xl font-bold text-adaptive-heading transition-all duration-500">
              {title}
            </CardTitle>
          </div>

          {/* Decorative line */}
          <div className="relative mt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute inset-0 h-px bg-gradient-to-r from-blue-400/60 via-purple-400/60 to-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 pb-8">
          <div className="relative">
            {children}

            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/8 via-transparent to-purple-400/8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </CardContent>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-sm"></div>
    </Card>
  );
}
