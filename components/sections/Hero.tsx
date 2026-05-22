import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] animate-pulse motion-reduce:animate-none" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-pulse motion-reduce:animate-none"
          style={{ animationDelay: "1.5s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[80px] animate-pulse motion-reduce:animate-none"
          style={{ animationDelay: "0.75s", animationDuration: "5s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="font-mono text-accent text-sm sm:text-base tracking-widest uppercase mb-4 block animate-enter-up"
          style={{ animationDelay: "0s" }}
        >
          Hello, I&apos;m
        </span>

        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-text-primary mb-4 leading-tight animate-enter-up"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.name}
        </h1>

        <p
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-6 animate-enter-up"
          style={{ animationDelay: "0.3s" }}
        >
          {profile.title}
        </p>

        <p
          className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-enter-up"
          style={{ animationDelay: "0.45s" }}
        >
          {profile.tagline}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-enter-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent hover:bg-accent-dark text-background font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent/50 text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-enter-in"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent animate-scale-y-pulse motion-reduce:animate-none"
        />
      </div>
    </section>
  );
}
