export interface ProjectImage {
  src: string;
  label: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: ProjectImage[];
  includes?: string[];
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
  logoUrl?: string;
  degresstype: string;
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
      gallery: [
        {
          src: "/project/gallery/lomor-ecommerce/01.svg",
          label: "Admin Overview",
          caption:
            "Orders, revenue, and fulfillment metrics in a single control center.",
        },
        {
          src: "/project/gallery/lomor-ecommerce/02.svg",
          label: "Product Catalog",
          caption: "Product variants, stock levels, and category management.",
        },
        {
          src: "/project/gallery/lomor-ecommerce/03.svg",
          label: "Order Management",
          caption:
            "Fulfillment queue with statuses, totals, and delivery assignment.",
        },
        {
          src: "/project/gallery/lomor-ecommerce/04.svg",
          label: "Mobile Storefront",
          caption:
            "Responsive shopping and checkout experience across devices.",
        },
      ],

      includes: [
        "Secure JWT authentication with refresh-token rotation and session management",
        "Advanced product variants, category management, and real-time inventory tracking",
        "Shopping cart, wishlist, address management, and complete checkout workflow",
        "Flexible coupon system with automatic discounts and free shipping promotions",
        "PayWay payment integration, Cash on Delivery, and downloadable PDF receipts",
        "Role-based admin dashboard with product, order, customer, and delivery management",
        "Delivery assignment, order tracking, and COD collection reconciliation",
        "Cloudinary integration for product image storage and management",
      ],

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
      gallery: [
        {
          src: "/project/gallery/pos-node/01.svg",
          label: "Store Overview",
          caption: "Daily sales, transactions, and stock alerts at a glance.",
        },
        {
          src: "/project/gallery/pos-node/02.svg",
          label: "Inventory Control",
          caption: "Live stock levels with reorder and low-stock indicators.",
        },
        {
          src: "/project/gallery/pos-node/03.svg",
          label: "Checkout Terminal",
          caption:
            "Fast product selection and transactional point-of-sale flow.",
        },
        {
          src: "/project/gallery/pos-node/04.svg",
          label: "Sales Analytics",
          caption: "Revenue, basket size, and performance reporting.",
        },
      ],

      includes: [
        "Transactional POS checkout with cart management and inventory locking",
        "Product and category management with barcode generation and search",
        "Customer membership, purchase history, and discount management",
        "Supplier management and purchase order processing",
        "Real-time inventory tracking and stock movement management",
        "Employee management and role-based access control (RBAC)",
        "Sales, profit, and inventory analytics dashboards",
        "Expense management and financial reporting",
        "In-app notifications and automated low-stock Telegram alerts",
        "Multi-currency support for USD and KHR",
        "Responsive point-of-sale interface",
      ],

      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "teasjul",
      title: "TeasJul — Room Rental Management System",
      category: "Full-Stack Web Application",
      year: "2026",
      summary:
        "A full-stack rental management platform for managing houses, rooms, tenants, rental contracts, utilities, invoices, and payments.",
      description:
        "Developed a full-stack Room Rental Management System that helps property owners and managers manage rental operations through a centralized platform. Features include house and room management, tenant management, rental contracts, utility tracking, automated monthly invoicing, partial payments, PayWay KHQR integration, role-based access control, dashboards, and PDF reports. Built with React, TypeScript, Spring Boot, Java, and MySQL.",
      tags: [
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "MySQL",
        "Spring Security",
        "JWT",
        "Full-Stack Development",
      ],
      image: "/project/teasjul.png",
      gallery: [
        {
          src: "/project/gallery/teasjul/01.svg",
          label: "Portfolio Overview",
          caption:
            "Occupancy, contracts, and rental activity across properties.",
        },
        {
          src: "/project/gallery/teasjul/02.svg",
          label: "Tenants & Contracts",
          caption: "Centralized tenant records, rooms, and lease agreements.",
        },
        {
          src: "/project/gallery/teasjul/03.svg",
          label: "Invoices & Payments",
          caption: "Monthly utility invoicing with KHQR payment tracking.",
        },
        {
          src: "/project/gallery/teasjul/04.svg",
          label: "Tenant Portal",
          caption: "Self-service access to contracts, invoices, and payments.",
        },
      ],

      includes: [
        "Multi-owner rental property management and data isolation",
        "Super Admin owner account management and access control",
        "House, room, and reusable room type management",
        "Cloudinary integration for property and room image storage",
        "Manager house assignment and permission management",
        "Tenant management and existing rental data onboarding",
        "Rental contract creation and management",
        "Water and electricity meter management",
        "Monthly utility readings and automated usage calculations",
        "Historical utility rate management",
        "Automated monthly invoice generation and item management",
        "Partial payment support and payment history tracking",
        "KHQR payment integration through PayWay",
        "Payment callbacks and transaction verification",
        "Role-based dashboards for Super Admins, owners, managers, and tenants",
        "Monthly rental analytics and financial reporting",
        "PDF invoice and report generation",
        "Database-backed notification system",
        "Role-based access control (RBAC)",
        "Public room listings with Super Admin approval workflow",
        "AI-powered rental assistant",
        "Responsive property management interface",
      ],

      liveUrl: "no",
      githubUrl: "YOUR_TEASJUL_GITHUB_URL",
      featured: true,
    },

    {
      id: "pos-pharmacy",
      title: "POS Pharmacy Management System",
      category: "Business Management & Healthcare",
      year: "2026",
      summary:
        "Full-stack pharmacy management platform for inventory control, sales processing, and business analytics.",
      description:
        "Developed a pharmacy management system with Laravel and React, enabling efficient medicine inventory tracking, point-of-sale transactions, supplier management, and sales reporting. Implemented JWT authentication, database transactions for inventory consistency, and an analytics dashboard for monitoring pharmacy operations.",
      tags: [
        "React 18",
        "Laravel 10",
        "MySQL 8",
        "Tailwind CSS",
        "Chart.js",
        "RESTful API",
        "JWT Authentication",
      ],
      image: "/project/pharmacy.png",
      gallery: [
        {
          src: "/project/gallery/pos-pharmacy/01.svg",
          label: "Operations Dashboard",
          caption: "Prescriptions, daily sales, and expiring stock monitoring.",
        },
        {
          src: "/project/gallery/pos-pharmacy/02.svg",
          label: "Medicine Inventory",
          caption:
            "Batch-level stock control with expiry and supplier tracking.",
        },
        {
          src: "/project/gallery/pos-pharmacy/03.svg",
          label: "Sales Terminal",
          caption: "Quick dispensing and point-of-sale checkout workflow.",
        },
        {
          src: "/project/gallery/pos-pharmacy/04.svg",
          label: "Sales Analytics",
          caption:
            "Category performance and revenue reporting for the business.",
        },
      ],

      includes: [
        "Medicine inventory and stock management",
        "Point-of-sale (POS) system for pharmacy sales",
        "Supplier management and medicine purchasing",
        "Medicine category management",
        "Authentication and role-based authorization",
        "Staff management and access control",
        "Sales tracking and reporting",
        "Dashboard analytics and business performance monitoring",
      ],

      liveUrl: "",
      githubUrl: "",
      featured: true,
    },

    {
      id: "job-portal",
      title: "Job Portal Platform",
      category: "Full-Stack Web Application",
      year: "2026",
      summary:
        "Modern recruitment platform connecting employers and job seekers through streamlined hiring workflows.",
      description:
        "Developed a full-stack recruitment platform featuring role-based dashboards, Google OAuth authentication, job posting and discovery, application management, and Bakong KHQR payment integration. Built with React and Laravel, supported by a RESTful API and MySQL database.",
      tags: [
        "React 18",
        "Laravel 10",
        "MySQL 8",
        "Tailwind CSS",
        "RESTful API",
        "JWT Authentication",
        "Google OAuth 2.0",
        "Bakong KHQR",
      ],
      image: "/project/job.png",
      gallery: [
        {
          src: "/project/gallery/job-portal/01.svg",
          label: "Job Discovery",
          caption:
            "Browse available opportunities with job search, filtering, and detailed job listings.",
        },
        {
          src: "/project/gallery/job-portal/02.svg",
          label: "Employer Dashboard",
          caption:
            "Manage job postings, review applicants, and monitor recruitment activities.",
        },
        {
          src: "/project/gallery/job-portal/03.svg",
          label: "Application Management",
          caption:
            "Track submitted applications and manage recruitment progress through application statuses.",
        },
        {
          src: "/project/gallery/job-portal/04.svg",
          label: "Payment Integration",
          caption:
            "Bakong KHQR payment integration for convenient digital payment processing.",
        },
      ],

      includes: [
        "Google OAuth 2.0 authentication",
        "Bakong KHQR payment integration",
        "Role-based authentication and authorization",
        "Job posting, editing, and management",
        "Job search, filtering, and discovery",
        "Job application submission and management",
        "Employer dashboard and recruitment management",
        "Admin analytics dashboard and platform monitoring",
      ],

      liveUrl: "",
      githubUrl: "",
      featured: false,
    },

    // {
    //   id: "pulse-guard",
    //   title: "PulseGuard Security Auditor",
    //   category: "DevSecOps & CLI Tool",
    //   year: "2024",
    //   summary:
    //     "Automated container vulnerability scanner and compliance reporter.",
    //   description:
    //     "Command-line utility and GitHub Action that audits multi-stage Docker builds, scans dependency SBOMs against CVE databases, and alerts engineering teams via Webhooks.",
    //   tags: ["Python", "Docker API", "GitHub Actions", "CLI", "Security"],
    //   image: "/project/portfoliov3.png",
    //   gallery: [
    //     {
    //       src: "/project/gallery/pulse-guard/01.svg",
    //       label: "CLI Scan Report",
    //       caption:
    //         "Dependency graph resolution, SBOM generation, and CVE checks.",
    //     },
    //     {
    //       src: "/project/gallery/pulse-guard/02.svg",
    //       label: "Security Dashboard",
    //       caption: "Scan volume, findings, and compliance in one view.",
    //     },
    //     {
    //       src: "/project/gallery/pulse-guard/03.svg",
    //       label: "Vulnerability Report",
    //       caption: "Prioritized CVE findings with severity and fix guidance.",
    //     },
    //     {
    //       src: "/project/gallery/pulse-guard/04.svg",
    //       label: "CI Integration",
    //       caption: "Automated GitHub Action checks with webhook alerting.",
    //     },
    //   ],
    //   includes: [
    //     "Multi-stage Docker build auditing",
    //     "Dependency SBOM generation",
    //     "CVE database vulnerability scanning",
    //     "Policy compliance checks",
    //     "Webhook alerting for engineering teams",
    //     "GitHub Action integration for CI pipelines",
    //   ],
    //   liveUrl: "https://example.com/pulse-guard",
    //   githubUrl: "https://github.com/example/pulse-guard",
    //   featured: false,
    // },
  ] as Project[],

 education: [
  {
    id: "edu-1",
    degresstype : "DEGREE PROGRAM",
    degree: "Bachelor's Degree in Computer Science",
    institution: "Royal University of Phnom Penh",
    location: "Phnom Penh, Cambodia",
    period: "2025 — Present", // Verify enrollment year
    description:
      "Third-year Computer Science student building a strong foundation in software engineering, algorithms, database systems, computer networking, and full-stack web development.",
    highlights: [
      "Data Structures, Algorithms, and Object-Oriented Programming",
      "Database Systems Design, SQL, and Database Management",
      "Computer Networking, Network Security, and System Administration",
      "Full-Stack Web Development with Frontend and Backend Technologies",
      "Software Engineering, Information Systems Analysis, and Design",
    ],
    logoUrl: "/logo/rupp.png",
  },

  {
    id: "edu-2",
    degresstype : "Training Program",
    degree: "Professional Software Development Training",
    institution: "ETEC Center",
    location: "Phnom Penh, Cambodia",
    period: "2025 — 2026", // Verify actual enrollment period
    description:
      "Practical software development training focused on programming fundamentals, modern frontend development, and backend application engineering. Gaining hands-on experience building web applications using C++, React, PHP, Laravel, and Spring Boot.",
    highlights: [
      "C++ Programming, Object-Oriented Programming, and Problem Solving",
      "Frontend Development with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React",
      "Backend Development with PHP and Laravel Framework",
      "Java and Spring Boot for RESTful API Development",
      "Practical Programming Exercises and Project-Based Learning",
    ],
    logoUrl: "/logo/etec.png",
  },
] as Education[],
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
    email: "phallalanh9@gmail.com",
    github: "https://github.com/lanhphalla030907",
    facebook: "https://www.facebook.com/share/1T8gp5UERJ/?mibextid=wwXIfr",
    telegram: "https://t.me/lanhphalla03",
    location: "Phnom Penh, Cambodia",
  },
};
