export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: 'Full Stack' | 'Frontend' | 'AI / Cloud' | 'Mobile & UI';
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  highlights: string[];
  metrics?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; iconName?: string; experience?: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Imad Durranni",
    title: " Full-Stack Engineer & UI Architect",
    bio: "Crafting scalable web applications, sleek micro-interactions, and cloud-native solutions. Passionate about performant design systems and human-centered software.",
    about: "I'm a full-stack engineer with over 0.5 years of experience building modern web applications. Specialized in TypeScript, React, Next.js, Node.js, and cloud services. I bridge the gap between design and engineering to build products that scale.",
    location: "Peshawar, Pakistan",
    status: "Available for New Opportunities",
    email: "imad31910@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    avatar: "/profile.jpg",
  },
  stats: [
    { label: "Years Experience", value: "0.5+" },
    { label: "Projects Completed", value: "35+" },
    { label: "Github Contributions", value: "2,400+" },
    { label: "Client Satisfaction", value: "99%" },
  ],
  skillCategories: [
    {
      name: "Frontend",
      skills: [
        { name: "React & Next.js", level: 95, experience: "6 yrs" },
        { name: "TypeScript", level: 92, experience: "5 yrs" },
        { name: "Tailwind CSS & Styling", level: 95, experience: "5 yrs" },
        { name: "State Management (Zustand/Redux)", level: 88, experience: "4 yrs" },
        { name: "Three.js & Canvas/WebXR", level: 75, experience: "2 yrs" },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js & Express", level: 90, experience: "5 yrs" },
        { name: "PostgreSQL & Prisma / Drizzle", level: 85, experience: "4 yrs" },
        { name: "GraphQL & REST APIs", level: 88, experience: "5 yrs" },
        { name: "Redis & Caching", level: 80, experience: "3 yrs" },
        { name: "Python & FastAPI", level: 78, experience: "3 yrs" },
      ],
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Docker & Containerization", level: 82, experience: "4 yrs" },
        { name: "AWS (S3, Lambda, EC2)", level: 80, experience: "3 yrs" },
        { name: "Vercel & CI/CD Pipelines", level: 90, experience: "5 yrs" },
        { name: "Git & GitHub Actions", level: 92, experience: "6 yrs" },
      ],
    },
    {
      name: "Design & Process",
      skills: [
        { name: "Figma & Wireframing", level: 85, experience: "4 yrs" },
        { name: "UI/UX Design Systems", level: 90, experience: "5 yrs" },
        { name: "Agile & Scrum Methodologies", level: 88, experience: "5 yrs" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "nexus-analytics",
      title: "Nexus Analytics Platform",
      tagline: "Real-time enterprise metrics dashboard with AI anomaly detection",
      description: "A high-performance SaaS analytics suite processing over 10M daily events with interactive charts and automated insights.",
      fullDescription: "Nexus Analytics is a next-gen data visualization platform built for modern product teams. It features sub-second query speeds, live websocket streaming, custom cohort analysis, and machine-learning driven anomaly alerts.",
      category: "Full Stack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Recharts", "Prisma"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "https://example.com/nexus",
      githubUrl: "https://github.com/example/nexus-analytics",
      featured: true,
      highlights: [
        "Reduced query latency by 45% using Redis caching and server-side aggregation.",
        "Built responsive customizable dashboard widget grid.",
        "Implemented secure RBAC authentication with NextAuth."
      ],
      metrics: "10M+ events/day processed"
    },
    {
      id: "lumina-ai",
      title: "Lumina Studio AI",
      tagline: "Generative canvas tool for UI designer workflows",
      description: "AI-powered web app allowing designers to transform natural language descriptions into interactive high-fidelity components.",
      fullDescription: "Lumina Studio leverages LLMs and WebGL vector engines to enable instant UI prototyping. Users can manipulate prompt parameters, preview responsive layouts, and export clean React/Tailwind code with 1-click.",
      category: "AI / Cloud",
      tags: ["React", "Next.js", "OpenAI API", "Tailwind CSS", "Zustand", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "https://example.com/lumina",
      githubUrl: "https://github.com/example/lumina-studio",
      featured: true,
      highlights: [
        "Integrated streaming LLM outputs for real-time code preview generation.",
        "Created custom AST renderer converting JSON trees to live React DOM nodes.",
        "Surpassed 50k active monthly users during product launch."
      ],
      metrics: "50,000+ monthly active users"
    },
    {
      id: "hyperflow-ecommerce",
      title: "HyperFlow Storefront",
      tagline: "Headless e-commerce platform with sub-second page loads",
      description: "Ultra-fast headless commerce template powered by Next.js App Router, Shopify Storefront API, and Stripe.",
      fullDescription: "Built with speed as priority #1, HyperFlow features instant optimistic cart updates, dynamic currency conversion, server-driven search filtering, and seamless checkout integrations.",
      category: "Frontend",
      tags: ["Next.js", "Shopify API", "Stripe", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "https://example.com/hyperflow",
      githubUrl: "https://github.com/example/hyperflow-commerce",
      featured: true,
      highlights: [
        "Achieved 100/100 Lighthouse performance score across all devices.",
        "Optimized image delivery pipeline reducing bundle size by 60%.",
        "Handled over $1.2M in peak holiday campaign transactions."
      ],
      metrics: "100 Lighthouse performance score"
    },
    {
      id: "pulse-tasks",
      title: "Pulse Real-time Workspaces",
      tagline: "Collaborative team Kanban and document editor",
      description: "Multiplayer workspace application supporting live cursor sharing, instant comment threads, and automated sprint workflows.",
      fullDescription: "Pulse brings remote engineering teams together with real-time CRDT document sync, instant state reflection across clients via WebSockets, and rich GitHub integration.",
      category: "Full Stack",
      tags: ["Next.js", "Node.js", "WebSockets", "Tailwind CSS", "Redis", "TypeScript"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "https://example.com/pulse",
      githubUrl: "https://github.com/example/pulse-workspaces",
      featured: false,
      highlights: [
        "Implemented Yjs CRDT algorithm for conflict-free document editing.",
        "Built instant notification system supporting desktop push & Slack Webhooks."
      ]
    },
    {
      id: "zenith-mobile",
      title: "Zenith Fitness & Wellness App",
      tagline: "Mobile-first health tracker with custom biometric metrics",
      description: "Cross-platform progressive web application with workout analytics, micro-habit tracking, and offline data sync.",
      fullDescription: "Zenith combines sleek dark-mode aesthetic UI with offline IndexedDB storage and biometric chart visualizations, ensuring user health data is always accessible anywhere.",
      category: "Mobile & UI",
      tags: ["React Native / PWA", "Next.js", "Tailwind CSS", "Chart.js", "Service Workers"],
      image: "https://images.unsplash.com/photo-1510519138161-58446232811f?auto=format&fit=crop&q=80&w=1000",
      liveUrl: "https://example.com/zenith",
      githubUrl: "https://github.com/example/zenith-wellness",
      featured: false,
      highlights: [
        "Designed offline-first sync engine using IndexedDB and Service Worker background sync."
      ]
    }
  ] as Project[],
  experiences: [
    {
      id: "exp-1",
      role: "Lead Full-Stack Developer",
      company: "Aether Technologies",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description: "Leading the core product engineering team building enterprise cloud SaaS management platforms.",
      achievements: [
        "Architected Next.js micro-frontend infrastructure, improving page load speeds by 40%.",
        "Mentored a team of 6 frontend and backend engineers, instituting code review standards and CI testing pipelines.",
        "Spearheaded migration of legacy monolith to Node.js / Serverless microservices, cutting cloud infra costs by $8,000/month."
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AWS", "GraphQL"]
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "Veloce Digital",
      period: "2021 - 2023",
      location: "Remote",
      description: "Developed client-facing web applications and design systems for high-growth tech startups.",
      achievements: [
        "Built customizable UI component library used across 12 product squads.",
        "Collaborated with product designers to create accessible (WCAG AAA) web interfaces.",
        "Integrated WebSockets and Redis channels for live chat and notification features."
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Figma"]
    },
    {
      id: "exp-3",
      role: "Frontend Engineer",
      company: "Nova Interactive",
      period: "2019 - 2021",
      location: "Austin, TX",
      description: "Crafted interactive web experiences, marketing portals, and internal management tools.",
      achievements: [
        "Developed responsive e-commerce web applications with server-side rendering.",
        "Optimized asset bundle sizes and asset loading, increasing mobile conversion rates by 22%."
      ],
      technologies: ["React", "JavaScript (ES6+)", "Sass/CSS Modules", "Webpack", "REST APIs"]
    }
  ] as Experience[],
  testimonials: [
    {
      id: "t1",
      quote: "Alex is an extraordinary engineer who brings both deep technical expertise and exceptional design sensibility. He delivered our flagship analytics app ahead of schedule with flawless quality.",
      name: "Sarah Jenkins",
      title: "VP of Product",
      company: "CloudScale Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: "t2",
      quote: "Working with Alex transformed our product roadmap. His ability to translate complex business requirements into sleek, lightning-fast user interfaces is unmatched.",
      name: "David Chen",
      title: "CTO & Co-founder",
      company: "Apex Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: "t3",
      quote: "Alex's attention to detail, proactive communication, and mastery of Next.js and web performance made him an invaluable asset to our team.",
      name: "Elena Rostova",
      title: "Senior Product Designer",
      company: "Design Systems Co",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  ] as Testimonial[]
};
