export const projects = [

  {
    id: 1,
    slug: "studio-space",
    title: "StudioSpace",
    category: "Full-Stack Marketplace & Booking",

    description:
      "StudioSpace is a full-stack marketplace where creators discover production-ready spaces (photo studios, sound stages, podcast rooms, music suites, and art workshops) and book them by the hour. Hosts can list and manage their own studios, while creators track every booking request from a personal dashboard.",

    image: "/images/projects/studio-space.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Google OAuth",
      "JWT",
      "Lucide React",
      "React Hot Toast",
    ],

    features: [
      "Browse creative studios across multiple categories",
      "View detailed studio information",
      "User registration and sign-in",
      "Email and password authentication",
      "Google social sign-in",
      "Create new studio listings",
      "Edit and delete personal studio listings",
      "Owner-only studio management",
      "Book studios through an interactive booking modal",
      "Select booking dates and preferred time slots",
      "Cancel pending bookings",
      "View and manage personal bookings",
      "Responsive desktop, tablet, and mobile layouts",
      "Light and dark theme toggle",
      "Toast notifications for user feedback",
    ],

    challenges: [
      "Implementing JWT Plugin",
      "Protecting private routes and securing backend mutation operations",
      "Preventing double bookings by detecting overlapping time slots for the same studio and date",
      "Ensuring cancelled bookings do not block future reservations",
      "Managing booking statuses and restricting cancellation to pending bookings",
      "Synchronizing frontend booking operations with backend database records",
      "Handling authentication and authorization across frontend and backend",
    ],

    improvements: [
      "Integrate an online payment gateway for booking transactions",
      "Add a wishlist feature to save favorite studios",
      "Implement a studio review and rating system",
      "Introduce an in-app messaging system between creators and studio owners",
    ],

    github: "https://github.com/HridoyAhmedRafi/studio-space",
    liveDemo: "https://studio-space-three.vercel.app",
  },



  {
    id: 2,
    slug: "bangla-news-24",
    title: "Bangla News 24",
    category: "Next.js & Authentication",
    description:
      "Bangla News 24 is a modern Bengali news web application designed to help users stay updated with the latest news. It features organized news sections, live news indicators, and a user-friendly interface. The platform also includes secure authentication, session management, and profile management, allowing users to update their personal information.",

    image: "/images/projects/bangla-news-24.png",
    technologies: [
      "Next.js",
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


    challenges: [
      "Configuring OAuth redirect URLs for social sign-in in production",
      "Separating sign-up and sign-in flows by disabling automatic sign-in after registration",
      "Managing authentication state and keeping user profile information synchronized",
      "Handling loading and error states while fetching news articles",
    ],
    improvements: [
      "Add a bookmark feature to save articles for later reading",
      "Implement personalized news recommendations based on user interests",
      "Add a search feature to find articles by title or keywords",
    ],
    github: "https://github.com/HridoyAhmedRafi/bangla-news-24",
    liveDemo: "https://bangla-news-24-teal.vercel.app/",
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
    challenges: [
      "Integrating multiple APIs and data fetching efficiently in the frontend.",
      "Resolving Better Auth's invalid origin issue during Vercel deployment",
      "Ensuring consistent authentication state across page navigation and refresh",
    ],
    improvements: [
      "Add a product bookmarking feature to save frequently checked items",
      "Expand market coverage to compare prices across more local markets in Bangladesh",
    ],

    github: "https://github.com/HridoyAhmedRafi/bazar-dor",
    liveDemo: "https://bazar-dor-phi-ashen.vercel.app",
  },

];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
