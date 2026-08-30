const projects = [
  {
    id: 1,
    title: "Org-Khana",
    category: "FLAGSHIP FULL-STACK",
    description:
      "A modern organic product e-commerce platform featuring authentication, product management, cart, wishlist, reviews, coupons, orders and online payment integration.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
    ],
    role: "FULL-STACK",
    status: "LIVE",
    rating: 92,
    attributes: {
      frontend: 92,
      backend: 94,
      database: 90,
      architecture: 91,
    },
    github: "https://github.com/Adish99/ORG-Food",
    live: "https://org-food.netlify.app/",
    featured: true,
  },

  {
    id: 2,
    title: "WebSocket Live Counter",
    category: "REAL-TIME APPLICATION",
    description:
      "A real-time application demonstrating persistent WebSocket connections, bidirectional communication and server-side broadcasting between connected clients.",
    technologies: [
      "JavaScript",
      "Node.js",
      "WebSocket",
      "HTML",
      "CSS",
    ],
    role: "FULL-STACK",
    status: "COMPLETED",
    rating: 88,
    attributes: {
      frontend: 78,
      backend: 91,
      database: 60,
      architecture: 86,
    },
    github: "https://github.com/Adish99",
    live: "#",
    featured: false,
  },

  {
    id: 3,
    title: "React World Atlas",
    category: "REACT APPLICATION",
    description:
      "An interactive country exploration application built with React, API integration and dynamic routing to display geographical information.",
    technologies: [
      "React",
      "JavaScript",
      "REST API",
      "React Router",
      "CSS",
    ],
    role: "FRONTEND",
    status: "COMPLETED",
    rating: 84,
    attributes: {
      frontend: 90,
      backend: 65,
      database: 55,
      architecture: 78,
    },
    github: "https://github.com/Adish99/WorldAtlas_React",
    live: "https://adishworldatlas.netlify.app/",
    featured: false,
  },

  {
    id: 4,
    title: "MERN Authentication Service",
    category: "BACKEND SYSTEM",
    description:
      "A full authentication service built with the MERN stack covering user registration, login, JWT authentication, protected routes and secure password handling.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
    ],
    role: "FULL-STACK",
    status: "COMPLETED",
    rating: 86,
    attributes: {
      frontend: 75,
      backend: 94,
      database: 88,
      architecture: 90,
    },
    github: "https://github.com/Adish99/Service",
    live: "#",
    featured: false,
  },

  {
    id: 5,
    title: "Weather App",
    category: "API APPLICATION",
    description:
      "A responsive weather application that consumes a weather API and presents real-time weather information through a clean interface.",
    technologies: [
      "React",
      "JavaScript",
      "REST API",
      "CSS",
    ],
    role: "FRONTEND",
    status: "COMPLETED",
    rating: 76,
    attributes: {
      frontend: 82,
      backend: 60,
      database: 40,
      architecture: 65,
    },
    github: "https://github.com/Adish99/Weather-App",
    live: "https://weatherappadish.netlify.app/",
    featured: false,
  },

  {
    id: 6,
    title: "Todo For All",
    category: "PRODUCTIVITY APP",
    description:
      "A simple task management application focused on CRUD operations, component-based architecture and interactive React state management.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Local Storage",
    ],
    role: "FRONTEND",
    status: "COMPLETED",
    rating: 72,
    attributes: {
      frontend: 78,
      backend: 35,
      database: 30,
      architecture: 62,
    },
    github: "https://github.com/Adish99/TodoForAll",
    live: "https://adishtodo.netlify.app/",
    featured: false,
  },
  {
  id: 7,
  title: "Pokémon Cards",
  category: "API APPLICATION",
  description:
    "An interactive Pokémon card application that fetches Pokémon data from an external API and dynamically displays reusable cards with detailed information.",
  technologies: [
    "React",
    "JavaScript",
    "REST API",
    "CSS",
  ],
  role: "FRONTEND",
  status: "COMPLETED",
  rating: 78,
  attributes: {
    frontend: 84,
    backend: 55,
    database: 35,
    architecture: 68,
  },
  github: "#",
  live: "https://adishpokemonsite.netlify.app/",
  featured: false,
},
];

export default projects;