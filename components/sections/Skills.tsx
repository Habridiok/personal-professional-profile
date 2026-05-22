import { profile, skillCategoryLabel, type Skill, type SkillCategory } from "@/data/profile";

const CATEGORY_ORDER: SkillCategory[] = [
  "language",
  "framework",
  "database",
  "devops",
  "cloud",
  "other",
];

const levelRing: Record<Skill["level"], string> = {
  beginner: "border-text-muted/60 text-text-muted",
  intermediate: "border-accent/50 text-accent/80",
  advanced: "border-accent text-accent",
  expert: "border-accent-light text-accent-light",
};

const levelDot: Record<Skill["level"], string> = {
  beginner: "bg-text-muted/60",
  intermediate: "bg-accent/70",
  advanced: "bg-accent",
  expert: "bg-accent-light",
};

const LEVELS = ["beginner", "intermediate", "advanced", "expert"] as const;

export default function Skills() {
  const grouped = profile.skills.reduce<Partial<Record<SkillCategory, Skill[]>>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category]!.push(skill);
    return acc;
  }, {});

  const categories = CATEGORY_ORDER.filter((cat) => grouped[cat]?.length);

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-enter-up motion-reduce:animate-none">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">What I Work With</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => (
            <div
              key={category}
              className="bg-background-card border border-background-border rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300 animate-enter-up motion-reduce:animate-none"
              style={{ animationDelay: `${catIdx * 0.08}s` }}
            >
              <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-4 pb-3 border-b border-background-border">
                {skillCategoryLabel[category]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {grouped[category]!.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium cursor-default transition-transform duration-150 hover:-translate-y-0.5 hover:scale-105 ${levelRing[skill.level]}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${levelDot[skill.level]}`} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Level legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {LEVELS.map((level) => (
            <span key={level} className="flex items-center gap-2 text-xs font-mono text-text-muted">
              <span className={`w-2 h-2 rounded-full ${levelDot[level]}`} />
              <span className="capitalize">{level}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
