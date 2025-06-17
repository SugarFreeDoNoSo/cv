import { Badge } from "./ui/badge";

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <div className="space-y-8">
      {skillCategories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="group relative"
          style={{
            animationDelay: `${categoryIndex * 150}ms`,
          }}
        >
          {/* Category container */}
          <div className="relative overflow-hidden rounded-2xl bg-adaptive p-6 transition-all duration-500">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-emerald-500/10 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>

            {/* Category header */}
            <div className="relative z-10 mb-6">
              <div className="flex items-center gap-3 mb-4">
                {/* Category icon */}
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Category title */}
                <h3 className="text-lg font-bold text-adaptive-heading transition-all duration-500">
                  {category.name}
                </h3>

                {/* Skills count badge */}
                <div className="ml-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-adaptive text-adaptive-accent group-hover:scale-105 transition-all duration-300">
                    {category.skills.length} skills
                  </span>
                </div>
              </div>

              {/* Decorative line */}
              <div className="relative">
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute inset-0 h-px bg-gradient-to-r from-blue-400/60 via-purple-400/60 to-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Skills grid */}
            <div className="relative z-10 flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item"
                  style={{
                    animationDelay: `${categoryIndex * 150 + skillIndex * 50}ms`,
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="relative group/skill px-4 py-2 text-sm font-medium bg-adaptive hover:from-blue-500/20 hover:to-purple-500/20 text-adaptive hover:border-blue-400/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-default"
                  >
                    {/* Skill text */}
                    <span className="relative z-10 group-hover/skill:text-adaptive-accent transition-colors duration-300">
                      {skill}
                    </span>

                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover/skill:from-blue-400/25 group-hover/skill:to-purple-400/25 rounded-md transition-all duration-300"></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover/skill:via-white/20 rounded-md opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover/skill:from-blue-400/20 group-hover/skill:via-purple-400/20 group-hover/skill:to-cyan-400/20 rounded-lg blur-sm opacity-0 group-hover/skill:opacity-100 transition-all duration-500 -z-10"></div>
                  </Badge>
                </div>
              ))}
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute bottom-6 left-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
            <div className="absolute top-1/2 right-8 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-bounce opacity-50"></div>
          </div>

          {/* Category hover glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-cyan-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
        </div>
      ))}
    </div>
  );
}
