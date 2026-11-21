export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  image?: string;
  verifyUrl?: string;
  featured?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Lanh Phalla",
    shortName: "Lanh Phalla",
    role: "Computer Science Student | Year 3 at RUPP",
    location: "Phnom Penh, Cambodia",
    status: "Open to Opportunities",

    bio: "Computer Science student passionate about backend engineering and full-stack development. Focused on building reliable web applications, designing clean APIs, and continuously improving software architecture and development skills.",

    heroThesis: "Backend Developer & Full-Stack Developer",
  },

  about: {
    headline: "Building reliable software through thoughtful engineering.",

    narrative: [
      "I'm a Computer Science student at the Royal University of Phnom Penh with a strong interest in backend development and full-stack engineering. I enjoy understanding how systems work, designing clean APIs, and building applications that solve real-world problems.",

      "My development journey combines university studies, self-learning, and hands-on projects. I've worked with technologies such as Node.js, NestJS, Spring Boot, React, and relational databases. I'm continuously improving my skills in software architecture, database design, security, and deployment.",
    ],

    blueprintCards: [
      {
        tag: "EDUCATION // 01",
        label: "Computer Science",
        detail: "Royal University of Phnom Penh",
        subtext: "Third-Year Student",
      },
      {
        tag: "FOCUS // 02",
        label: "Backend Engineering",
        detail: "Node.js, Express, NestJS",
        subtext: "API Design & Server-side Development",
      },
      {
        tag: "TECHNOLOGY // 03",
        label: "Full-Stack Development",
        detail: "React, Spring Boot, TypeScript",
        subtext: "MySQL, PostgreSQL & REST APIs",
      },
      {
        tag: "MINDSET // 04",
        label: "Continuous Learning",
        detail: "Architecture & Clean Code",
        subtext: "Security, Docker & Deployment",
      },
    ],
  },

  skills: [
    {
      title: "Frontend",
      subtitle:
        "Modern client-side engineering, responsive frameworks, and reactive UI architecture.",
      skills: [
        { name: "HTML5", icon: "/icons/html5.svg" },
        { name: "CSS3", icon: "/icons/css3.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
        { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      ],
    },
    {
      title: "Backend",
      subtitle:
        "Scalable server platforms, RESTful APIs, enterprise frameworks, and microservices.",
      skills: [
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Express.js", icon: "/icons/express.svg" },
        { name: "NestJS", icon: "/icons/nestjs.svg" },
        { name: "PHP", icon: "/icons/php.svg" },
        { name: "Laravel", icon: "/icons/laravel.svg" },
        { name: "Spring Boot", icon: "/icons/spring.svg" },
      ],
    },
    {
      title: "Database & ORM",
      subtitle:
        "Relational data modeling, schema migrations, and optimized persistence layers.",
      skills: [
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "Prisma", icon: "/icons/prisma.svg" },
        { name: "Flyway", icon: "/icons/flyway.svg" },
      ],
    },
    {
      title: "Development Tools",
      subtitle:
        "Version control, API documentation, testing suites, and containerized workflows.",
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "GitHub", icon: "/icons/github.svg" },
        { name: "Postman", icon: "/icons/postman.svg" },
        { name: "Swagger", icon: "/icons/swagger.svg" },
        { name: "Docker", icon: "/icons/docker.svg" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "lomor-ecommerce",
      title: "LOMOR — Modern Fashion E-Commerce",
      category: "E-Commerce Platform",
      year: "2026",
      summary:
        "A modern full-stack fashion e-commerce platform featuring secure authentication, product variant management, inventory tracking, promotions, and integrated order fulfillment.",
      description:
        "Designed and developed a full-stack fashion e-commerce platform with a React and TypeScript storefront and a NestJS REST API. Implemented secure JWT-based authentication with refresh token rotation, PostgreSQL database management using Prisma ORM, advanced product variant and inventory management, shopping cart, wishlist, checkout, coupon promotions, Cash on Delivery (COD), PayWay payment integration, PDF receipts, and role-based administration with delivery staff management.",
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "JWT Authentication",
        "Tailwind CSS",
        "Cloudinary",
        "PayWay",
      ],
      image: "/project/clothes.png",
      liveUrl: "https://your-lomor-domain.com",
      githubUrl: "https://github.com/your-username/your-lomor-repository",
      featured: true,
    },

    {
      id: "pos-node",
      title: "POS Store Management System",
      category: "Business System Management",
      year: "2026",
      summary:
        "Full-stack retail point-of-sale system for managing sales, inventory, customers, employees, and daily business operations.",
      description:
        "Developed a comprehensive retail POS management system using React, Node.js, Express, and MySQL. Implemented transactional checkout with inventory locking, split payments, customer membership management, role-based access control, purchase management, business analytics, and automated low-stock notifications.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "REST API",
        "JWT",
        "RBAC",
        "Tailwind CSS",
        "Docker",
      ],
      image: "/project/pos-node.png",
      images: [
        "/project/pos-node-1.png",
        "/project/pos-node-2.png",
        "/project/pos-node-3.png",
        "/project/pos-node-4.png",
        "/project/pos-node-5.png",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },

    {
      id: "zenith-ui",
      title: "Zenith Design System",
      category: "UI/UX & Component Architecture",
      year: "2025",
      summary:
        "Accessible, atomic component library with brutalist aesthetic tokens.",
      description:
        "Created an open-source design system adopted by 12+ internal micro-frontends, featuring strict WCAG 2.1 AA compliance, theme variables, and zero-runtime CSS footprint.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Storybook",
        "Accessibility",
      ],
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://example.com/zenith-ui",
      githubUrl: "https://github.com/example/zenith-ui",
      featured: true,
    },
    {
      id: "omni-scribe",
      title: "OmniScribe AI Workspace",
      category: "Productivity & Semantic Search",
      year: "2025",
      summary:
        "Knowledge management tool with local-first vector search and RAG synthesis.",
      description:
        "Developed a modern note-taking application powered by embedded local embeddings and cloud LLM synthesis, enabling instant semantic search over 100k+ personal documents.",
      tags: ["Next.js", "LangChain", "OpenAI API", "Pinecone", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://example.com/omni-scribe",
      githubUrl: "https://github.com/example/omni-scribe",
      featured: true,
    },
    {
      id: "kinetic-3d",
      title: "Kinetic Interactive Showcase",
      category: "Creative Coding & 3D WebGL",
      year: "2025",
      summary:
        "Interactive procedural physics simulation running in WebGL canvas.",
      description:
        "Crafted an interactive physics sandbox rendering 10,000 instanced particle meshes with custom vertex shaders and dynamic audio-reactive ripple effects.",
      tags: [
        "Three.js",
        "GLSL Shaders",
        "Web Audio API",
        "TypeScript",
        "Canvas",
      ],
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://example.com/kinetic-3d",
      githubUrl: "https://github.com/example/kinetic-3d",
      featured: false,
    },
    {
      id: "pulse-guard",
      title: "PulseGuard Security Auditor",
      category: "DevSecOps & CLI Tool",
      year: "2024",
      summary:
        "Automated container vulnerability scanner and compliance reporter.",
      description:
        "Command-line utility and GitHub Action that audits multi-stage Docker builds, scans dependency SBOMs against CVE databases, and alerts engineering teams via Webhooks.",
      tags: ["Python", "Docker API", "GitHub Actions", "CLI", "Security"],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://example.com/pulse-guard",
      githubUrl: "https://github.com/example/pulse-guard",
      featured: false,
    },
  ] as Project[],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2020 — 2024",
      description:
        "Dean's Honors List. Concentrated in Systems Architecture, Distributed Operating Systems, and Machine Learning.",
      highlights: [
        "Head Teaching Assistant for CS61B (Data Structures & Algorithms)",
        "Published undergraduate research on Byzantine fault-tolerant consensus",
        "President of the Berkeley Open Source Software Society",
      ],
    },
  ] as Education[],

  // Replace these sample credentials with your own certificate details.

  certificates: [
    {
      id: "cert-frontend-internship",
      title: "Internship in Frontend Development",
      issuer: "KRU IT SOLUTION",
      date: "June 2026",
      credentialId: "",
      description:
        "Completed a practical frontend development internship focused on transforming UI designs into functional and responsive web interfaces. Gained hands-on experience working with frontend technologies, implementing interactive components, organizing code, debugging interface issues, and understanding real-world development workflows. This experience strengthened my ability to build user-friendly web applications while improving my problem-solving and collaboration skills.",
      skills: [
        "Frontend Development",
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
      image: "/certificates/intern.png",
      verifyUrl: "",
      featured: true,
    },
    {
      id: "cert-java-spring",
      title: "Basic / Advanced Java & Spring Boot",
      issuer: "ETEC CENTER",
      date: "March 2026",
      credentialId: "",
      description:
        "Completed structured training in Java programming and Spring Boot, covering fundamental programming concepts, object-oriented programming, and backend application development. Studied how to organize application logic, work with classes and objects, handle data, and build server-side applications using the Spring Boot framework. Developed a stronger understanding of Java-based backend development and the fundamentals of building maintainable applications.",
      skills: [
        "Java",
        "Object-Oriented Programming",
        "Spring Boot",
        "REST APIs",
        "Backend Development",
      ],
      image: "/certificates/spring.png",
      verifyUrl: "",
    },
    {
      id: "cert-php-laravel-mysql",
      title: "Basic / Advanced PHP, Laravel & MySQL",
      issuer: "ETEC CENTER",
      date: "January 2026",
      credentialId: "",
      description:
        "Completed comprehensive training in PHP, Laravel, and MySQL, focusing on the development of dynamic, database-driven web applications. Learned backend programming concepts, Laravel application structure, routing, database operations, and the integration of application logic with relational databases. Strengthened practical understanding of server-side development and how to build organized web applications using the PHP ecosystem.",
      skills: [
        "PHP",
        "Laravel",
        "MySQL",
        "Database Design",
        "Backend Development",
      ],
      image: "/certificates/laravel.png",
      verifyUrl: "",
    },
    {
      id: "cert-react-tailwind",
      title: "Frontend Development with React.js & Tailwind CSS",
      issuer: "ETEC CENTER",
      date: "November 2025",
      credentialId: "",
      description:
        "Completed practical frontend development training focused on building modern web interfaces with React.js and Tailwind CSS. Studied component-based architecture, reusable UI components, state-driven interfaces, utility-first styling, and responsive layouts. Gained a clearer understanding of how to structure frontend applications and create consistent user experiences across different screen sizes.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Component-Based Development",
        "Responsive UI",
      ],
      image: "/certificates/front.png",
      verifyUrl: "",
    },
    {
      id: "cert-html-css-tailwind",
      title: "Web Design with HTML, CSS & Tailwind CSS",
      issuer: "ETEC CENTER",
      date: "August 2025",
      credentialId: "",
      description:
        "Completed web design training covering the core technologies used to create and style modern websites. Studied semantic HTML for page structure, CSS for visual presentation and layouts, and Tailwind CSS for efficient utility-based styling. Developed an understanding of responsive design principles, page composition, spacing, typography, and creating consistent interfaces for different devices.",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Web Design",
        "Responsive Design",
      ],
      image: "/certificates/webdesign.png",
      verifyUrl: "",
    },
    {
      id: "cert-cpp-algorithms",
      title: "Basic / Advanced C++ Programming & Algorithms",
      issuer: "ETEC CENTER",
      date: "May 2025",
      credentialId: "",
      description:
        "Completed foundational and advanced C++ programming training with an emphasis on logical thinking, problem-solving, and algorithmic concepts. Studied programming syntax, variables, control structures, functions, object-oriented programming, and fundamental data structures and algorithms. Improved the ability to break down programming problems, develop logical solutions, and understand the principles behind efficient software development.",
      skills: [
        "C++",
        "Programming Fundamentals",
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms",
      ],
      image: "/certificates/cpp.png",
      verifyUrl: "",
    },
  ] as Certificate[],

  contact: {
    heading: "Let's work together.",
    subheading:
      "Available for engineering roles, technical advisory, and high-impact software projects.",
    email: "alexander.chen.dev@example.com",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
    location: "San Francisco, CA / Remote",
  },
};
