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
    slug: "bazar-dor",
    title: "Bazar Dor",
    category: "Next.js",
    description:
      "BazarDor is a modern web application that helps users explore daily essential products",
    image: "/images/projects/bazar-dor.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "External API Integration",
      "Authentication",
      "React Hot Toastify",
    ],

    features: [
      "View the prices of essential products",
      "Explore products by category",
      "View individual product details",
      "Compare the prices of products across multiple markets",
      "See whether product prices have increased or decreased",
      "Organize products using the available sorting options",
      "Bengali date and time formatting",
      "Sign in and sign up using email/password or OAuth, with profile management support",
      "User profile management and name update",
      "Responsive layout for mobile, tablet and desktop",
      "Use the application on mobile, tablet, and desktop screens",
    ],
    overview:
      "BazarDor is a web application for exploring essential product prices across different markets in Bangladesh and comparing price differences between markets.",
    structure: null,
    learned: [
      "Building a full-stack web application using Next.js and React",
      "Creating responsive user interfaces with Tailwind CSS",
      "Managing application data using TypeScript and MongoDB",
      "Integrating external APIs to fetch product price data",
      "Implementing user authentication and social sign-in with Google and GitHub",
      "Managing user sessions and protecting authenticated routes",
      "Implementing product filtering",
      "Displaying product details and comparing prices across multiple markets",
      "Tracking and displaying daily price increases and decreases",
      "Managing user profile information and updating usernames",
      "Displaying toast notifications for user feedback",
      "Formatting dates in Bengali",
      "Deploying a Next.js application on Vercel and troubleshooting deployment issues",
    ],
    github: "https://github.com/HridoyAhmedRafi/bazar-dor",
    liveDemo: "https://bazar-dor-phi-ashen.vercel.app",
  },

  {
    id: 4,
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
