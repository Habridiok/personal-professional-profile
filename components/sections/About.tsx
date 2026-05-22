import Image from "next/image";
import { profile } from "@/data/profile";

function computeStats() {
  const now = new Date();

  const validDates = profile.experience
    .map((job) => {
      const parts = job.startDate.split("-").map(Number);
      if (parts.length < 1 || parts.some(isNaN)) return null;
      const [y, m = 1, d = 1] = parts;
      if (y === undefined) return null;
      return new Date(y, m - 1, d);
    })
    .filter((d): d is Date => d !== null && isFinite(d.getTime()));

  let yearsValue = "0+";
  if (validDates.length > 0) {
    const firstStart = validDates.reduce((earliest, d) => (d < earliest ? d : earliest));
    const totalMonths =
      (now.getFullYear() - firstStart.getFullYear()) * 12 +
      (now.getMonth() - firstStart.getMonth());
    yearsValue = `${Math.max(0, Math.round(totalMonths / 12))}+`;
  }

  return [
    { label: "Years Experience", value: yearsValue },
    { label: "Projects Built", value: `${profile.projects.length}+` },
    { label: "Technologies", value: `${profile.skills.length}+` },
  ];
}

export default function About() {
  const stats = computeStats();

  return (
    <section id="about" className="py-24 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-enter-up motion-reduce:animate-none">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div
            className="flex justify-center animate-enter-left motion-reduce:animate-none"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-accent/40 rounded-br-2xl pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl pointer-events-none" />
            </div>
          </div>

          {/* Bio + stats */}
          <div>
            <div
              className="space-y-4 mb-8 animate-enter-right motion-reduce:animate-none"
              style={{ animationDelay: "0.2s" }}
            >
              {profile.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-text-secondary text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-background-card border border-background-border rounded-xl p-4 text-center animate-enter-up motion-reduce:animate-none"
                  style={{ animationDelay: `${0.35 + i * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-text-muted mt-1 font-mono leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {profile.resumeUrl && (
              <div
                className="mt-8 animate-enter-up motion-reduce:animate-none"
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-accent/50 text-accent hover:bg-accent/10 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Download Resume
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
