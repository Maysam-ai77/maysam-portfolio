export type Lang = "ar" | "en";

export const CONTACT = {
  email: "maysamaldayem2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/maysamaldayem",
  github: "https://github.com/Maysam-ai77",
} as const;

export type SectionId =
  "home" | "about" | "projects" | "skills" | "experience" | "awards" | "education" | "contact";

export const SECTION_ORDER: SectionId[] = [
  "home",
  "about",
  "projects",
  "skills",
  "experience",
  "awards",
  "education",
  "contact",
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  contributions: string[];
  /** Only technologies explicitly provided */
  tech?: string[];
  achievement?: string;
  image?: string;
  github?: string;
  demo?: string;
}

export interface ExperienceItem {
  org: string;
  role: string;
  points: string[];
}

export interface Award {
  place: string;
  title: string;
  details: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

const SKILL_ITEMS: string[][] = [
  ["Python", "SQL"],
  ["Machine Learning", "Pre-trained AI Models", "Model Inference", "AI Model Integration"],
  ["PyTorch", "Hugging Face Transformers", "REST APIs"],
  ["Pandas", "NumPy"],
  ["React", "Flutter", "Dart"],
  ["SQLite", "Firebase"],
  ["Git", "GitHub", "Linux Basics"],
];

const SKILL_LABELS: Record<Lang, string[]> = {
  ar: [
    "البرمجة",
    "الذكاء الاصطناعي وتعلّم الآلة",
    "مكتبات الذكاء الاصطناعي وواجهات API",
    "تحليل البيانات",
    "تطوير الويب وتطبيقات الموبايل",
    "قواعد البيانات",
    "أدوات التطوير",
  ],
  en: [
    "Programming",
    "AI & Machine Learning",
    "AI Libraries & APIs",
    "Data Analysis",
    "Web & Mobile Development",
    "Databases",
    "Developer Tools",
  ],
};

const skillGroups = (lang: Lang): SkillGroup[] =>
  SKILL_LABELS[lang].map((label, i) => ({ label, items: SKILL_ITEMS[i] ?? [] }));

const ar = {
  nav: {
    home: "الرئيسية",
    about: "نبذة عني",
    projects: "المشاريع",
    skills: "المهارات",
    experience: "الخبرات",
    awards: "الجوائز",
    education: "التعليم",
    contact: "التواصل",
  } satisfies Record<SectionId, string>,
  ui: {
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    toDark: "التبديل إلى الوضع الداكن",
    toLight: "التبديل إلى الوضع الفاتح",
    langLabel: "اختيار اللغة",
    skip: "تخطَّ إلى المحتوى",
  },
  hero: {
    name: ["ميسم", "هشام الدايم"],
    title: "مطوّرة ذكاء اصطناعي وبرمجيات",
    intro:
      "أحوّل الأفكار إلى حلول عملية ومؤثرة باستخدام الذكاء الاصطناعي ومعالجة اللغات الطبيعية وتطوير البرمجيات.",
    location: "عمّان، الأردن",
    primary: "استكشف مشاريعي",
    secondary: "تواصل معي",
    portraitAlt: "صورة جانبية لميسم هشام الدايم بأسلوب الظل، داخل إطار دائري وردي مضيء",
  },
  about: {
    title: "نبذة عني",
    bio: "أنا ميسم هشام الدايم، مطوّرة ذكاء اصطناعي وبرمجيات، شغوفة بتحويل الأفكار إلى حلول عملية ذات أثر ملموس. أجمع بين الذكاء الاصطناعي ومعالجة اللغات الطبيعية وتطوير البرمجيات لبناء تطبيقات ذكية وحل مشكلات واقعية. أطمح إلى فرص أساهم من خلالها في مشاريع هادفة، وأطوّر مهاراتي التقنية، وأبني حلولًا تكنولوجية تُحدث فرقًا.",
    graduate: "خريجة ذكاء اصطناعي لعام 2026.",
  },
  projects: {
    title: "مشاريعي",
    contributions: "أبرز المساهمات",
    tech: "التقنيات",
    achievement: "الإنجاز",
    code: "الكود على GitHub",
    demo: "العرض المباشر",
    items: [
      {
        name: "Al-Zubdah",
        tagline: "منصة بحث أكاديمي مدعومة بالذكاء الاصطناعي",
        description:
          "منصة بحث أكاديمي تدعم ترجمة الأبحاث وتلخيصها باستخدام نماذج ذكاء اصطناعي مدرّبة مسبقًا.",
        contributions: [
          "تطوير ميزات لترجمة الأبحاث الأكاديمية وتلخيصها.",
          "دمج ميزات لتوليد أفكار بحثية واستكشاف الفجوات البحثية.",
          "العمل مع نماذج الذكاء الاصطناعي وواجهات API لمعالجة النصوص واكتشاف الأبحاث.",
        ],
      },
      {
        name: "Nashama JO",
        tagline: "تطبيق لمشاركة فائض الطعام",
        description:
          "تطبيق يربط الجهات المتبرعة بفائض الطعام، مثل المطاعم والمخابز والفنادق، بالأفراد والجمعيات للمساهمة في إعادة توزيع فائض الطعام.",
        contributions: [
          "المساهمة في تصميم واجهة التطبيق.",
          "تطوير وظائف الـ Backend وربط قاعدة البيانات.",
          "تصميم شعار المشروع.",
        ],
        achievement:
          "المركز الأول في جائزة ولي العهد لأفضل تطبيق خدمات حكومية، فئة الأغذية والمشروبات.",
      },
      {
        name: "Al-Daem",
        tagline: "نظام إدارة النادي القرآني",
        description:
          "نظام ويب لإدارة عمليات النادي القرآني، مصمم لدعم الإداريين والمعلمين والطلاب وأولياء الأمور.",
        contributions: [
          "إدارة سجلات الطلاب والحضور ومتابعة الحفظ والتقييمات.",
          "تطوير الواجهة باستخدام React.",
          "تطوير الـ Backend باستخدام Django REST Framework.",
          "تصميم النظام لدعم الإداريين والمعلمين والطلاب وأولياء الأمور.",
        ],
        tech: ["React", "Django REST Framework"],
      },
    ] as Project[],
  },
  skills: {
    title: "المهارات والتخصصات",
    specialtiesLabel: "التخصصات",
    stackLabel: "المهارات التقنية",
    specialties: [
      "الذكاء الاصطناعي",
      "معالجة اللغات الطبيعية",
      "تطوير Python",
      "تطوير الواجهات الخلفية",
      "تطوير الويب",
      "تطوير تطبيقات الهاتف",
      "تعلم الآلة",
      "تكامل واجهات API",
    ],
    groups: skillGroups("ar"),
  },
  experience: {
    title: "الخبرات والقيادة",
    items: [
      {
        org: "CodeLine",
        role: "مسؤولة العلاقات العامة",
        points: [
          "إدارة أنشطة العلاقات العامة ومبادرات التواصل.",
          "إعداد مقترحات الخدمات والعروض التعريفية للشركة.",
        ],
      },
      {
        org: "ZAKA",
        role: "قائدة تقنية وسفيرة",
        points: ["المساهمة في المبادرات التقنية والمجتمعية ضمن دور قيادي وسفير للمبادرة."],
      },
      {
        org: "Tech Arabi",
        role: "قائدة تنظيم الهاكاثونات والفيلماثونات",
        points: [
          "المساهمة في تنظيم فعاليات تقنية وإبداعية، بما فيها الهاكاثونات والفعاليات السينمائية.",
        ],
      },
    ] as ExperienceItem[],
  },
  awards: {
    title: "الجوائز والإنجازات",
    items: [
      {
        place: "المركز الأول",
        title: "جائزة ولي العهد لأفضل تطبيق خدمات حكومية",
        details: ["المشروع: Nashama JO", "الفئة: الأغذية والمشروبات"],
      },
      {
        place: "المركز الأول",
        title: "أولمبياد الذكاء الاصطناعي",
        details: ["المسار: تعلم الآلة"],
      },
      {
        place: "المركز الأول",
        title: "مسابقة فكرة ابتكارية",
        details: ["المجال: الذكاء الاصطناعي والأمن السيبراني"],
      },
    ] as Award[],
  },
  education: {
    title: "التعليم",
    university: "جامعة الزيتونة الأردنية",
    years: "2022–2026",
    degree: "بكالوريوس الذكاء الاصطناعي",
    note: "خريجة ذكاء اصطناعي لعام 2026.",
  },
  contact: {
    title: "خلينا نتواصل",
    text: "إذا كنت مهتمًا بالتعاون أو لديك فرصة مناسبة، يسعدني التواصل معك.",
    emailLabel: "البريد الإلكتروني",
    linkedinAria: "ملف ميسم على LinkedIn (يفتح في نافذة جديدة)",
    githubAria: "حساب ميسم على GitHub (يفتح في نافذة جديدة)",
    emailAria: "أرسل بريدًا إلكترونيًا إلى ميسم",
  },
  footer: {
    name: "ميسم هشام الدايم",
    title: "مطوّرة ذكاء اصطناعي وبرمجيات",
    rights: "© 2026 جميع الحقوق محفوظة",
    backToTop: "العودة إلى الأعلى",
  },
};

export type Dictionary = typeof ar;

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    awards: "Awards",
    education: "Education",
    contact: "Contact",
  },
  ui: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    toDark: "Switch to dark theme",
    toLight: "Switch to light theme",
    langLabel: "Choose language",
    skip: "Skip to content",
  },
  hero: {
    name: ["Maysam", "Hisham Al-Dayem"],
    title: "AI & Software Developer",
    intro:
      "I turn ideas into practical, impactful solutions using AI, natural language processing, and software development.",
    location: "Amman, Jordan",
    primary: "Explore My Work",
    secondary: "Contact Me",
    portraitAlt:
      "Silhouette profile portrait of Maysam Hisham Al-Dayem, framed by a glowing pink circle",
  },
  about: {
    title: "About Me",
    bio: "I'm an AI & Software Developer passionate about turning ideas into practical, impactful solutions. I combine artificial intelligence, NLP, and software development to build intelligent applications and solve real-world problems. I'm interested in opportunities where I can contribute to meaningful projects, expand my technical skills, and develop technology that makes a difference.",
    graduate: "Artificial Intelligence graduate, 2026.",
  },
  projects: {
    title: "Selected Projects",
    contributions: "Key contributions",
    tech: "Technologies",
    achievement: "Achievement",
    code: "Code on GitHub",
    demo: "Live demo",
    items: [
      {
        name: "Al-Zubdah",
        tagline: "AI-Powered Academic Research Platform",
        description:
          "An academic research platform that supports research translation and summarization using pretrained AI models.",
        contributions: [
          "Developed features for translating and summarizing academic research using pretrained AI models.",
          "Integrated features for generating research ideas and exploring research gaps.",
          "Worked with AI models and APIs for text processing and research discovery.",
        ],
      },
      {
        name: "Nashama JO",
        tagline: "Food Surplus Sharing App",
        description:
          "A mobile application that connects food donors, such as restaurants, bakeries, and hotels, with individuals and charities to redistribute surplus food.",
        contributions: [
          "Contributed to the application UI design.",
          "Worked on backend functionality and database integration.",
          "Designed the project logo.",
        ],
        achievement:
          "First Place — Crown Prince Award for Best Government Services Application, Food & Beverages Category.",
      },
      {
        name: "Al-Daem",
        tagline: "Quran Club Management System",
        description:
          "A web-based system designed to manage Quran club operations and support administrators, teachers, students, and parents.",
        contributions: [
          "Developed features for student records, attendance, memorization progress, and evaluations.",
          "Built the frontend using React.",
          "Built the backend using Django REST Framework.",
          "Designed the system to support administrators, teachers, students, and parents/guardians.",
        ],
        tech: ["React", "Django REST Framework"],
      },
    ],
  },
  skills: {
    title: "Skills & Specialties",
    specialtiesLabel: "Specialties",
    stackLabel: "Technical skills",
    specialties: [
      "Artificial Intelligence (AI)",
      "Natural Language Processing (NLP)",
      "Python Development",
      "Backend Development",
      "Web Development",
      "Mobile App Development",
      "Machine Learning",
      "API Integration",
    ],
    groups: skillGroups("en"),
  },
  experience: {
    title: "Experience & Leadership",
    items: [
      {
        org: "CodeLine",
        role: "Public Relations Officer",
        points: [
          "Managed public relations activities and communication initiatives.",
          "Prepared service proposals and company presentations.",
        ],
      },
      {
        org: "ZAKA",
        role: "Technical Lead & Ambassador",
        points: [
          "Contributed to technical and community initiatives in a technical leadership and ambassador role.",
        ],
      },
      {
        org: "Tech Arabi",
        role: "Hackathon & Filmathon Organization Lead",
        points: [
          "Contributed to organizing technical and creative events, including hackathons and filmathons.",
        ],
      },
    ],
  },
  awards: {
    title: "Awards & Achievements",
    items: [
      {
        place: "First Place",
        title: "Crown Prince Award for Best Government Services Application",
        details: ["Project: Nashama JO", "Category: Food & Beverages"],
      },
      {
        place: "First Place",
        title: "AI Olympiad",
        details: ["Track: Machine Learning"],
      },
      {
        place: "First Place",
        title: "Innovation Idea Competition",
        details: ["Field: AI & Cybersecurity"],
      },
    ],
  },
  education: {
    title: "Education",
    university: "Al-Zaytoonah University of Jordan",
    years: "2022–2026",
    degree: "Bachelor of Artificial Intelligence",
    note: "Artificial Intelligence graduate, 2026.",
  },
  contact: {
    title: "Let's Connect",
    text: "If you're interested in collaborating or have an opportunity to discuss, I'd love to hear from you.",
    emailLabel: "Email",
    linkedinAria: "Maysam on LinkedIn (opens in a new tab)",
    githubAria: "Maysam on GitHub (opens in a new tab)",
    emailAria: "Send an email to Maysam",
  },
  footer: {
    name: "Maysam Hisham Al-Dayem",
    title: "AI & Software Developer",
    rights: "© 2026 All rights reserved",
    backToTop: "Back to top",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { ar, en };
