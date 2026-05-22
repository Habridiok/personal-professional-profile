import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { profile } from "@/data/profile";
import { getSiteBase, resolveAssetUrl } from "@/lib/url";

export default function Home() {
  const base = getSiteBase();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bio,
    url: base,
    image: resolveAssetUrl(base, profile.avatarUrl),
    email: profile.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.contact.location,
    },
    sameAs: profile.social
      .filter((s) => s.platform !== "email")
      .map((s) => s.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
