import { profile, type Project } from "@/data/profile";

const statusStyle: Record<Project["status"], string> = {
  completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "in-progress": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  archived: "text-text-muted bg-background-border/20 border-background-border",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="group flex flex-col bg-background-card border border-background-border rounded-2xl overflow-hidden hover:border-accent/40 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(6,182,212,0.1)] transition-all duration-300 animate-enter-up motion-reduce:animate-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <span
            className={`shrink-0 px-2.5 py-0.5 text-xs font-mono border rounded-full capitalize ${statusStyle[project.status]}`}
          >
            {project.status.replace("-", " ")}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-accent-muted/20 border border-accent/15 text-accent text-xs font-mono rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-1 border-t border-background-border">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors duration-200 pt-4"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors duration-200 pt-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-enter-up motion-reduce:animate-none">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Projects</h2>
          <p className="text-text-muted text-sm font-mono mt-3 max-w-md mx-auto">
            All projects are proprietary work built during my time at{" "}
            <span className="text-accent">Blibli.com</span>. Source code is not publicly available.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
