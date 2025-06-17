import { Badge } from "./ui/badge";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  description?: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="space-y-8">
      {education.map((item, index) => (
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
            {index !== education.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-teal-500/30 to-transparent group-hover:from-emerald-400 group-hover:via-teal-400 transition-all duration-500"></div>
            )}

            {/* Timeline dot with glow effect */}
            <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/50 group-hover:scale-125 transition-all duration-300 z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-1 bg-white rounded-full opacity-80"></div>
            </div>

            {/* Education card */}
            <div className="ml-12 relative overflow-hidden">
              {/* Glass morphism background */}
              <div className="relative bg-adaptive rounded-2xl p-8 transition-all duration-500 shadow-2xl hover:shadow-3xl group-hover:shadow-emerald-500/10">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      {/* Institution and degree */}
                      <div className="space-y-2 flex-1">
                        <h3 className="text-2xl font-bold text-adaptive-heading transition-all duration-500">
                          {item.institution}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3">
                          <Badge
                            variant="secondary"
                            className="px-4 py-2 text-sm font-medium bg-adaptive text-adaptive-accent hover:border-emerald-400/50 hover:scale-105 transition-all duration-300"
                          >
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M22 22H2l3-10h14l3 10z"
                              />
                            </svg>
                            {item.degree}
                          </Badge>

                          {/* Status indicator */}
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-adaptive-accent">
                              Completado
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Decorative icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
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
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Period and location */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-adaptive">
                      <div className="flex items-center gap-2">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-lg flex items-center justify-center">
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
                          {item.period}
                        </span>
                      </div>

                      {item.location && (
                        <>
                          <span className="hidden sm:inline text-adaptive-accent">
                            •
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center">
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
                              {item.location}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Decorative line */}
                  <div className="relative">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute inset-0 h-px bg-gradient-to-r from-emerald-400/60 via-teal-400/60 to-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-adaptive-accent flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        Descripción
                      </h4>
                      <div className="group/desc hover:bg-white/5 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-emerald-400/20">
                        <p className="text-adaptive leading-relaxed group-hover/desc:text-adaptive-heading transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Academic achievements indicators */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-medium text-adaptive-accent">
                        Licenciatura
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30">
                      <svg
                        className="w-4 h-4 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      <span className="text-xs font-medium text-adaptive-accent">
                        Ciencias de la Computación
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-40"></div>
                <div className="absolute top-1/3 right-8 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-bounce opacity-50"></div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-teal-400/0 to-cyan-400/0 group-hover:from-emerald-400/8 group-hover:via-teal-400/8 group-hover:to-cyan-400/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Card hover glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-teal-400/0 to-cyan-400/0 group-hover:from-emerald-400/10 group-hover:via-teal-400/10 group-hover:to-cyan-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 ml-12"></div>
        </div>
      ))}
    </div>
  );
}
