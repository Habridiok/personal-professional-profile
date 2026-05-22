"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import SocialIcon from "@/components/SocialIcon";

const inputClass =
  "w-full bg-background-card border border-background-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors duration-200";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your portfolio"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-24 bg-background-secondary scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-enter-up motion-reduce:animate-none">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Get In Touch</h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto leading-relaxed">
            {profile.contact.availabilityMessage}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social links */}
          <div
            className="animate-enter-left motion-reduce:animate-none"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-text-primary font-semibold mb-6">Find me on</h3>
            <div className="flex flex-col gap-3">
              {profile.social.filter((link) => link.platform !== "email").map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-background-card border border-background-border rounded-xl text-text-secondary hover:text-accent hover:border-accent/40 hover:translate-x-1 transition-all duration-200"
                >
                  <span className="text-accent"><SocialIcon platform={link.platform} /></span>
                  <span className="font-medium">{link.label}</span>
                  <svg
                    className="w-3.5 h-3.5 ml-auto opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-3 px-4 py-3 bg-background-card border border-background-border rounded-xl text-text-secondary hover:text-accent hover:border-accent/40 hover:translate-x-1 transition-all duration-200"
              >
                <span className="text-accent"><SocialIcon platform="email" /></span>
                <span className="font-medium">Email</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  profile.contact.availability === "open"
                    ? "bg-emerald-400"
                    : profile.contact.availability === "limited"
                      ? "bg-amber-400"
                      : "bg-text-muted"
                } animate-pulse motion-reduce:animate-none`}
              />
              <span className="text-sm text-text-secondary font-mono">
                {profile.contact.location}
              </span>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 animate-enter-right motion-reduce:animate-none"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent hover:bg-accent-dark text-background font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Send via Email
            </button>

            <p className="text-xs text-text-muted text-center font-mono">
              Opens your default mail client
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
