export const projects = [
  {
    id: 1,
    slug: "bangla-news-24",
    title: "Bangla News 24",
    category: "Next.js & Authentication",
    description:
      "A modern and responsive Bengali news web application with account-based authentication features.",
    // After adding a screenshot, write its path here, e.g. "/images/projects/bangla-news-24.png"
    image: "/images/projects/bangla-news-24.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
      "Resend",
      "Google OAuth",
      "GitHub OAuth",
      "REST API",
    ],
    highlights: [
      "Browse latest and popular news",
      "Explore news by category",
      "Email/password, Google and GitHub sign-in",
      "User profile management",
      "Responsive news layout",
    ],
    features: [
      "Browse latest news",
      "Explore different news categories",
      "View individual news articles",
      "Popular news section",
      "Live news indicator",
      "Dynamic news data rendering",
      "Bengali date and time formatting",
      "Responsive news layout",
      "User Sign Up, Sign In and Sign Out",
      "Email & Password authentication",
      "Google and GitHub social sign-in",
      "User profile and name update",
      "Authentication session handling",
      "Toast notifications for user feedback",
    ],
    overview:
      "Bangla News 24 focuses on delivering news content through a clean, modern, and responsive interface. Users can explore different news sections, browse popular and latest news, view individual news content, and use authentication features to manage their accounts.",
    structure: `src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── profile/
│   └── api/
│       └── auth/
├── components/
└── lib/
    ├── auth.ts
    └── auth-client.ts`,
    learned: [
      "Next.js App Router and dynamic routing",
      "React component architecture with TypeScript",
      "API data fetching and dynamic data rendering",
      "Email/password and OAuth (Google, GitHub) authentication",
      "Authentication session management and user profile updates",
      "MongoDB integration",
      "Responsive UI and reusable components",
      "Toast notifications and user feedback",
    ],
    github: "https://github.com/HridoyAhmedRafi/bangla-news-24",
    liveDemo: "https://bangla-news-24-teal.vercel.app/",
  },
  {
    id: 2,
    slug: "fitlog",
    title: "FITLOG",
    category: "Next.js",
    description:
      "A modern workout companion to explore exercises and build a personalized daily workout plan.",
    image: "/images/projects/fitlog.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
    ],
    highlights: [
      "Browse and filter exercises",
      "View detailed exercise information",
      "Build a personal workout plan",
      "Daily plan limited to five exercises",
      "Responsive dark-themed design",
    ],
    features: [
      "Browse and explore exercises",
      "View detailed exercise information",
      "Filter exercises based on different categories",
      "Create a personalized workout plan",
      "Add exercises to My Plan",
      "Remove exercises from the workout plan",
      "Limit the daily workout plan to five exercises",
      "Responsive user interface",
      "Modern dark-themed design",
      "Clean and reusable React components",
    ],
    overview:
      "FITLOG provides an easy way to discover exercises and organize a daily workout plan. Users can explore available exercises, view exercise details, and save exercises to their personal plan. It was built with a focus on reusable components, responsive design, and clean UI.",
    structure: `src/
├── app/
├── components/
├── context/
└── data/`,
    learned: [
      "Next.js App Router and dynamic routing",
      "React components and TypeScript",
      "State management with Context API across multiple pages",
      "Responsive UI development",
      "Building a real-world app with reusable components",
    ],
    github: "https://github.com/HridoyAhmedRafi/fit-log",
    liveDemo: "https://fit-log-swart.vercel.app/",
  },
  {
    id: 3,
    slug: "devstack",
    title: "DevStack",
    category: "React",
    description:
      "An interactive technology stack builder where developers explore web technologies and build their own stack.",
    image: "/images/projects/devstack.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Icons",
      "React Toastify",
    ],
    highlights: [
      "Explore different web technologies",
      "Add technologies to Your Stack",
      "Remove technologies or clear the stack",
      "Interactive and responsive interface",
      "Clean and modern design",
    ],
    features: [
      "Explore different web technologies",
      "Build a personalized technology stack",
      "Add technologies to Your Stack",
      "Remove technologies from your stack",
      "Clear the selected stack",
      "Interactive and responsive user interface",
      "Clean and modern design",
    ],
    overview:
      "DevStack was built to provide a simple and interactive way to explore modern web development technologies while creating a personalized stack. The project focuses on a clean user interface, reusable React components, and interactive state management.",
    structure: null,
    learned: [
      "React component architecture",
      "TypeScript in a React project",
      "State management",
      "Reusable UI components",
      "Building interactive user interfaces",
    ],
    github: "https://github.com/HridoyAhmedRafi/DevStack",
    liveDemo: "https://dev-stack-taupe.vercel.app/",
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
