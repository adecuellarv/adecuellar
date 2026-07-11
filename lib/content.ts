export type Lang = 'es' | 'en'

export const CONTACT = {
  email: 'ade.cuellar91@gmail.com',
  phone: '4481025008',
  github: 'https://github.com/',
}

export const SKILLS: { name: string; level: number }[] = [
  { name: 'JavaScript', level: 92 },
  { name: 'ReactJS', level: 91 },
  { name: 'PHP', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'Laravel', level: 86 },
  { name: 'Tailwind', level: 85 },
  { name: 'VueJS', level: 80 },
  { name: 'Node.js', level: 80 },
  { name: 'AWS Lambda', level: 73 },
  { name: 'AWS DynamoDB', level: 73 },
  { name: 'Firebase Functions', level: 73 },
  { name: 'React Native', level: 70 },
  { name: '.Net', level: 60 },
  { name: 'AWS EC2', level: 60 },
  { name: 'Angular', level: 60 },
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

export type Project = {
  title: string
  category: Category
  image: string
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
    tags: ['React', 'Node.js', 'ChatGPT'],
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
    tags: ['Shopify', 'Liquid'],
    descEs: 'E-commerce construido con Shopify.',
    descEn: 'E-commerce built with Shopify.',
  },
  {
    title: 'Generra',
    category: 'Frontend',
    image: '/images/generra.png',
    url: 'https://generra.com.mx/',
    tags: ['Shopify', 'Liquid'],
    descEs: 'E-commerce construido con Shopify.',
    descEn: 'E-commerce built with Shopify.',
  },
  {
    title: 'leaseandfleet',
    category: 'Frontend',
    image: '/images/leaseandfleet.png',
    url: 'https://www.leaseandfleet.com/',
    tags: ['WordPress', 'PHP'],
    descEs: 'Sitio de catálogo informativo construido con WordPress.',
    descEn: 'Informational catalog website built with WordPress.',
  },
  {
    title: 'Delivery Food',
    category: 'FullStack',
    image: '/images/enfa.png',
    url: '',
    tags: ['React Native', 'Firebase'],
    descEs: 'En Fa es un proyecto personal orientado a convertirse en un servicio de entrega de comida.',
    descEn: 'En Fa is a personal project aimed at becoming a food delivery service.',
  },
  {
    title: 'Gestión de proveedor de internet',
    category: 'FullStack',
    image: '/images/internet.png',
    tags: ['Laravel', 'MySQL'],
    descEs: 'Sistema para gestionar pagos de clientes, así como reportes de sus servicios.',
    descEn: 'System for managing customer payments, as well as reports on their services.',
  },
  {
    title: 'Piter',
    category: 'FullStack',
    image: '/images/piter.png',
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
    tags: ['Python', 'Django', 'PostgreSQL'],
    descEs:
      'Plataforma de gestión empresarial con facturación, control de gastos, roles y permisos, y reportes financieros para pequeñas y medianas empresas.',
    descEn:
      'Business management platform with invoicing, expense tracking, roles and permissions, and financial reporting for small and medium businesses.',
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
    workTitle: 'Proyectos',
    workSub: 'Una selección de trabajos recientes.',
    filters: { all: 'Todos', full: 'FullStack', front: 'Frontend' },
    viewSite: 'Ver sitio',
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
    workTitle: 'Portfolio',
    workSub: 'A selection of recent work.',
    filters: { all: 'All', full: 'FullStack', front: 'Frontend' },
    viewSite: 'View site',
    contactTitle: "Let's work together",
    contactBody: 'Have a project in mind? Drop me a line and let’s make it happen.',
    rights: 'All rights reserved.',
  },
} as const
