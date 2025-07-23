export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  note?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: '1',
    company: 'CARS24 Services Pvt Ltd',
    position: 'SDE3 | Tech Lead 1',
    duration: 'Feb 2023 - Present',
    location: 'Bengaluru, Karnataka',
    description: [
      'Leading feature development and maintenance of the discovery pod in the CARS24 mobile app (10M+ downloads)',
      'Created and published internal RN libraries used across internal apps to unify codebase',
      'Implemented backend-driven UI for listing screens, reducing release dependency',
      'Integrated Android Shortcuts and native modules using RN bridging',
      'Developed automation flows using Maestro for mobile test coverage',
      'Used Flashlight and Embrace for performance monitoring and issue resolution',
      'Applied lazy rendering, memoization, and custom hooks for performance tuning',
      'Wrote Jest-based unit/component tests to improve test coverage',
      'Resolved production crashes via Firebase Crashlytics and monitoring tools',
      'Delivered pixel-perfect UI aligned with the CARS24 Design Language System (DLS)',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'Appium',
      'Maestro',
      'Flashlight',
      'Embrace',
      'Bitrise',
      'Bitbucket',
      'Firebase',
      'Android',
      'iOS',
      'Jest',
      'VS Code',
      'JIRA',
      'Agile',
    ],
  },
  {
    id: '2',
    company: 'Stanza Living',
    position: 'SDE-2',
    duration: 'Jan 2022 - Feb 2023',
    location: 'Bengaluru, Karnataka',
    description: [
      'Built JSON-driven dynamic form rendering with configurable components',
      'Managed global state with Redux Toolkit to support dynamic layouts',
      'Integrated Android in-app update using custom RN bridges',
      'Setup Sentry + Firebase for crash/performance monitoring',
      'Integrated Firebase Remote Config for feature flags and OTA control',
      'Led OTA hotfix deployment via CodePush',
      'Enforced lint rules using Husky + ESLint pre-commit hooks',
      'Added complex Yup schema validation for nested form fields',
      'Implemented shimmer placeholders to improve perceived load speed',
      'Focused on app memory optimization and frame-rate stability',
    ],
    technologies: [
      'React Native',
      'JavaScript',
      'Redux Toolkit',
      'Firebase',
      'Sentry',
      'Yup',
      'CodePush',
      'Husky',
      'Jest',
      'Git',
      'JSON',
      'Android',
      'iOS',
      'VS Code',
      'Agile',
      'JIRA',
    ],
  },
  {
    id: '3',
    company: 'SpurTree Technologies',
    position: 'Frontend Developer',
    duration: 'Apr 2021 - Jan 2022',
    location: 'Bengaluru, Karnataka',
    description: [
      'Built RN features using functional components and hooks',
      'Implemented full navigation with Tab, Stack, and Drawer flows',
      'Integrated dynamic linking and deep linking with URL schemes',
      'Implemented Apple, Google, and Facebook logins with fallbacks',
      'Managed push notifications using Amazon SNS and GCM',
      'Used i18n for multilingual support with on-demand switching',
      'Integrated PayPal onboarding for store owners',
      'Collaborated across backend and QA teams to deliver sprint features',
    ],
    technologies: [
      'React Native',
      'JavaScript',
      'Redux Toolkit',
      'Amazon SNS',
      'GCM',
      'i18n',
      'Firebase',
      'Dynamic Links',
      'Git',
      'Jest',
      'Android',
      'iOS',
      'VS Code',
      'Agile',
      'JIRA',
    ],
  },
  {
    id: '4',
    company: 'Tata Consultancy Services',
    position: 'Frontend Developer',
    duration: 'Jun 2019 - Apr 2021',
    location: 'Bengaluru, Karnataka',
    description: [
      'Developed forms and document renderers using React and RN',
      'Used Formik and Yup for dynamic form creation and validation',
      'Fixed UI defects across Android/iOS platforms',
      'Queried backend to retrieve/display PDFs, images, audio files',
      'Participated in Agile ceremonies: daily standups, retros, sprint reviews',
      'Contributed to peer code reviews and followed coding best practices',
      'Documented code and components for team handover and onboarding',
    ],
    technologies: [
      'React JS',
      'React Native',
      'Formik',
      'Yup',
      'Redux',
      'Git',
      'XML',
      'JSON',
      'HTML',
      'CSS',
      'VS Code',
      'Agile',
      'JIRA',
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      'React',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Data Structures',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'React',
      'Redux',
      'React Native',
      'React Navigation',
      'React Native Navigation',
      'Redux Toolkit',
      'Redux Thunk',
    ],
  },
  {
    category: 'Development Tools',
    skills: [
      'Visual Studio Code',
      'Cursor',
      'Copilot',
      'Android Studio',
      'Xcode',
      'Webstorm',
      'Postman',
    ],
  },
  {
    category: 'Testing & Automation',
    skills: ['Jest', 'Appium', 'Maestro', 'Unit Testing', 'Component Testing'],
  },
  {
    category: 'Performance & Monitoring',
    skills: [
      'Flashlight',
      'Embrace',
      'Firebase Crashlytics',
      'Sentry',
      'Performance Monitoring',
    ],
  },
  {
    category: 'CI/CD & Deployment',
    skills: [
      'Bitrise',
      'CodePush',
      'Git',
      'Bitbucket',
      'GitHub',
      'OTA Updates',
    ],
  },
  {
    category: 'Cloud & Services',
    skills: ['Firebase', 'Amazon SNS', 'GCM', 'Dynamic Links', 'Remote Config'],
  },
  {
    category: 'Form & Validation',
    skills: ['Formik', 'Yup', 'JSON Schema Validation', 'Dynamic Forms'],
  },
  {
    category: 'UI/UX & Design',
    skills: [
      'HTML',
      'CSS',
      'Design Language System',
      'Pixel-perfect UI',
      'Shimmer Placeholders',
    ],
  },
  {
    category: 'Project Management',
    skills: [
      'Agile',
      'JIRA',
      'Sprint Planning',
      'Code Reviews',
      'Documentation',
    ],
  },
  {
    category: 'Languages & Strengths',
    skills: [
      'English',
      'Hindi',
      'Passionate',
      'Motivated',
      'Quick Learner',
      'Problem Solving',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: '1',
    degree: 'B.Tech | Computer Science and Engineering',
    institution: 'Heritage Institute of Technology',
    duration: '2015 - 2019',
    location: 'Chowbaga Rd, Anandapur, Kolkata, West Bengal 700107',
    description:
      'Graduated with 7.44 CGPA. Specialized in software engineering and computer science fundamentals.',
  },
  {
    id: '2',
    degree: 'Higher Secondary',
    institution: "Children's Garden School",
    duration: '2012 - 2014',
    location: 'Ward No.-5, Kaimur District, Bhabua, Bihar 821101',
    description:
      'Completed higher secondary education with focus on science and mathematics.',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: '1',
    title: 'CARS24 - Buy & Sell Used Cars',
    description:
      "CARS24 is India's leading e-commerce platform for pre-owned vehicles, with over 10M+ downloads. The app enables users to buy and sell used cars with complete transparency, quality assurance, and doorstep services. Features include AI-powered car evaluation, instant loan approval, and nationwide logistics.",
    githubUrl: undefined,
    liveUrl: undefined,
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.cars24.seller',
    appStoreUrl:
      'https://apps.apple.com/in/app/cars24-sell-buy-used-cars/id1364492085',
  },
  {
    id: '2',
    title: 'CARS24 UAE - Used Cars & Drivers',
    description:
      'CARS24 UAE is a comprehensive super app for all car-related needs in the UAE market. The app offers used car buying and selling, car loans, car servicing, valuation certificates, and chauffeur services through Chauferly. Features include 150+ quality checkpoints, 7-day trial with full refund, and RTA-licensed driver services.',
    githubUrl: undefined,
    liveUrl: undefined,
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.cars24.uaeusedcars',
    appStoreUrl:
      'https://apps.apple.com/in/app/cars24-uae-used-cars-drivers/id1564454362',
  },
  {
    id: '3',
    title: 'CARS24 Partners - Dealer App',
    description:
      'CARS24 Partners is a specialized dealer app for business partners and car dealers to participate in CARS24 auctions. The app enables seamless car bidding experiences with real-time auction updates, comprehensive inspection reports, and exclusive dealer features. Recently migrated from a single-screen webview to a full React Native implementation, providing enhanced performance and native user experience.',
    githubUrl: undefined,
    liveUrl: undefined,
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.cars24.dealerapp',
    appStoreUrl: undefined,
  },
  {
    id: '4',
    title: 'Sigma - Stanza Living',
    description:
      'Sigma was initially developed as a property onboarding platform for Stanza Living, enabling property owners to seamlessly onboard their properties into the Stanza Living ecosystem. The app facilitated the entire property transformation process, from initial assessment to full integration. Later evolved into a comprehensive property management solution for Stanza Living properties.',
    githubUrl: undefined,
    liveUrl: undefined,
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.stanzaliving.sigma',
    appStoreUrl: 'https://apps.apple.com/in/app/stanza-sigma/id1562992124',
  },
  {
    id: '5',
    title: 'Moonpark - SpurTree Technologies',
    description:
      'Moonpark is a learning platform that connects guides and students for hobby-based learning experiences. Users can onboard as guides to create classes or as students to book classes near them. The app helps people discover hobbies, connect with like-minded individuals, and participate in both paid and free learning sessions. Features include class creation, booking, location-based discovery, and community building.',
    githubUrl: undefined,
    liveUrl: 'https://www.myandroid.org/apps/apple-com-moonpark-app',
    playStoreUrl: undefined,
    appStoreUrl: undefined,
    note: 'Not available in India - International markets only',
  },
  {
    id: '6',
    title: 'GenKloud - SpurTree Technologies',
    description:
      'Genkloud  is a purpose-built gamified professional platform designed exclusively for Gen Y and Z generations. It serves as a remote office in the cloud, enabling users to connect, build businesses, offer skills, and champion activism movements. Features include talent discovery, project collaboration, community forums, mentorship connections, and impact storytelling. The platform addresses workplace culture evolution and supports the new way of working for younger generations.',
    githubUrl: undefined,
    liveUrl: 'https://xiitu.com/',
    playStoreUrl: undefined,
    appStoreUrl: undefined,
    note: 'Not available in India - International markets only',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: '1',
    name: 'React Native Essential Training',
    issuer: 'LinkedIn Learning',
    date: '2021',
    credentialId: 'AbKD5cKMWyMpEnW8XyOYtAcIzEZK',
    credentialUrl:
      'https://drive.google.com/file/d/1Ay_1JBy_TZgsKRiutSuH6KErSNCxm9nc/view?usp=sharing',
  },
  {
    id: '2',
    name: 'React.js Essential Training',
    issuer: 'LinkedIn Learning',
    date: '2020',
    credentialId: 'AajzdxAA5XdMHLl34b2y5mNd6Z1O',
    credentialUrl:
      'https://drive.google.com/file/d/1CwRSqtUTAxFsPEMlnVCD9U70X5sGFXYa/view?usp=sharing',
  },
  {
    id: '3',
    name: 'Database Management System',
    issuer: 'Udemy',
    date: '2020',
    credentialId: 'UC-b65d7740-d3cc-44af-b577-5fc678362a61',
    credentialUrl: 'http://ude.my/UC-b65d7740-d3cc-44af-b577-5fc678362a61',
  },
  {
    id: '4',
    name: 'Database Management System',
    issuer: 'Udemy',
    date: '2020',
    credentialId: 'UC-fbd57600-5357-4e38-82b4-50c5fa0da8c2',
    credentialUrl: 'http://ude.my/UC-fbd57600-5357-4e38-82b4-50c5fa0da8c2',
  },
  {
    id: '5',
    name: 'The Complete Java Certification Course',
    issuer: 'Udemy',
    date: '2020',
    credentialId: 'UC-cdffd092-a337-45e4-bd8a-4a5103215dab',
    credentialUrl: 'http://ude.my/UC-cdffd092-a337-45e4-bd8a-4a5103215dab',
  },
];

export const contentData = {
  experience: experienceData,
  skills: skillsData,
  education: educationData,
  projects: projectsData,
  certifications: certificationsData,
};

export default contentData;
