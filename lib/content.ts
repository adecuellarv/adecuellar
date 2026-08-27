export type Lang = 'es' | 'en'

export const CONTACT = {
  email: 'ade.cuellar91@gmail.com',
  phone: '4481025008',
  github: 'https://github.com/adecuellarv',
}

export const SKILLS: { name: string; level: number }[] = [
  { name: 'JavaScript', level: 92 },
  { name: 'ReactJS', level: 91 },
  { name: 'Next.js', level: 88 },
  { name: 'PHP', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'Laravel', level: 86 },
  { name: 'Tailwind', level: 85 },
  { name: 'GraphQL', level: 82 },
  { name: 'VueJS', level: 80 },
  { name: 'Node.js', level: 80 },
  { name: 'AWS Lambda', level: 73 },
  { name: 'AWS DynamoDB', level: 73 },
  { name: 'Firebase', level: 73 },
  { name: 'React Native', level: 70 },
  { name: 'Python', level: 65 },
  { name: 'C# .NET', level: 60 },
  { name: 'Angular', level: 60 },
]

export type SkillCategory = {
  key: string
  titleEs: string
  titleEn: string
  items: string[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: 'frontend',
    titleEs: 'Frontend',
    titleEn: 'Frontend',
    items: [
      'React JS',
      'Next.js',
      'VueJS',
      'Angular',
      'React Native',
      'Electron JS',
      'PWA',
      'HTML5 / CSS3',
      'Tailwind',
      'Bootstrap',
      'Material UI',
      'PrimeReact',
    ],
  },
  {
    key: 'backend',
    titleEs: 'Backend',
    titleEn: 'Backend',
    items: [
      'Node.js',
      'Express',
      'PHP',
      'Laravel',
      'CodeIgniter',
      'C# ASP.NET',
      'Java Spring Boot',
      'Python',
      'Django',
    ],
  },
  {
    key: 'cloud',
    titleEs: 'Cloud & DevOps',
    titleEn: 'Cloud & DevOps',
    items: ['AWS Lambda', 'DynamoDB', 'S3', 'AWS SDK', 'Firebase Services', 'CI/CD'],
  },
  {
    key: 'db',
    titleEs: 'Bases de datos',
    titleEn: 'Databases',
    items: ['MySQL', 'SQL Server', 'PostgreSQL', 'DynamoDB', 'Sequelize', 'Entity Framework'],
  },
  {
    key: 'apis',
    titleEs: 'APIs & Otros',
    titleEn: 'APIs & Other',
    items: ['GraphQL', 'RESTful APIs', 'Redux', 'Jest', 'Git', 'WordPress', 'Shopify'],
  },
]

export const MARQUEE = [
  'React',
  'Vue',
  'Node.js',
  'Laravel',
  'PHP',
  'AWS',
  'Firebase',
  'TypeScript',
  'Tailwind',
  'Angular',
  '.Net',
  'React Native',
]

export type Category = 'FullStack' | 'Frontend'

export type VisualKind =
  | 'payments'
  | 'legal'
  | 'desktop'
  | 'alert'
  | 'pharmacy'
  | 'invoice'
  | 'dataflow'
  | 'jobboard'
  | 'cms'
  | 'elearning'
  | 'website'

export type Project = {
  title: string
  category: Category
  image?: string
  visual?: VisualKind
  company?: string
  period?: string
  url?: string
  descEs: string
  descEn: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'Chatbot con IA',
    category: 'FullStack',
    image: '/images/chatbot.png',
    company: 'Adeev (Freelance)',
    tags: ['React', 'Node.js', 'Laravel', 'OpenAI', 'AWS Lambda', 'DynamoDB', 'S3'],
    descEs:
      'Chatbot de reclutamiento especializado que conversa con el usuario para recopilar su información, guardarla en la base de datos y aplicarla a la vacante. Conectado a ChatGPT para una interacción más natural y menos robótica.',
    descEn:
      'Specialized recruitment chatbot that engages in conversation with the user to collect their information, store it in the database, and apply it to the job vacancy. Connected to ChatGPT for a friendlier, less robotic interaction.',
  },
  {
    title: 'Salón de belleza',
    category: 'FullStack',
    image: '/images/salon.png',
    url: 'https://thebesthairsalons.mx/',
    company: 'Adeev (Freelance)',
    tags: ['Laravel', 'Vue', 'MySQL'],
    descEs:
      'Software para la gestión de un salón de belleza: agenda de citas, pago de empleados, venta de productos y estados de cuenta.',
    descEn:
      'Software for beauty salon management, including appointment scheduling, employee payments, product sales, and account statements.',
  },
  {
    title: 'Productor Jerry Ordoñez',
    category: 'Frontend',
    image: '/images/jerry.png',
    url: 'https://www.jerryordonez.com/',
    company: 'Adeev (Freelance)',
    tags: ['React', 'Three.js', 'GSAP'],
    descEs:
      'Sitio interactivo que simula estar dentro de un estudio de música, donde puedes explorar áreas interactivas de forma divertida.',
    descEn:
      'Interactive website that simulates being in a music studio, where you can have fun exploring interactive areas.',
  },
  {
    title: 'Greenlander',
    category: 'Frontend',
    image: '/images/greenlander.png',
    url: 'https://greenlander.com.mx/',
    company: 'Adeev (Freelance)',
    tags: ['Shopify', 'Liquid'],
    descEs: 'E-commerce construido con Shopify.',
    descEn: 'E-commerce built with Shopify.',
  },
  {
    title: 'Generra',
    category: 'Frontend',
    image: '/images/generra.png',
    url: 'https://generra.com.mx/',
    company: 'Adeev (Freelance)',
    tags: ['Shopify', 'Liquid'],
    descEs: 'E-commerce construido con Shopify.',
    descEn: 'E-commerce built with Shopify.',
  },
  {
    title: 'leaseandfleet',
    category: 'Frontend',
    image: '/images/leaseandfleet.png',
    url: 'https://www.leaseandfleet.com/',
    company: 'Adeev (Freelance)',
    tags: ['WordPress', 'PHP'],
    descEs: 'Sitio de catálogo informativo construido con WordPress.',
    descEn: 'Informational catalog website built with WordPress.',
  },
  {
    title: 'Delivery Food',
    category: 'FullStack',
    image: '/images/enfa.png',
    company: 'Proyecto personal',
    tags: ['React Native', 'Firebase'],
    descEs: 'En Fa es un proyecto personal orientado a convertirse en un servicio de entrega de comida.',
    descEn: 'En Fa is a personal project aimed at becoming a food delivery service.',
  },
  {
    title: 'Gestión de proveedor de internet',
    category: 'FullStack',
    image: '/images/internet.png',
    company: 'Adeev (Freelance)',
    tags: ['Laravel', 'MySQL'],
    descEs: 'Sistema para gestionar pagos de clientes, así como reportes de sus servicios.',
    descEn: 'System for managing customer payments, as well as reports on their services.',
  },
  {
    title: 'Piter',
    category: 'FullStack',
    image: '/images/piter.png',
    company: 'Adeev (Freelance)',
    tags: ['React Native', 'Firebase', 'APIs REST', 'Geolocalización'],
    descEs:
      'Aplicación móvil de directorio de negocios con geolocalización, filtros y búsqueda avanzada, y consumo de APIs REST para mostrar productos y servicios cercanos al usuario.',
    descEn:
      'Mobile business-directory app with geolocation, advanced search filters, and REST API integration to surface nearby products and services.',
  },
  {
    title: 'Control Central Car',
    category: 'FullStack',
    image: '/images/ccc.png',
    company: 'Adeev (Freelance)',
    tags: ['React', 'Supabase', 'React Native'],
    descEs:
      'Plataforma para la gestión de talleres mecánicos: control de entrada de vehículos, seguimiento de servicios, diagnósticos técnicos y administración de clientes.',
    descEn:
      'Platform for managing auto repair shops: vehicle intake tracking, service follow-up, technical diagnostics, and customer administration.',
  },
  {
    title: 'BudsiDesk',
    category: 'FullStack',
    image: '/images/budsidesk.png',
    company: 'Adeev (Freelance)',
    tags: ['Python', 'Django', 'PostgreSQL'],
    descEs:
      'Plataforma de gestión empresarial con facturación, control de gastos, roles y permisos, y reportes financieros para pequeñas y medianas empresas.',
    descEn:
      'Business management platform with invoicing, expense tracking, roles and permissions, and financial reporting for small and medium businesses.',
  },
  {
    title: 'Pasarelas de pago',
    category: 'FullStack',
    visual: 'payments',
    company: 'Adeev (Freelance)',
    tags: ['PayPal', 'Stripe', 'MercadoPago', 'OpenPay'],
    descEs:
      'Integración de múltiples pasarelas de pago (PayPal, Stripe, MercadoPago y OpenPay) para clientes de e-commerce y facturación, con manejo de webhooks y conciliación de transacciones.',
    descEn:
      'Integration of multiple payment gateways (PayPal, Stripe, MercadoPago, and OpenPay) for e-commerce and billing clients, including webhook handling and transaction reconciliation.',
  },
  {
    title: 'Gestión de demandas · Pemex',
    category: 'Frontend',
    visual: 'legal',
    company: 'Adeev (Freelance)',
    tags: ['VueJS'],
    descEs:
      'Frontend del sistema de gestión de demandas legales para Pemex, construido con VueJS: captura de casos, seguimiento de estatus y consulta documental.',
    descEn:
      'Frontend for a legal case-management system for Pemex, built with VueJS: case intake, status tracking, and document lookup.',
  },
  {
    title: 'Apps de escritorio · Hasbro City y KidZania',
    category: 'FullStack',
    visual: 'desktop',
    company: 'Adeev (Freelance)',
    tags: ['Electron JS'],
    descEs:
      'Aplicaciones de escritorio con Electron para la operación en piso de Hasbro City y KidZania, corriendo en los kioscos de los parques.',
    descEn:
      'Desktop applications built with Electron for on-floor operations at Hasbro City and KidZania, running on the parks’ kiosks.',
  },
  {
    title: 'Alertas de emergencia en campus',
    category: 'FullStack',
    visual: 'alert',
    company: 'Adeev (Freelance)',
    tags: ['Laravel', 'APIs móviles'],
    descEs:
      'Sistema de alertas de emergencia para campus universitarios, con Laravel en el backend y APIs móviles para notificar a la comunidad en tiempo real.',
    descEn:
      'Emergency alert system for university campuses, with a Laravel backend and mobile APIs to notify the community in real time.',
  },
  {
    title: 'APIs de farmacias',
    category: 'FullStack',
    visual: 'pharmacy',
    company: 'Adeev (Freelance)',
    tags: ['Java'],
    descEs:
      'APIs en Java para administrar el estatus de pedidos en un sistema de farmacias, desde la creación de la orden hasta la entrega.',
    descEn:
      'Java APIs for managing order status across a pharmacy system, from order creation through delivery.',
  },
  {
    title: 'Facturación · VOLVO',
    category: 'FullStack',
    visual: 'invoice',
    company: 'Adeev (Freelance)',
    tags: ['CodeIgniter 4', 'SAT'],
    descEs:
      'Sistema básico de gestión de facturas para VOLVO, construido con CodeIgniter 4 y conectado a los servicios del SAT para timbrado y validación fiscal.',
    descEn:
      'Basic invoice management system for VOLVO, built with CodeIgniter 4 and connected to SAT (Mexican tax authority) services for stamping and fiscal validation.',
  },
  {
    title: 'Procesos de datalake',
    category: 'FullStack',
    visual: 'dataflow',
    company: 'Adeev (Freelance)',
    tags: ['Python', 'AWS Lambda'],
    descEs:
      'Mantenimiento de funciones Lambda en Python para procesos de datalake: revisión de lógica existente, ajustes y soporte a flujos de procesamiento de datos.',
    descEn:
      'Maintenance of Python Lambda functions for datalake processes: reviewing existing logic, making adjustments, and supporting data-processing pipelines.',
  },
  {
    title: 'Plataforma de empleo · OCC Mundial',
    category: 'FullStack',
    visual: 'jobboard',
    company: 'OCCMundial',
    period: 'Oct 2023 – Oct 2024',
    tags: ['React', 'Next.js', 'Redux', 'GraphQL', 'Node.js', 'AWS Lambda', 'DynamoDB', 'Jest', 'Tailwind'],
    descEs:
      'Módulos para una de las plataformas de empleo más grandes de México: frontend con React, Next.js, Redux y GraphQL, microservicios con Node.js/Express y AWS Lambda conectados a DynamoDB, pruebas con Jest y sistema de tokens de diseño con Tailwind.',
    descEn:
      'Modules for one of the largest job platforms in Mexico: frontend with React, Next.js, Redux, and GraphQL; microservices with Node.js/Express and AWS Lambda connected to DynamoDB; unit tests with Jest and a Tailwind-based design token system.',
  },
  {
    title: 'CMS de contenido móvil · Nexta',
    category: 'FullStack',
    visual: 'cms',
    company: 'Nexta',
    period: 'Jul 2021 – Jul 2023',
    tags: ['React', 'C# .NET', 'Entity Framework', 'Node.js', 'Sequelize', 'React Native', 'Expo'],
    descEs:
      'CMS en React para gestionar el contenido de una aplicación móvil, microservicios RESTful en C# (.NET) con arquitectura hexagonal y Entity Framework, y microservicios Node.js/Express con Sequelize integrados a apps React Native/Expo.',
    descEn:
      'React-based CMS for managing a mobile app’s content, RESTful microservices in C# (.NET) with hexagonal architecture and Entity Framework, and Node.js/Express microservices with Sequelize integrated into React Native/Expo apps.',
  },
  {
    title: 'Plataforma e-learning · NCTech',
    category: 'FullStack',
    visual: 'elearning',
    company: 'NCTech',
    period: 'Jun 2016 – Dic 2017',
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery'],
    descEs:
      'Plataforma e-learning desarrollada con PHP, CodeIgniter, MySQL y jQuery, desplegada en entorno Linux.',
    descEn:
      'E-learning platform built with PHP, CodeIgniter, MySQL, and jQuery, deployed on a Linux environment.',
  },
  {
    title: 'Sitios web a medida · Innovation Workshop',
    category: 'Frontend',
    visual: 'website',
    company: 'Innovation Workshop (IW)',
    period: 'Ene 2015 – Jun 2016',
    tags: ['WordPress', 'MySQL', 'PHP'],
    descEs: 'Sitios web responsivos y gestionables construidos con WordPress, MySQL y PHP.',
    descEn: 'Responsive, easily manageable websites built with WordPress, MySQL, and PHP.',
  },
]

export const COPY = {
  es: {
    nav: { about: 'Sobre mí', skills: 'Habilidades', work: 'Proyectos', contact: 'Contacto' },
    role: 'Desarrolladora web full-stack',
    heroSub:
      'Soy una desarrolladora con experiencia creando aplicaciones web modernas y escalables.',
    cv: 'Descargar CV',
    scroll: 'Desliza',
    copyEmail: 'Copiar correo',
    copyPhone: 'Copiar teléfono',
    call: 'Llamar',
    copied: '¡Copiado!',
    aboutTitle: 'Sobre mí',
    aboutBody:
      'Soy un desarrollador web full-stack con más de 10 años de experiencia. Diseño y construyo productos digitales de principio a fin: interfaces cuidadas, arquitecturas sólidas e integraciones que escalan.',
    yearsLabel: 'años de experiencia',
    projectsLabel: 'proyectos entregados',
    stackLabel: 'tecnologías dominadas',
    skillsTitle: 'Habilidades',
    skillsSub: 'Un stack versátil, del frontend al backend y la nube.',
    skillsStackTitle: 'Stack completo',
    skillsStackSub: 'Todas las tecnologías con las que he trabajado, organizadas por área.',
    workTitle: 'Proyectos',
    workSub: 'Una selección de trabajos recientes.',
    filters: { all: 'Todos', full: 'FullStack', front: 'Frontend' },
    viewSite: 'Ver sitio',
    viewDetails: 'Ver detalles',
    close: 'Cerrar',
    stackUsed: 'Tecnologías utilizadas',
    contactTitle: 'Trabajemos juntos',
    contactBody: '¿Tienes un proyecto en mente? Escríbeme y hagámoslo realidad.',
    rights: 'Todos los derechos reservados.',
  },
  en: {
    nav: { about: 'About', skills: 'Skills', work: 'Work', contact: 'Contact' },
    role: 'Full-stack web developer',
    heroSub:
      'I am a passionate developer with experience in creating modern and scalable web applications.',
    cv: 'Download CV',
    scroll: 'Scroll',
    copyEmail: 'Copy email',
    copyPhone: 'Copy phone',
    call: 'Call',
    copied: 'Copied!',
    aboutTitle: 'About me',
    aboutBody:
      'I am a full-stack web developer with over 10 years of experience. I design and build digital products end to end: polished interfaces, solid architectures, and integrations that scale.',
    yearsLabel: 'years of experience',
    projectsLabel: 'projects delivered',
    stackLabel: 'technologies mastered',
    skillsTitle: 'My skills',
    skillsSub: 'A versatile stack, from frontend to backend and the cloud.',
    skillsStackTitle: 'Full stack breakdown',
    skillsStackSub: 'Every technology I have worked with, organized by area.',
    workTitle: 'Portfolio',
    workSub: 'A selection of recent work.',
    filters: { all: 'All', full: 'FullStack', front: 'Frontend' },
    viewSite: 'View site',
    viewDetails: 'View details',
    close: 'Close',
    stackUsed: 'Technologies used',
    contactTitle: "Let's work together",
    contactBody: 'Have a project in mind? Drop me a line and let’s make it happen.',
    rights: 'All rights reserved.',
  },
} as const
