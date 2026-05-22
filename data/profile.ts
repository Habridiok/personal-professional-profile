// ============================================================
// data/profile.ts
// Single source of truth for all portfolio content.
// ============================================================

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "website";
  url: string;
  label: string;
}

export type SkillCategory =
  | "language"
  | "framework"
  | "database"
  | "devops"
  | "cloud"
  | "other";

export const skillCategoryLabel: Record<SkillCategory, string> = {
  language:  "Languages",
  framework: "Frameworks & Libraries",
  database:  "Databases",
  devops:    "DevOps / Tools",
  cloud:     "Cloud & Platforms",
  other:     "Architecture & Concepts",
};

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: SkillCategory;
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;       // "YYYY-MM"
  endDate: string | "present"; // "YYYY-MM" or "present"
  description: string;
  highlights: string[];    // 2-4 bullet achievements, quantified where possible
  technologies: string[];
  logoUrl?: string;        // e.g. "/logos/company.svg" - add files manually
}

export interface Project {
  title: string;
  description: string;        // short, 1-2 sentences
  longDescription?: string;   // expanded, 3-5 sentences
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  imageUrl?: string;          // e.g. "/projects/name.png"
  featured?: boolean;
  status: "completed" | "in-progress" | "archived";
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | "present";
  description?: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: "open" | "limited" | "closed";
  availabilityMessage: string;
}

export interface Profile {
  name: string;
  title: string;       // e.g. "Full-Stack Engineer" or "Frontend Developer"
  tagline: string;     // 1 punchy sentence that captures professional identity
  bio: string;         // 3-4 sentences, written in first person, professional tone
  avatarUrl: string;   // always "/profile-photo.jpg"
  resumeUrl?: string;  // always "/resume.pdf" if available
  siteUrl: string;     // deployed domain
  faviconUrl: string;  // always "/favicon.ico"
  contact: ContactInfo;
  social: SocialLink[];
  skills: Skill[];
  experience: ExperienceItem[];
  projects: Project[];
  education: Education[];
}

// ============================================================
// PROFILE DATA
// ============================================================

export const profile: Profile = {
  name: "Habridio Kurniawan Putra",
  title: "Software Design Engineer - Backend",
  tagline:
    "Backend engineer who turns distributed systems complexity into reliable, scalable products — 7 years shipping at Indonesia's leading e-commerce platform, with a growing edge in Go and distributed ledger tech.",
  bio: "I'm a Software Design Engineer with 7+ years building and scaling backend systems at Blibli.com, one of Indonesia's leading e-commerce platforms. My core work spans checkout and promotion services — event-driven architecture on Kafka, distributed caching, and service coordination across 12+ microservices serving tens of thousands of RPM.\n\nBeyond shipping features, I mentor junior engineers on system design and backend fundamentals. Currently expanding into Go and distributed ledger tech, always drawn to problems where performance, reliability, and scale are non-negotiable.",
  avatarUrl: "/profile-photo.jpg",
  resumeUrl: "/resume.pdf",
  siteUrl: "https://habridio.dev",
  faviconUrl: "/favicon.ico",

  contact: {
    email: "hakapecode@gmail.com",
    location: "Jakarta, Indonesia",
    availability: "open",
    availabilityMessage: "Open to backend engineering roles and technical collaborations. Reach out via email or LinkedIn — I typically respond within a day.",
  },

  social: [
    {
      platform: "github",
      url: "https://github.com/Habridiok",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/habridio/",
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: "mailto:hakapecode@gmail.com",
      label: "Email",
    },
  ],

  skills: [
    // Languages
    { name: "Java",       category: "language", level: "expert"       },
    { name: "Kotlin",     category: "language", level: "advanced"     },
    { name: "Go",         category: "language", level: "intermediate" },
    { name: "JavaScript", category: "language", level: "intermediate" },

    // Frameworks & Libraries
    { name: "Spring Boot", category: "framework", level: "expert"   },
    { name: "JUnit",       category: "framework", level: "advanced" },

    // Protocols
    { name: "REST API", category: "other", level: "expert"       },
    { name: "gRPC",     category: "other", level: "intermediate" },

    // Databases
    { name: "MongoDB",    category: "database", level: "advanced"     },
    { name: "PostgreSQL", category: "database", level: "advanced"     },
    { name: "Redis",      category: "database", level: "advanced"     },
    { name: "Memcached",  category: "database", level: "intermediate" },

    // DevOps & Infrastructure
    { name: "Docker",     category: "devops", level: "advanced"     },
    { name: "Kubernetes", category: "devops", level: "advanced"     },
    { name: "Kafka",      category: "devops", level: "advanced"     },
    { name: "Jenkins",    category: "devops", level: "advanced"     },
    { name: "Nginx",      category: "devops", level: "intermediate" },
    { name: "K6",         category: "devops", level: "intermediate" },

    // Cloud
    { name: "GCP", category: "cloud", level: "advanced" },

    // Architecture & Concepts
    { name: "Microservices Architecture", category: "other", level: "advanced"     },
    { name: "Distributed Systems",        category: "other", level: "advanced"     },
    { name: "API Design",                 category: "other", level: "advanced"     },
    { name: "Scalability Engineering",    category: "other", level: "advanced"     },
    { name: "R3 Corda",                   category: "other", level: "intermediate" },
    { name: "Integration Testing",        category: "other", level: "advanced"     },
    { name: "Unit Testing",               category: "other", level: "advanced"     },
    { name: "Git",                        category: "other", level: "advanced"     },
  ],

  experience: [
    {
      company: "Blibli.com",
      role: "Software Design Engineer",
      startDate: "2025-01",
      endDate: "present",
      description:
        "Leading backend design and delivery for critical checkout and promotion services, driving system reliability, feature innovation, and team growth.",
      highlights: [
        "Architected and delivered Blibli Grocery integration into the unified retail cart and checkout system, enabling a seamless cross-category purchase flow across 12+ services at ~60 TPS.",
        "Developed a Payment Recommendation feature that surfaces personalized payment options at checkout, improving conversion experience for millions of users.",
        "Initiated and implemented workflow automation solutions to enhance team productivity and improve output quality in daily engineering operations.",
        "Mentored 5 engineers and interns on system design and backend best practices, contributing to a culture of technical excellence within the squad.",
        "Maintained high reliability across checkout and promotion services handling ~50K RPM daily, with fast incident response through structured root cause analysis.",
      ],
      technologies: [
        "Java", "Spring Boot", "JUnit", "Integration Test",
        "JavaScript", "K6", "Redis", "Memcached",
        "Kafka", "MongoDB", "Kubernetes", "Jenkins",
      ],
      logoUrl: "/logos/blibli.svg",
    },
    {
      company: "Blibli.com",
      role: "Senior Software Development Engineer",
      startDate: "2022-01",
      endDate: "2024-12",
      description:
        "Drove feature development, system improvements, and platform engineering for large-scale checkout and promotion systems within a cross-functional squad.",
      highlights: [
        "Delivered strategic features across cart, checkout, promotion, and payment systems including Blibli Grocery, Scan and Go, and checkout quantity update, enhancing user experience in high-traffic applications.",
        "Built Scan and Go, enabling customers to self-checkout via the Blibli app at minimarket locations, reducing in-store friction and expanding Blibli's omnichannel footprint.",
        "Designed and implemented an internal Nginx-based API gateway for the checkout and promotion squad, capable of handling up to 100K RPM without degradation.",
        "Implemented a canary deployment pipeline enabling safe progressive rollouts to internal users before full production release, reducing release risk across 12+ services.",
        "Built a rate limiter to protect checkout services from unexpected traffic spikes and abuse, stabilizing system performance under load.",
        "Created K6 performance testing scripts and led load testing initiatives, achieving ~30% throughput improvement across critical checkout flows.",
      ],
      technologies: [
        "Java", "Spring Boot", "JavaScript", "K6",
        "Redis", "Memcached", "Kafka", "MongoDB",
        "Kubernetes", "Jenkins", "Nginx",
      ],
      logoUrl: "/logos/blibli.svg",
    },
    {
      company: "Blibli.com",
      role: "Software Development Engineer",
      startDate: "2020-08",
      endDate: "2021-12",
      description:
        "Developed and enhanced features for Cart-Engine and Promotion Services, two core systems powering Blibli's shopping experience.",
      highlights: [
        "Developed features for Cart-Engine (checkout workflow orchestration) and Promotion Services (discounts, campaigns, and internal tooling), supporting Blibli's core shopping funnel.",
        "Wrote and maintained unit and integration tests across REST APIs, improving service reliability and reducing regression risk.",
        "Contributed to internal frontend tooling for the Promotion Services team, enabling business operators to manage campaigns more efficiently.",
      ],
      technologies: [
        "Java", "Spring Boot", "JUnit",
        "JavaScript", "Redis", "Memcached",
        "Kafka", "MongoDB",
      ],
      logoUrl: "/logos/blibli.svg",
    },
    {
      company: "Blibli.com",
      role: "Associate Software Development Engineer",
      startDate: "2019-09",
      endDate: "2020-07",
      description:
        "Started career at Blibli.com maintaining critical backend services for the checkout and promotion ecosystem.",
      highlights: [
        "Maintained Cart-Engine and Promotion Services, the core systems orchestrating cart operations, checkout flows, promotional logic, and discount campaigns.",
        "Diagnosed, debugged, and resolved production bugs, developing foundational skills in large-scale e-commerce backend systems.",
      ],
      technologies: [
        "Java", "Spring Boot", "JUnit",
        "JavaScript", "Memcached", "Kafka", "MongoDB",
      ],
      logoUrl: "/logos/blibli.svg",
    },
  ],

  projects: [
    {
      title: "Blibli Grocery",
      description:
        "Integrated Blibli Grocery into the unified retail cart and checkout system, enabling customers to shop for fresh products alongside regular retail items in a single checkout flow.",
      longDescription:
        "Blibli Grocery required deep integration across 12+ backend services to unify grocery and retail cart logic, pricing, and checkout under a single flow. The project introduced scheduled delivery and 2-hour delivery options for fresh products, demanding careful coordination between inventory, logistics, and payment systems. The backend was designed to maintain ~60 TPS throughput while ensuring data consistency across heterogeneous product types. This was a cross-functional initiative involving backend, frontend, mobile, product, and data teams from both local and international squads.",
      techStack: [
        "Java", "Spring Boot", "Kafka",
        "MongoDB", "Redis", "Kubernetes",
      ],
      featured: true,
      status: "completed",
      imageUrl: "/projects/blibli-grocery.png",
    },
    {
      title: "Scan & Go",
      description:
        "Built an in-store self-checkout feature allowing Blibli customers to scan and purchase products directly from the Blibli app at minimarket locations.",
      longDescription:
        "Scan & Go extended Blibli's checkout capabilities into physical retail by enabling customers to scan product barcodes via the Blibli app and complete purchases without waiting at a traditional cashier. The backend was responsible for real-time product lookup, cart management, and payment orchestration within the in-store context. The feature required tight integration with the existing Cart-Engine while introducing new flows specific to physical store environments. It represented a key step in Blibli's omnichannel strategy, bridging the gap between online and offline commerce.",
      techStack: [
        "Java", "Spring Boot", "Kafka",
        "MongoDB", "Redis", "Kubernetes",
      ],
      featured: true,
      status: "completed",
      imageUrl: "/projects/scan-and-go.png",
    },
    {
      title: "Internal API Gateway",
      description:
        "Designed and implemented an Nginx-based internal API gateway for the checkout and promotion squad, handling up to 100K RPM reliably.",
      longDescription:
        "The internal API gateway was introduced to centralize routing, rate limiting, and traffic management for the checkout and promotion service cluster. Built on Nginx, it provided a stable ingress layer capable of sustaining 100K RPM without degradation, decoupling service-level concerns from individual application logic. The gateway also served as the foundation for the canary deployment pipeline, enabling controlled traffic splitting between production and canary instances. This initiative significantly improved operational visibility and reduced the blast radius of rolling deployments across 12+ services.",
      techStack: [
        "Nginx", "Kubernetes", "Java",
        "Spring Boot", "Jenkins",
      ],
      featured: true,
      status: "completed",
      imageUrl: "/projects/api-gateway.png",
    },
    {
      title: "Canary Deployment Pipeline",
      description:
        "Implemented a canary deployment mechanism allowing new features and fixes to be tested by internal users before full rollout to all Blibli customers.",
      longDescription:
        "The canary deployment pipeline introduced a progressive release strategy for the checkout and promotion squad, reducing the risk of production incidents during feature rollouts. Internal Blibli employees served as the initial traffic cohort, allowing the team to validate new behavior at scale before exposing changes to all customers. The implementation leveraged Nginx traffic splitting integrated with the internal API gateway, with monitoring hooks to detect anomalies and trigger rollback if needed.",
      techStack: ["Nginx", "Kubernetes", "Jenkins", "Java", "Spring Boot"],
      featured: false,
      status: "completed",
      imageUrl: "/projects/canary-deployment.png",
    },
    {
      title: "Rate Limiter",
      description:
        "Built a rate limiting layer to protect checkout and promotion services from unexpected traffic spikes, abuse, and potential DDoS scenarios.",
      longDescription:
        "The rate limiter was implemented to safeguard the checkout and promotion infrastructure from both organic traffic surges and malicious abuse patterns. It enforced configurable request thresholds at the gateway level, ensuring downstream services remained stable under load. The solution was designed to be transparent to legitimate users while effectively throttling abnormal traffic patterns, contributing to overall system resilience.",
      techStack: ["Nginx", "Redis", "Java", "Spring Boot", "Kubernetes"],
      featured: false,
      status: "completed",
      imageUrl: "/projects/rate-limiter.png",
    },
    {
      title: "Checkout Quantity Update",
      description:
        "Developed a feature allowing customers to update item quantities directly from the checkout page, reducing cart abandonment caused by friction in the purchase flow.",
      longDescription:
        "The checkout quantity update feature addressed a common drop-off point in the purchase funnel by letting customers adjust item quantities without leaving the checkout page. The backend handled real-time recalculation of pricing, promotions, and inventory availability across multiple services while keeping the checkout state consistent. The feature required careful coordination between the cart, promotion, and inventory systems to ensure accuracy at high concurrency. It was built to integrate seamlessly into the existing checkout flow with minimal latency impact.",
      techStack: ["Java", "Spring Boot", "Kafka", "MongoDB", "Redis", "Kubernetes"],
      featured: false,
      status: "completed",
      imageUrl: "/projects/checkout-quantity-update.png",
    },
    {
      title: "Payment Recommendation",
      description:
        "Developed a feature that surfaces personalized payment options to customers at checkout, improving the payment selection experience.",
      longDescription:
        "The Payment Recommendation feature analyzes customer context at checkout to surface the most relevant payment options, reducing decision friction and improving conversion. The backend service integrates with the existing checkout flow to inject ranked payment suggestions in real time, based on factors such as cart value, customer history, and available payment methods. The feature was built with extensibility in mind, allowing the business team to configure recommendation logic without engineering intervention.",
      techStack: ["Java", "Spring Boot", "MongoDB", "Redis", "Kafka"],
      featured: false,
      status: "completed",
      imageUrl: "/projects/payment-recommendation.png",
    },
  ],

  education: [
    {
      institution: "Universitas Brawijaya",
      degree: "Bachelor of Computer Science (S.Kom.)",
      field: "Informatics Engineering",
      startYear: 2015,
      endYear: 2019,
      description:
        "GPA: 3.66 / 4.00. Thesis: \"Development of a Long Method Smell Detection Application Based on Refactoring Filtering Metrics\". Built a static analysis tool to automatically detect Long Method code smells using refactoring filtering metrics, addressing software maintainability challenges.",
    },
  ],
};