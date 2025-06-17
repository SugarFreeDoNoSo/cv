import { Card, CardContent } from "./ui/card";

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
}

export default function ContactInfo({
  email,
  phone,
  location,
}: ContactInfoProps) {
  return (
    <Card className="w-full bg-adaptive shadow-2xl hover:shadow-3xl transition-all duration-500">
      <CardContent className="p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
          <div className="group flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-adaptive-accent font-medium uppercase tracking-wider">
                Email
              </span>
              <a
                href={`mailto:${email}`}
                className="text-adaptive hover:text-adaptive-accent font-medium transition-colors duration-300 hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="group flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-adaptive-accent font-medium uppercase tracking-wider">
                Teléfono
              </span>
              <a
                href={`tel:${phone}`}
                className="text-adaptive hover:text-adaptive-accent font-medium transition-colors duration-300 hover:underline"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="group flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <svg
                className="h-6 w-6 text-white"
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
            <div className="flex flex-col">
              <span className="text-xs text-adaptive-accent font-medium uppercase tracking-wider">
                Ubicación
              </span>
              <span className="text-adaptive font-medium">{location}</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
      </CardContent>
    </Card>
  );
}
