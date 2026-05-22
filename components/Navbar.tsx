"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null);
  // menuOpen is for aria-expanded + bar-morph styling.
  // Drawer visibility is driven by CSS peer-checked: on the checkbox itself,
  // not by this state — see drawer comment for why.
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer when any in-page anchor is followed.
  //
  // Two listeners on purpose:
  //   1. document-level click delegation catches the tap before navigation —
  //      React onClick on <a> inside a position:fixed header has been
  //      unreliable on iOS Safari (same root cause as the original hamburger
  //      button issue).
  //   2. hashchange catches the case where the click handler does fire but
  //      the imperative state didn't settle, or where state is changed via
  //      back/forward buttons.
  // Both call the same close routine which (a) forces the DOM checkbox off
  // and (b) dispatches a change event so iOS re-evaluates :checked and
  // peer-checked styles release in the same frame.
  useEffect(() => {
    const close = () => {
      const el = inputRef.current;
      if (el) {
        el.checked = false;
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }
      setMenuOpen(false);
    };

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a[href^="#"]')) close();
    };

    document.addEventListener("click", onAnchorClick);
    window.addEventListener("hashchange", close);
    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("hashchange", close);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 isolate transform-gpu transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 border-b border-background-border shadow-lg"
          : "bg-background/80"
      }`}
    >
      {/* Native checkbox. Uncontrolled — iOS Safari handles the label→input
          toggle entirely in C++, so the drawer opens via the peer-checked:
          CSS variant even if React's onChange synthetic event fails to fire
          (which has happened before on this code path). onChange still runs
          when it can so aria-expanded + the bar-morph stays in sync. */}
      <input
        ref={inputRef}
        id="menu-toggle"
        type="checkbox"
        defaultChecked={false}
        onChange={(e) => setMenuOpen(e.target.checked)}
        className="peer sr-only"
        aria-label="Toggle menu"
        aria-controls="mobile-drawer"
        aria-expanded={menuOpen}
      />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-accent font-mono font-semibold text-lg tracking-tight hover:text-accent-light transition-colors"
        >
          {(profile.name.split(" ")[0] ?? profile.name).toLowerCase()}
          <span className="text-text-secondary">.</span>
          <span className="text-text-secondary text-sm">dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-text-secondary hover:text-accent transition-colors font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger as a <label>. 44x44 tap target. */}
        <label
          htmlFor="menu-toggle"
          className="md:hidden relative -mr-2 flex flex-col justify-center items-center w-11 h-11 gap-1.5 cursor-pointer touch-manipulation select-none"
        >
          <span
            className={`pointer-events-none block h-0.5 w-6 bg-text-secondary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`pointer-events-none block h-0.5 w-6 bg-text-secondary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`pointer-events-none block h-0.5 w-6 bg-text-secondary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </label>
      </nav>

      {/* Mobile drawer — opened via CSS peer-checked: so the drawer follows
          the DOM checkbox state directly. React state is not the source of
          truth for visibility (it would desync if onChange ever drops). */}
      <div
        id="mobile-drawer"
        className="md:hidden overflow-hidden transition-all duration-300 bg-background-secondary border-b border-background-border max-h-0 opacity-0 peer-checked:max-h-96 peer-checked:opacity-100"
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block w-full py-3 text-text-secondary hover:text-accent transition-colors font-medium border-b border-background-border last:border-0"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
