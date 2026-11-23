export const projects = [

  {
    id: 1,
    slug: "salon-book",
    title: "SalonBook",
    category: "Full-Stack Salon Appointment Booking",

    description:
      "SalonBook is a full-stack salon appointment booking platform where customers can explore salon services, view detailed service information, and request appointments online. The salon administrator can create and manage salon services, review appointment requests, confirm or cancel appointments, and monitor customer payments. Customers can manage their appointment requests and securely pay for confirmed appointments through Stripe.",

    image: "/images/projects/salon-book.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Stripe",
      "Shadcn/ui",
      "Lucide React",
      "Sonner",
      "ImgBB",
    ],

    features: [
      "Email and password authentication with Google OAuth",
      "Browse, search, filter, and sort salon services",
      "View detailed service information and availability",
      "Request appointments with date and time-slot selection",
      "Manage personal appointments and cancel pending bookings",
      "Customer dashboard with appointment summaries and booking history",
      "Update customer profile information and profile image",
      "Admin dashboard with customer, service, appointment, and payment analytics",
      "Complete salon service management (Create, Edit, Activate, Deactivate, and Delete)",
      "Manage appointment requests with confirmation and cancellation",
      "Customer account management with block and unblock controls",
      "Secure Stripe Checkout with payment session verification",
      "Monitor successful payment transactions",
      "Upload and manage service images through ImgBB",
      "Responsive desktop, tablet, and mobile layouts",
    ],

    challenges: [
      "Implementing authentication and authorization",
      "Implementing role-based access control for customers and administrators",
      "Securing protected routes and backend API operations",
      "Enforcing role-based restrictions on appointment management",
      "Integrating Stripe Checkout for secure online payments",
      "Verifying Stripe payment sessions and managing transaction records",
      "Synchronizing appointment and payment data between frontend and backend",
      "Handling API errors and asynchronous operations across the application",
    ],

    improvements: [
      "Add email notifications for appointment confirmations and cancellations",
      "Add customer reviews and service ratings",
      "Improve payment verification and transaction tracking",
      "Introduce customer booking history and analytics",
    ],

    github: "https://github.com/HridoyAhmedRafi/salon-book",
    liveDemo: "https://salon-book-nine.vercel.app",
  },



  {
    id: 2,
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
