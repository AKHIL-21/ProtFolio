export const contact = {
  name: "Akhil N Muthyala",
  role: "Full Stack Angular & .NET Developer",
  location: "Austin, TX, United States",
  email: "akhilnmuthyala@gmail.com",
  phone: "(859) 979-7595",
  phoneHref: "+18599797595",
  github: "https://github.com/AKHIL-21",
  githubLabel: "github.com/AKHIL-21",
  resumeHref: "/Akhil_N_Muthyala_Resume.docx"
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const typedRoles = [
  "Full-stack Angular developer",
  "Angular + TypeScript architect",
  ".NET / ASP.NET Core engineer",
  "Accessibility-first problem solver",
  "Azure DevOps delivery engineer"
];

export const aboutParagraphs = [
  "I'm a Full Stack Angular Developer with mid-level experience delivering enterprise web applications across government, insurance, and education sectors. My work spans Angular, TypeScript, NgRx, RxJS, ASP.NET Core, C#, SQL Server, and Azure DevOps.",
  "Currently at Deloitte, I'm modernizing the Missouri Child Support System — converting legacy mainframe workflows into secure, accessible ASP.NET Core Razor Pages modules integrated with REST APIs and SQL Server, verified with NVDA and JAWS before every UAT cycle.",
  "I like systems that feel calm to use: clear forms, predictable validation, fast data retrieval, useful error states, and code that another developer can maintain without guesswork."
];

export const profileStats = [
  { value: "20+", label: "legacy screens modernized" },
  { value: "4+", label: "years full-stack delivery" },
  { value: "508", label: "accessibility-verified screens" },
  { value: "3.88", label: "master's GPA" }
];

export const serviceCards = [
  {
    title: "Legacy Modernization",
    description:
      "Convert mainframe and older workflows into maintainable ASP.NET Core Razor Pages modules with accessible forms, clear validation, and stable release paths."
  },
  {
    title: "Angular SPA Delivery",
    description:
      "Build Angular + TypeScript SPAs with feature modules, lazy-loaded routes, reactive forms, NgRx state, RxJS data flows, and Angular Material components."
  },
  {
    title: ".NET API Delivery",
    description:
      "Develop ASP.NET Core APIs, Web API endpoints, service logic, Entity Framework Core data access, and REST integrations with CQRS and MediatR."
  },
  {
    title: "Data & Quality",
    description:
      "Tune SQL queries, stored procedures, and indexes on high-use screens, support Telerik Reporting, and drive defect resolution through QA, UAT, and accessibility checks."
  }
];

export const projectWork = [
  {
    title: "Missouri Child Support System Modernization",
    company: "Deloitte",
    period: "Oct 2024 – Present",
    category: "Enterprise",
    summary:
      "Modernizing legacy child-support mainframe screens into secure, responsive, accessible web modules for case management, payments, diary, notes, and business process workflows.",
    impact: [
      "Converted 20+ mainframe screens into ASP.NET Core Razor Pages modules, shipping each through Dev, QA/QC, and UAT environments.",
      "Engineered Section 508 / WCAG accessibility — keyboard navigation, ARIA attributes, focus management — verified with NVDA and JAWS before UAT review.",
      "Built a library of reusable UI patterns: date pickers, masked inputs, modal overlays, validation controls, search filters, and Razor partials.",
      "Tuned SQL Server stored procedures, indexes, and execution plans on the application's most heavily used screens."
    ],
    stack: [
      "ASP.NET Core",
      "Razor Pages",
      "C#",
      "JavaScript",
      "Bootstrap",
      "SQL Server",
      "REST APIs",
      "Azure DevOps"
    ]
  },
  {
    title: "Surety Bond Management Platform",
    company: "SITEK Inc",
    period: "Aug 2024 – Oct 2024",
    category: "Full Stack",
    summary:
      "Developed a full-stack Angular bond management platform digitizing bond operations — search, details, agent management, payments, renewals, inspections, collateral, and reporting.",
    impact: [
      "Built 8 Angular modules using feature-based module organization, lazy-loaded routes, and reactive forms, giving users full visibility into the bond lifecycle.",
      "Created a reusable Angular component set: reactive forms, data grids, dropdowns, search filters, and custom validators consistent across every workflow.",
      "Integrated Angular screens with RESTful endpoints via HttpClient and RxJS observables, backed by Entity Framework Core data access in C#.",
      "Tuned SQL Server stored procedures and indexes on high-use screens; delivered operational reporting with Telerik Reporting."
    ],
    stack: [
      "Angular",
      "TypeScript",
      "NgRx",
      "RxJS",
      "ASP.NET Core Web API",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "Telerik Reporting"
    ]
  },
  {
    title: "University Academic Application Support",
    company: "Eastern Kentucky University",
    period: "Aug 2023 – May 2024",
    category: "Teaching",
    summary:
      "Supported faculty, classroom applications, student labs, and CS instruction while helping students unblock development issues and build real-world skills.",
    impact: [
      "Mentored students in HTML, CSS, JavaScript, TypeScript, Angular, C#, and object-oriented programming through lab sessions and office hours.",
      "Maintained university academic applications, diagnosing UI, form-validation, configuration, and C# logic issues.",
      "Standardized local development environment setup — Node.js, npm, Angular CLI, Git, Visual Studio, VS Code — reducing onboarding friction.",
      "Led assignment reviews and debugging sessions, helping students resolve browser errors, component structure issues, and async logic."
    ],
    stack: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "C#",
      "Git"
    ]
  },
  {
    title: "Reactivities Activity Management App",
    company: "Dot Spiders",
    period: "Jul 2021 – Mar 2023",
    category: "Full Stack",
    summary:
      "Built a full-stack activity management platform from the ground up — an Angular TypeScript SPA over ASP.NET Core Web API, Entity Framework Core, and SQLite.",
    impact: [
      "Architected a 5-layer solution (API, Application, Domain, Persistence, Client) using MediatR and CQRS, decoupling request handling from business logic.",
      "Built a responsive UI with Angular Material, Angular Router, RxJS, and NgRx for state management, handling routing, server state, and API communication via HttpClient.",
      "Implemented FluentValidation rules and custom exception-handling middleware, standardizing request validation and reducing validation-related defects.",
      "Drove code reviews, refactoring, and bug fixes through a feature-branch, pull-request workflow in Git with review checklists."
    ],
    stack: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "NgRx",
      "RxJS",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQLite",
      "MediatR",
      "CQRS"
    ]
  }
];

export const githubProfile = {
  username: "AKHIL-21",
  url: "https://github.com/AKHIL-21",
  joined: "Sep 2021",
  lastUpdated: "May 22, 2026",
  publicRepos: 10,
  following: 1,
  languageStats: [
    { label: "TypeScript", value: 5 },
    { label: "C#", value: 2 },
    { label: "Java", value: 2 }
  ],
  featuredRepos: [
    {
      name: "ProtFolio",
      language: "TypeScript",
      updated: "May 29, 2026",
      url: "https://github.com/AKHIL-21/ProtFolio",
      homepage: "https://prot-folio-three.vercel.app"
    },
    {
      name: "lendsqr-fe-test",
      language: "TypeScript",
      updated: "May 27, 2026",
      url: "https://github.com/AKHIL-21/lendsqr-fe-test",
      homepage: "https://akhil-muthyala-lendsqr-fe-test.vercel.app"
    },
    {
      name: "React---.NET-PDF-extractor",
      language: "C#",
      updated: "May 22, 2026",
      url: "https://github.com/AKHIL-21/React---.NET-PDF-extractor"
    },
    {
      name: "Reactivities",
      language: "TypeScript",
      updated: "May 14, 2026",
      url: "https://github.com/AKHIL-21/Reactivities"
    }
  ]
};

export const experience = [
  {
    title: "Software Development Engineer 1",
    organization: "Deloitte",
    location: "Austin, TX",
    period: "Oct 2024 – Present",
    summary:
      "Modernizing legacy mainframe screens into ASP.NET Core Razor Pages modules with Section 508 accessibility, SQL Server tuning, reusable UI patterns, and release support across Dev, QA/QC, and UAT environments."
  },
  {
    title: "Software Developer",
    organization: "SITEK Inc",
    location: "Lexington, KY",
    period: "Aug 2024 – Oct 2024",
    summary:
      "Built a full-stack Angular + TypeScript bond management platform over ASP.NET Core Web API and SQL Server — 8 feature modules, NgRx state, RxJS observables, reactive forms, Entity Framework Core, and Telerik Reporting."
  },
  {
    title: "Graduate Assistant Programmer & Application Support Developer",
    organization: "Eastern Kentucky University",
    location: "Richmond, KY",
    period: "Aug 2023 – May 2024",
    summary:
      "Academic application support, student mentoring in Angular, C#, and TypeScript, lab preparation, debugging assistance, and standardized local dev environment setup."
  },
  {
    title: "Software Developer",
    organization: "Dot Spiders",
    location: "Hyderabad, India",
    period: "Jul 2021 – Mar 2023",
    summary:
      "Built a full-stack Angular SPA with ASP.NET Core, Entity Framework Core, and SQLite using MediatR, CQRS, and a clean 5-layer architecture. Drove code quality through PR-based reviews and refactoring."
  }
];

export const education = [
  {
    school: "Eastern Kentucky University",
    credential: "Master's Degree, Computer Science",
    detail: "GPA: 3.88",
    location: "Richmond, KY"
  },
  {
    school: "Parul University",
    credential: "Bachelor's Degree, Computer Science",
    detail: "GPA: 3.75",
    location: "Gujarat, India"
  }
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Developer Associate (AZ-204)",
    focus: "Azure app development, cloud services, authentication, deployment, monitoring, and storage"
  },
  {
    title: "Microsoft ASP.NET Developer Certificate",
    focus: "C#, ASP.NET Core, MVC / Web API, Razor Pages, Entity Framework Core, SQL Server"
  },
  {
    title: "Getting Started with Angular — Edureka (Coursera), 2026",
    focus: "Angular architecture, components, modules, routing, reactive forms, RxJS, and state management"
  },
  {
    title: "Introduction to Software Engineering — IBM (Coursera), 2025",
    focus: "SDLC, Agile, DevOps principles, CI/CD, software architecture, and engineering practices"
  }
];

export const stackGroups = [
  {
    label: "Frontend",
    summary: "Angular-first SPA delivery with TypeScript, NgRx, RxJS, and reactive forms.",
    items: [
      "Angular",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Angular Material",
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery"
    ]
  },
  {
    label: "Backend",
    summary: "Server-side APIs, Razor modules, business logic, and middleware.",
    items: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Razor Pages",
      "Web API",
      "REST APIs",
      "Node.js"
    ]
  },
  {
    label: "Data",
    summary: "SQL-backed workflows, stored procedures, reporting, and tuning.",
    items: [
      "SQL Server",
      "SQLite",
      "SQL",
      "Stored Procedures",
      "Query Optimization",
      "Entity Framework Core"
    ]
  },
  {
    label: "Delivery",
    summary: "Team workflows, CI/CD pipelines, release management, and secure delivery.",
    items: [
      "Azure DevOps",
      "Git",
      "GitHub",
      "CI/CD",
      "Jira",
      "Visual Studio",
      "VS Code",
      "Agile Delivery"
    ]
  },
  {
    label: "Libraries",
    summary: "Angular ecosystem tooling, validation, mapping, API patterns, and reporting.",
    items: [
      "HttpClient",
      "MediatR",
      "CQRS",
      "AutoMapper",
      "FluentValidation",
      "JWT",
      "Telerik Reporting",
      "API Integration"
    ]
  },
  {
    label: "Accessibility & AI",
    summary: "Accessibility verification habits and AI-assisted development tools.",
    items: [
      "Section 508",
      "WCAG",
      "ARIA",
      "JAWS",
      "NVDA",
      "Claude Code",
      "AI-Assisted Development",
      "Prompt Engineering"
    ]
  }
];

export const workflowNotes = [
  "Clarify workflow rules and business logic before designing screens.",
  "Prefer reusable Angular components with visible states and keyboard support.",
  "Keep API, data-access, and validation logic aligned with the business process.",
  "Validate releases through QA, UAT, accessibility checks, and documentation."
];

export const currently = [
  {
    label: "Building",
    value: "Missouri Child Support System",
    detail: "Enterprise modernization at Deloitte — converting 20+ legacy mainframe screens into accessible ASP.NET Core / Razor Pages modules"
  },
  {
    label: "Exploring",
    value: "AI-Assisted Development",
    detail: "Prompt engineering, Claude Code workflows, and AI-augmented code review in production-grade Angular and .NET projects"
  },
  {
    label: "Open to",
    value: "Full-Stack / Angular Roles",
    detail: "Engineering positions where Angular architecture, backend reliability, accessibility, and product quality are first-class concerns"
  }
];
