// Traditional Chinese (繁體中文) portfolio content. Mirrors en.js key-for-key.

const seo = {
  title: "Sley HORTES 的作品集",
  description:
    "軟體工程師，擁有跨多個領域打造並上線生產系統的實作經驗：從高效能的 C++ 後端、跨平台行動應用程式，到全端網頁平台與深度學習流程。",
  og: {
    title: "Sley HORTES 作品集",
    type: "website",
    url: "https://hsley13.github.io/portfolio/",
  },
};

const greeting = {
  title: "Sley HORTES",
  role: "軟體工程師",
  logo_name: "SleyHortes",
  nickname: "",
  subTitle:
    "軟體工程師，跨多個領域架構並上線生產系統：從高效能的 C++ 後端、跨平台行動應用程式，到全端網頁平台與深度學習流程。熟悉 C++、Go、TypeScript 與 Python，特別重視清晰的架構設計。",
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
      title: "系統與後端",
      fileName: "DataScienceImg",
      skills: [
        "使用 Drogon 與 Go 架構高效能的 C++ 後端與 REST API",
        "打造 local-first、支援併發的系統：無鎖訊號匯流排、規則引擎，以及透過 FUSE 實作的 POSIX 檔案系統",
        "設計乾淨、可測試的服務架構，特別重視可維護性",
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
      title: "全端開發",
      fileName: "FullStackImg",
      skills: [
        "使用 React 與 TypeScript 打造具回應式設計的正式網頁前端",
        "使用 React Native（Expo）開發跨平台行動應用程式",
        "使用 Node.js 與 Flask 建構應用程式後端與 API",
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
      title: "雲端與資料",
      fileName: "CloudInfraImg",
      skills: [
        "在 AWS、GCP 與 Cloudflare 上部署並維運服務",
        "透過 GitHub Actions 執行全自動化的 CI/CD 流程",
        "在正式環境規模下處理關聯式與文件型資料庫",
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
      title: "國立東華大學",
      subtitle: "資訊工程學系 理學士",
      alt_name: "National Dong Hwa University",
      duration: "2023年9月 - 2027年6月",
      descriptions: [
        "相關課程：R語言（初階與中階）、大數據、C++、資料結構、演算法、影像處理、機器學習、可擴展運算、進階電腦視覺、生成式 AI 概論、分散式系統、資料庫系統。",
      ],
      website_link: "https://web.ndhu.edu.tw/",
    },
    {
      title: "國立中央大學",
      subtitle: "語言中心華語課程",
      alt_name: "National Central University",
      duration: "2022年9月 - 2023年8月",
      descriptions: ["於台灣桃園國立中央大學語言中心研習華語。"],
      website_link: "https://www.ncu.edu.tw/",
    },
  ],
};

const certifications = {
  certifications: [],
};

const spokenLanguages = {
  languages: [
    { name: "法文", level: "母語" },
    { name: "英文", level: "專業水準" },
    { name: "西班牙文", level: "中等程度" },
    { name: "中文", level: "中等程度（B1）" },
  ],
};

const experience = {
  title: "經歷",
  subtitle: "獎項、競賽與志工服務",
  description:
    "我打造涵蓋 C++ 後端、行動應用程式與深度學習流程的生產系統。課業之餘，我參與資料科學競賽，並在東華大學智慧運算與行動網路實驗室擔任研究助理志工。",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "獎項",
      work: true,
      experiences: [
        {
          title: "大學部專題優良獎",
          company: "國立東華大學",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "2026年5月",
          location: "台灣花蓮",
          description:
            "以 Maestro 獲獎——一套雙流 BiLSTM 即時手勢辨識系統，用於免持簡報控制。",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "競賽",
      experiences: [
        {
          title: "大數據競賽 第一名",
          company: "國立東華大學",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "2025年12月",
          location: "台灣花蓮",
          description:
            "使用 XGBoost 對 Moodle 平台的學習參與模式進行分類。透過 FFT 與尺度圖（scalogram）分析擷取頻域特徵。打造以 Gemini 驅動的 AI 助理，提供學生與教師個人化回饋。",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "志工服務",
      experiences: [
        {
          title: "研究助理",
          company: "東華大學資工系：智慧運算與行動網路實驗室",
          company_url: "https://web.ndhu.edu.tw/",
          duration: "2026年9月 - 至今",
          location: "台灣花蓮",
          description: "擔任研究助理志工。",
          color: "#0071C5",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "專案",
  description:
    "涵蓋 C++ 後端、行動與網頁全端平台，以及深度學習流程的生產系統，大多從零打造並完整上線。",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "著作發表",
  description: "部分已發表的文章、部落格文與研究成果。",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

const contactPageData = {
  contactSection: {
    title: "聯絡我",
    profile_image_path: "sley_hortes.png",
    description:
      "歡迎透過電子郵件或電話與我聯繫。我可以協助 C++、Go、TypeScript、Python、全端網頁、行動應用與機器學習相關專案。",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "地址",
    subtitle: "台灣花蓮",
    locality: "花蓮",
    country: "台灣",
    region: "花蓮縣",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "電話",
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
