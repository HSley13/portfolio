/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sley Hortes' Portfolio",
  description:
    "Software Engineer with hands-on experience architecting and shipping production systems across multiple domains, from high-performance C++ backends and cross-platform mobile applications to full-stack web platforms and deep learning pipelines.",
  og: {
    title: "Sley Hortes Portfolio",
    type: "website",
    url: "https://hsley13.github.io/portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Sley Hortes",
  role: "Software Engineer",
  logo_name: "SleyHortes",
  nickname: "",
  subTitle:
    "Software Engineer architecting and shipping production systems across multiple domains, from high-performance C++ backends and cross-platform mobile applications to full-stack web platforms and deep learning pipelines. Proficient in C++, Go, TypeScript, and Python, with a strong emphasis on clean architecture.",
  resumeLink: "",
  portfolio_repository: "https://github.com/HSley13/portfolio",
  githubProfile: "https://github.com/HSley13",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/HSley13",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:sleyhortes13@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Systems & Backend",
      fileName: "DataScienceImg",
      skills: [
        "Architecting high-performance C++ backends and REST APIs with Drogon and Go",
        "Building local-first, concurrent systems: lock-free signal buses, rule engines, and POSIX-level filesystems via FUSE",
        "Designing clean, testable service architecture with an emphasis on maintainability",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "Drogon",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Building responsive, production web front ends with React and TypeScript",
        "Developing cross-platform mobile applications with React Native (Expo)",
        "Creating application backends and APIs with Node.js and Flask",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Qt",
          fontAwesomeClassname: "simple-icons:qt",
          style: {
            color: "#41CD52",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#276DC3",
          },
        },
      ],
    },
    {
      title: "Cloud & Data",
      fileName: "CloudInfraImg",
      skills: [
        "Deploying and operating services across AWS, GCP, and Cloudflare",
        "Running fully automated CI/CD pipelines via GitHub Actions",
        "Working with relational and document databases at production scale",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Cloudflare",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: {
            color: "#F38020",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "National Dong Hwa University",
      subtitle: "B.S. in Computer Science and Information Engineering",
      alt_name: "National Dong Hwa University",
      duration: "Sep 2023 - Jun 2027",
      descriptions: [
        "Relevant coursework: R (Beginner & Intermediate), Big Data, C++, Data Structures, Algorithms, Image Processing, Machine Learning, Scalable Computing.",
        "Currently taking: Advanced Computer Vision, Introduction to Generative AI, Distributed Systems, Database Systems.",
      ],
      website_link: "https://web.ndhu.edu.tw/",
    },
    {
      title: "National Central University",
      subtitle: "Chinese Language in Chinese Language Center",
      alt_name: "National Central University",
      duration: "Sep 2022 - Aug 2023",
      descriptions: [
        "Studied Mandarin Chinese at the Chinese Language Center, Taoyuan, Taiwan.",
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
    { name: "French", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Spanish", level: "Intermediate" },
    { name: "Chinese", level: "Intermediate, B1" },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Awards, Competitions, and Volunteering",
  description:
    "I build production systems spanning C++ backends, mobile apps, and deep learning pipelines. Alongside coursework, I compete in data science competitions and volunteer as a research assistant in NDHU's Intelligent Computing and Mobile Network Lab.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Awards",
      work: true,
      experiences: [
        {
          title: "Undergraduate Project Excellent Award",
          company: "National Dong Hwa University",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "May 2026",
          location: "Hualien, Taiwan",
          description:
            "Awarded for Maestro, a two-stream BiLSTM real-time gesture classification system for hands-free presentation control.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Competitions",
      experiences: [
        {
          title: "1st Place, Big Data Competition",
          company: "National Dong Hwa University",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "Dec 2025",
          location: "Hualien, Taiwan",
          description:
            "Classified Moodle engagement patterns using XGBoost. Extracted frequency-domain features via FFT and scalogram analysis. Built a Gemini-powered AI assistant for personalized student and instructor feedback.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Research Assistant",
          company: "NDHU CSIE: Intelligent Computing and Mobile Network Lab",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "Sep 2026 - Present",
          location: "Hualien, Taiwan",
          description: "Volunteering as a research assistant.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production systems across C++ backends, mobile and web full-stack platforms, and deep learning pipelines, most built and shipped end to end.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sley_hortes.png",
    description:
      "I am available by email and phone. I can help with C++, Go, TypeScript, Python, full-stack web, mobile, and machine learning projects.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Hualien, Taiwan",
    locality: "Hualien",
    country: "Taiwan",
    region: "Hualien County",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+886 905 811 513",
  },
};

export {
  settings,
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
