import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface WorkExperienceItem {
  company: string;
  position: string;
  period: string;
  location?: string;
  responsibilities: string[];
  achievements?: string[];
}

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="group relative"
          style={{
            animationDelay: `${index * 200}ms`,
          }}
        >
          {/* Timeline container */}
          <div className="relative">
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent group-hover:from-blue-400 group-hover:via-purple-400 transition-all duration-500"></div>
            )}

            {/* Timeline dot with glow effect */}
            <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 group-hover:scale-125 transition-all duration-300 z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-1 bg-white rounded-full opacity-80"></div>
            </div>

            {/* Experience card */}
            <div className="ml-12 relative overflow-hidden">
              {/* Glass morphism background */}
              <div className="relative bg-adaptive rounded-2xl p-8 transition-all duration-500 shadow-2xl hover:shadow-3xl group-hover:shadow-blue-500/10">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/5 to-emerald-500/5 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      {/* Company and position */}
                      <div className="space-y-2 flex-1">
                        <h3 className="text-2xl font-bold text-adaptive-heading transition-all duration-500">
                          {experience.company}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3">
                          <Badge
                            variant="secondary"
                            className="px-4 py-2 text-sm font-medium bg-adaptive text-adaptive-accent hover:border-blue-400/50 hover:scale-105 transition-all duration-300"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                            {experience.position}
                          </Badge>

                          {/* Status indicator */}
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-adaptive-accent">
                              {index === 0 ? "Actual" : "Completado"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Decorative icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Period and location */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-adaptive">
                      <div className="flex items-center gap-2">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <line
                              x1="16"
                              y1="2"
                              x2="16"
                              y2="6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <line
                              x1="8"
                              y1="2"
                              x2="8"
                              y2="6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <line
                              x1="3"
                              y1="10"
                              x2="21"
                              y2="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-adaptive">
                          {experience.period}
                        </span>
                      </div>

                      {experience.location && (
                        <>
                          <span className="hidden sm:inline text-adaptive-accent">
                            •
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <span className="font-medium text-adaptive">
                              {experience.location}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Decorative line */}
                  <div className="relative">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute inset-0 h-px bg-gradient-to-r from-blue-400/60 via-purple-400/60 to-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-adaptive-accent flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      Responsabilidades
                    </h4>
                    <div className="space-y-3">
                      {experience.responsibilities.map(
                        (responsibility, idx) => (
                          <div
                            key={idx}
                            className="flex gap-3 group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300"></div>
                            <p className="text-adaptive leading-relaxed group-hover/item:text-adaptive-heading transition-colors duration-300">
                              {responsibility}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  {experience.achievements &&
                    experience.achievements.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-adaptive-accent flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          Logros Destacados
                        </h4>
                        <div className="space-y-3">
                          {experience.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex gap-3 group/achievement hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 p-3 rounded-lg border border-transparent hover:border-emerald-400/20 transition-all duration-300"
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mt-0.5 group-hover/achievement:scale-110 group-hover/achievement:rotate-12 transition-all duration-300">
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p className="text-adaptive leading-relaxed font-medium group-hover/achievement:text-adaptive-heading transition-colors duration-300">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
                <div className="absolute top-1/3 right-8 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-bounce opacity-50"></div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/8 group-hover:via-purple-400/8 group-hover:to-cyan-400/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Card hover glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-cyan-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 ml-12"></div>

          {/* Separator between experiences */}
          {index !== experiences.length - 1 && (
            <div className="ml-12 mt-8">
              <Separator className="bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
