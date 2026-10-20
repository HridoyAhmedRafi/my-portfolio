export const projects = [
  {
    id: 1,
    slug: "bangla-news-24",
    title: "Bangla News 24",
    category: "Next.js & Authentication",
    description:
      "Bangla News 24 is a modern Bengali news web application designed to help users stay updated with the latest news. It features organized news sections, live news indicators, and a user-friendly interface. The platform also includes secure authentication, session management, and profile management, allowing users to update their personal information.",
    // After adding a screenshot, write its path here, e.g. "/images/projects/bangla-news-24.png"
    image: "/images/projects/bangla-news-24.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "daisyUI",
      "Better Auth",
      "MongoDB",
      "Resend",
      "Google OAuth",
      "GitHub OAuth",
    ],

    features: [
      "Browse latest news",
      "Category-based news browsing",
      "Most-read stories sidebar",
      "Scrolling latest-headlines ticker",
      "View individual news articles",
      "User Sign Up, Sign In and Sign Out",
      "Email & Password authentication",
      "Google and GitHub social sign-in",
      "Editable user profile",
      "Toast notifications for user feedback",
      "Responsive desktop and mobile layouts",
    ],

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
      "FITLOG is a responsive workout library that helps users discover exercises, review detailed instructions and performance stats, and organize their training. Users can build a daily workout plan, save exercises for later, mark workouts as completed, and sort or review their selections through a clean, dark-themed interface.",
    image: "/images/projects/fitlog.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Context API",
      "React Hot Toast",
    ],

    features: [
      "Browse a responsive exercise library",
      "View detailed exercise instructions and stats",
      "Add exercises to a daily workout plan",
      "Save exercises for later",
      "Mark workouts as completed",
      "Remove exercises from plan or saved list",
      "See totals for exercises, minutes, and calories",
      "Responsive user interface",
    ],

    learned: [
      "Structuring a multi-page Next.js application",
      "Managing shared client state with React Context",
      "Integrating a remote REST API into server components",
      "Modeling exercise data with TypeScript interfaces",
      "Building responsive, mobile-first layouts",
      "Deriving totals and sorting from shared state",
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
      "BazarDor is a responsive Bengali-language web application that helps users explore everyday essential product prices across markets in Bangladesh. Users can browse products by category, compare market-wise minimum, maximum, and average prices, track daily price changes, and sort items by price. Authentication and profile management make the experience personal and easy to use.",
    image: "/images/projects/bazar-dor.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Better Auth",
      "React Hot Toast",
    ],

    features: [
      "Browse daily essential product prices",
      "Explore products by category",
      "Compare market-wise minimum, maximum, and average prices",
      "View individual product details",
      "Track daily price rises and falls",
      "Sort products by price",
      "Sign in with email or Google/GitHub",
      "Update profile and manage sessions",
      "Responsive mobile, tablet, and desktop experience",
    ],

    learned: [
      "Structuring a Next.js App Router project by feature",
      "Integrating external REST APIs into server-rendered pages",
      "Implementing email and OAuth authentication with Better Auth",
      "Persisting sessions and user data in MongoDB",
      "Protecting routes and adapting UI to session state",
      "Building responsive Bengali interfaces with Tailwind CSS and DaisyUI",
      "Implementing product filtering",
      "Displaying product details and comparing prices across multiple markets",
      "Managing user profile information and updating usernames",
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
      "DevStack is a web app that helps developers explore and assemble their ideal technology stack. Browse a curated catalog of frontend, backend, database, language, styling, and tooling options, compare key details at a glance, then add favorites to a personal stack that updates instantly and can be refined anytime.",
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
      "Add technologies to Your Stack with a single click",
      "Prevent duplicate selections: added technologies show an Added to Stack state and a disabled button",
      "View the number of selected technologies in Your Stack",
      "Remove individual technologies from the stack",
      "Remove all selected technologies at once",
      "Show toast notifications for adding, removing, and clearing technologies",
      "Responsive layout for mobile, tablet, and desktop screens",
    ],

    learned: [
      "React component architecture",
      "TypeScript type decalarations",
      "Reusable UI components",
      "Building interactive user interfaces",
      "Lifting and sharing state across sibling components",
      "Responsive design sense",
    ],
    github: "https://github.com/HridoyAhmedRafi/DevStack",
    liveDemo: "https://dev-stack-taupe.vercel.app/",
  },

  {
    id: 5,
    slug: "book-vibe",
    title: "Book Vibe",
    category: "Next.js",
    description:
      "Book Vibe is a reading companion for discovering and organizing books. Users browse a curated catalog, explore detailed book pages, and build personal read and wishlist collections. Saved titles can be compared at a glance, and reading habits are summarized visually.",

    image: "/images/projects/book-vibe.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
      "React Context API",
    ],

    features: [
      "Browse and explore books",
      "View detailed book information",
      "Add books to the Read list",
      "Save books to the Wishlist",
      "View page-count chart for read books",
      "Sort by ratings, number of page and published year",
      "Responsive design for mobile, tablet, and desktop",
      "Loading skeletons for a smoother user experience",
    ],
    overview:
      "Book Vibe is a modern book discovery platform that helps users explore books, manage reading lists and wishlists, and track reading progress with interactive charts.",
    structure: null,
    learned: [
      "Dynamic routing with Next.js",
      "Reusable components",
      "Context API",
      "Responsive UI development with Tailwind CSS",
      "Visualizing reading data with Recharts",
      "Optimizing remote cover images with built-in tooling",
    ],
    github: "https://github.com/HridoyAhmedRafi/book-vibe",
    liveDemo: "https://book-vibe-ten-vert.vercel.app",
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
