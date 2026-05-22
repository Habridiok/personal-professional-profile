import { profile } from "@/data/profile";

/** Expects "YYYY-MM" or "present" per ExperienceItem contract. */
function formatDate(date: string | "present") {
  if (date === "present") return "Present";
  const [year, month] = date.split("-").map(Number);
  if (!year || !month) return date;
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background-secondary scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-enter-up motion-reduce:animate-none">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-background-border" />

          <div className="space-y-10">
            {profile.experience.map((item, i) => (
              <div
                key={`${item.company}-${item.startDate}`}
                className="relative pl-12 sm:pl-16 animate-enter-left motion-reduce:animate-none"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="absolute left-2.5 sm:left-4 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background-secondary" />

                <div className="bg-background-card border border-background-border rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">{item.role}</h3>
                      <p className="text-accent font-semibold text-sm">{item.company}</p>
                    </div>
                    <span className="font-mono text-xs text-text-muted whitespace-nowrap pt-0.5">
                      {formatDate(item.startDate)} — {formatDate(item.endDate)}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>

                  <ul className="space-y-2 mb-5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-sm text-text-secondary">
                        <span className="text-accent mt-0.5 shrink-0 leading-none">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-accent-muted/30 border border-accent/20 text-accent text-xs font-mono rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
