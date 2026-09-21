// Spanish (Español) portfolio content. Mirrors en.js key-for-key.

const seo = {
  title: "Portafolio de Sley HORTES",
  description:
    "Ingeniero de Software con experiencia práctica diseñando y desplegando sistemas en producción en múltiples dominios: desde backends de alto rendimiento en C++ y aplicaciones móviles multiplataforma, hasta plataformas web full-stack y pipelines de deep learning.",
  og: {
    title: "Portafolio de Sley HORTES",
    type: "website",
    url: "https://hsley13.github.io/portfolio/",
  },
};

const greeting = {
  title: "Sley HORTES",
  role: "Ingeniero de Software",
  logo_name: "SleyHortes",
  nickname: "",
  subTitle:
    "Ingeniero de Software que diseña y despliega sistemas en producción en múltiples dominios: desde backends de alto rendimiento en C++ y aplicaciones móviles multiplataforma, hasta plataformas web full-stack y pipelines de deep learning. Con dominio de C++, Go, TypeScript y Python, y un fuerte énfasis en la arquitectura limpia.",
  resumeLink: "",
  portfolio_repository: "https://github.com/HSley13/portfolio",
  githubProfile: "https://github.com/HSley13",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/HSley13",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:sleyhortes13@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Sistemas y Backend",
      fileName: "DataScienceImg",
      skills: [
        "Diseño de backends de alto rendimiento en C++ y APIs REST con Drogon y Go",
        "Construcción de sistemas local-first y concurrentes: buses de señales sin bloqueo, motores de reglas y sistemas de archivos POSIX vía FUSE",
        "Diseño de arquitecturas de servicio limpias y testeables, con énfasis en la mantenibilidad",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#4169E1" },
        },
        {
          skillName: "Drogon",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
      ],
    },
    {
      title: "Desarrollo Full Stack",
      fileName: "FullStackImg",
      skills: [
        "Construcción de interfaces web responsivas de producción con React y TypeScript",
        "Desarrollo de aplicaciones móviles multiplataforma con React Native (Expo)",
        "Creación de backends de aplicación y APIs con Node.js y Flask",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "Qt",
          fontAwesomeClassname: "simple-icons:qt",
          style: { color: "#41CD52" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
      ],
    },
    {
      title: "Nube y Datos",
      fileName: "CloudInfraImg",
      skills: [
        "Despliegue y operación de servicios en AWS, GCP y Cloudflare",
        "Ejecución de pipelines de CI/CD totalmente automatizados con GitHub Actions",
        "Trabajo con bases de datos relacionales y documentales a escala de producción",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Cloudflare",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: { color: "#F38020" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Universidad Nacional Dong Hwa",
      subtitle:
        "Licenciatura en Ciencias de la Computación e Ingeniería de la Información",
      alt_name: "National Dong Hwa University",
      duration: "sep. 2023 - jun. 2027",
      descriptions: [
        "Cursos relevantes: R (básico e intermedio), Big Data, C++, Estructuras de Datos, Algoritmos, Procesamiento de Imágenes, Aprendizaje Automático, Computación Escalable, Visión por Computadora Avanzada, Introducción a la IA Generativa, Sistemas Distribuidos, Sistemas de Bases de Datos.",
      ],
      website_link: "https://web.ndhu.edu.tw/",
    },
    {
      title: "Universidad Nacional Central",
      subtitle: "Chino Mandarín en el Centro de Idioma Chino",
      alt_name: "National Central University",
      duration: "sep. 2022 - ago. 2023",
      descriptions: [
        "Estudié chino mandarín en el Centro de Idioma Chino, Taoyuan, Taiwán.",
      ],
      website_link: "https://www.ncu.edu.tw/",
    },
  ],
};

const certifications = {
  certifications: [],
};

const spokenLanguages = {
  languages: [
    { name: "Francés", level: "Nativo" },
    { name: "Inglés", level: "Profesional" },
    { name: "Español", level: "Intermedio" },
    { name: "Chino", level: "Intermedio, B1" },
  ],
};

const experience = {
  title: "Experiencia",
  subtitle: "Premios, Competencias y Voluntariado",
  description:
    "Construyo sistemas en producción que abarcan backends en C++, aplicaciones móviles y pipelines de deep learning. Además de mis estudios, compito en concursos de ciencia de datos y colaboro como asistente de investigación voluntario en el Laboratorio de Computación Inteligente y Redes Móviles de la NDHU.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Premios",
      work: true,
      experiences: [
        {
          title: "Premio a la Excelencia en Proyecto de Pregrado",
          company: "Universidad Nacional Dong Hwa",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "mayo 2026",
          location: "Hualien, Taiwán",
          description:
            "Premiado por Maestro, un sistema de clasificación de gestos en tiempo real de dos flujos BiLSTM para control de presentaciones manos libres.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Competencias",
      experiences: [
        {
          title: "1er Lugar, Competencia de Big Data",
          company: "Universidad Nacional Dong Hwa",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "dic. 2025",
          location: "Hualien, Taiwán",
          description:
            "Clasifiqué patrones de participación en Moodle usando XGBoost. Extraje características en el dominio de la frecuencia mediante análisis FFT y escalogramas. Construí un asistente de IA impulsado por Gemini para retroalimentación personalizada a estudiantes y docentes.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Voluntariados",
      experiences: [
        {
          title: "Asistente de Investigación",
          company:
            "NDHU CSIE: Laboratorio de Computación Inteligente y Redes Móviles",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "sep. 2026 - Presente",
          location: "Hualien, Taiwán",
          description: "Colaboro como asistente de investigación voluntario.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Proyectos",
  description:
    "Sistemas en producción que abarcan backends en C++, plataformas full-stack móviles y web, y pipelines de deep learning, la mayoría construidos y desplegados de principio a fin.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publicaciones",
  description: "Algunos de mis artículos, blogs e investigaciones publicados.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

const contactPageData = {
  contactSection: {
    title: "Contáctame",
    profile_image_path: "sley_hortes.png",
    description:
      "Estoy disponible por correo electrónico y teléfono. Puedo ayudar con proyectos de C++, Go, TypeScript, Python, desarrollo web full-stack, móvil y machine learning.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Dirección",
    subtitle: "Hualien, Taiwán",
    locality: "Hualien",
    country: "Taiwán",
    region: "Condado de Hualien",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Teléfono",
    subtitle: "+886 905 811 513",
  },
};

const portfolioData = {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  spokenLanguages,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

export default portfolioData;
