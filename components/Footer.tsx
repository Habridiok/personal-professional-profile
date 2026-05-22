import { profile } from "@/data/profile";
import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-background-border bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm font-mono">
          © {year}{" "}
          <span className="text-text-secondary">{profile.name}</span>
        </p>

        <ul className="flex items-center gap-4">
          {profile.social.map(({ platform, url, label }) => (
            <li key={platform}>
              <a
                href={url}
                target={platform === "email" ? undefined : "_blank"}
                rel={platform === "email" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="block text-text-muted hover:text-accent transition-colors"
              >
                <SocialIcon platform={platform} className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
