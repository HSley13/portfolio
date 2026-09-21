// Static UI chrome strings (nav labels, headings, button text, messages) for
// every locale. Content that comes from portfolio.js / projects.json lives in
// ./portfolioData and ./projectsData instead — this file is only for text
// that isn't part of that data.

const en = {
  nav: {
    home: "Home",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact Me",
  },
  greeting: {
    starButton: "⭐ Star Me On Github",
  },
  education: {
    heading: "Education",
    subheading: "Basic Qualification and Certifications",
    degreesReceived: "Degrees Received",
    visitWebsite: "Visit Website",
    certifications: "Certifications",
    certificateLabel: "Certificate",
  },
  contact: {
    seeMyResume: "See My Resume",
  },
  projects: {
    moreProjects: "More Projects",
    createdOn: "Created on {date}",
  },
  projectDetail: {
    backToProjects: "← Back to Projects",
    whyItMatters: "Why It Matters",
    keyFeatures: "Key Features & Contributions",
    viewOnGithub: "View on GitHub",
    notFound: "Project not found",
    backToProjectsButton: "Back to Projects",
  },
  resume: {
    downloadResume: "📄 Download Resume",
    loading: "Loading resume...",
    failedToLoad: "Failed to load resume. Please try again later.",
    tryAgain: "Try Again",
    previous: "← Previous",
    next: "Next →",
    pageOf: "Page {current} of {total}",
  },
  error404: {
    woops: "Woops",
    code: "404",
    message: "The requested page is unavailable at the moment!",
    goHome: "Go Home",
  },
  footer: {
    madeWithLoveBy: "Made with ❤️ by {name}",
  },
};

const zhTW = {
  nav: {
    home: "首頁",
    education: "學歷",
    experience: "經歷",
    projects: "專案",
    contact: "聯絡我",
  },
  greeting: {
    starButton: "⭐ 給這個作品集加顆星",
  },
  education: {
    heading: "學歷",
    subheading: "基本學歷與證照",
    degreesReceived: "學歷",
    visitWebsite: "造訪網站",
    certifications: "證照",
    certificateLabel: "證書",
  },
  contact: {
    seeMyResume: "查看我的履歷",
  },
  projects: {
    moreProjects: "更多專案",
    createdOn: "建立於 {date}",
  },
  projectDetail: {
    backToProjects: "← 返回專案列表",
    whyItMatters: "為何重要",
    keyFeatures: "重點功能與貢獻",
    viewOnGithub: "在 GitHub 上查看",
    notFound: "找不到此專案",
    backToProjectsButton: "返回專案列表",
  },
  resume: {
    downloadResume: "📄 下載履歷",
    loading: "履歷載入中...",
    failedToLoad: "履歷載入失敗，請稍後再試。",
    tryAgain: "重試",
    previous: "← 上一頁",
    next: "下一頁 →",
    pageOf: "第 {current} 頁，共 {total} 頁",
  },
  error404: {
    woops: "糟糕",
    code: "404",
    message: "您要查看的頁面目前無法使用！",
    goHome: "回首頁",
  },
  footer: {
    madeWithLoveBy: "由 {name} 用 ❤️ 打造",
  },
};

const es = {
  nav: {
    home: "Inicio",
    education: "Educación",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contáctame",
  },
  greeting: {
    starButton: "⭐ Dale una estrella en GitHub",
  },
  education: {
    heading: "Educación",
    subheading: "Formación y Certificaciones",
    degreesReceived: "Títulos Obtenidos",
    visitWebsite: "Visitar Sitio Web",
    certifications: "Certificaciones",
    certificateLabel: "Certificado",
  },
  contact: {
    seeMyResume: "Ver Mi Currículum",
  },
  projects: {
    moreProjects: "Más Proyectos",
    createdOn: "Creado el {date}",
  },
  projectDetail: {
    backToProjects: "← Volver a Proyectos",
    whyItMatters: "Por Qué Importa",
    keyFeatures: "Funciones Clave y Contribuciones",
    viewOnGithub: "Ver en GitHub",
    notFound: "Proyecto no encontrado",
    backToProjectsButton: "Volver a Proyectos",
  },
  resume: {
    downloadResume: "📄 Descargar Currículum",
    loading: "Cargando currículum...",
    failedToLoad:
      "No se pudo cargar el currículum. Inténtalo de nuevo más tarde.",
    tryAgain: "Reintentar",
    previous: "← Anterior",
    next: "Siguiente →",
    pageOf: "Página {current} de {total}",
  },
  error404: {
    woops: "Ups",
    code: "404",
    message: "¡La página solicitada no está disponible en este momento!",
    goHome: "Ir al Inicio",
  },
  footer: {
    madeWithLoveBy: "Hecho con ❤️ por {name}",
  },
};

export const uiStrings = { en, "zh-TW": zhTW, es };
