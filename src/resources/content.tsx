import { About, Blog, Gallery, Home, Newsletter, Person, Resume, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import React from 'react';

const person: Person = {
  firstName: "Allen",
  lastName: "Jiang",
  name: `Allen Jiang`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpeg",
  email: "ajiang4138@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ajiang4138",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ajiang4138/",
    essential: true,
  },
  {
    name: "Resume",
    icon: "resume", 
    link: "/images/Allen_Jiang_s_Resume_Spring_2026.pdf",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Architecting the future of intelligent systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Research</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Semantic Communications Architecture
        </Text>
      </Row>
    ),
    href: "/work/agile-communications-research",
  },
  subline: (
    <>
    I'm Allen, a CS major at <Text as="span" size="xl" weight="strong">Georgia Institute of Technology</Text>, specializing in 
      Machine Learning and Data Science.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Allen, a software engineer passionate about building intelligent systems that solve real world problems. 
        My concentrations are in Artificial Intelligence and Networks, and I enjoy data sciences and machine learning. 
        I'm always open to more knowledge in these fields.
        <br />
        <br />
        Currently, I'm a student and researcher at Georgia Tech, where I'm working on developing an AI-powered signal transmission system,
        using AI models to improve semantic communications.
        <br />
        <br />
        Feel free to reach out and connect with me on any platform!

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiences",
    experiences: [
      {
        company: "Planetway",
        timeframe: "June 2025 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed a responsive frontend using Next.js, TypeScript, and Tailwind CSS, enabling 
            interactive visualization of over 8,000 monthly data points.
          </>,
          <>
            Engineered a scalable Supabase backend, implementing Row Level Security and optimizing 
            SQL queries to achieve sub-second data retrieval latency.
          </>,
          <>
            Currently refactoring database queries to further accelerate rendering speeds for 
            data visualizations.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Georgia Institute of Technology",
        timeframe: "January 2025 - Present",
        role: "Researcher @ Agile Communications Architecture",
        achievements: [
          <>
          Developed an AI-powered image compression system using <Text as="span" weight="strong">PyTorch</Text> and <Text as="span" weight="strong">Stable Diffusion</Text> that reduces data transmission size by 90% while maintaining 95% visual accuracy, validated by OpenAI's CLIP.
          </>,
          <>
            Engineering a resilient radio transmission system using machine learning to detect and correct bit-errors, ensuring quality data delivery in noisy environments.
          </>,
          <>
            Exploring the intersection of <Text as="span" weight="strong">Semantic Communications</Text> and generative models to optimize bandwidth usage.
          </>,
          <>
            Utilizing <Text as="span" weight="strong">GNURadio</Text> and software defined radio tools to prototype and test real time signal processing algorithms for next generation wireless systems.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Georgia Institute of Technology",
        description: <>Bachelor of Science in Computer Science,
            concentrating in Intelligence and Infonetworks.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AI & Machine Learning",
        description: (
          <>
            Developing intelligent systems using PyTorch and TensorFlow. Experienced in 
            generative AI for image compression and predictive modeling with XGBoost.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "Scikit-learn", icon: "scikit-learn" },
        ],
        images: [], 
      },
      {
        title: "Full-Stack Development",
        description: (
          <>
            Building scalable web applications and interactive data visualizations 
            using Next.js, TypeScript, and high-performance Supabase backends.
          </>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Supabase", icon: "supabase" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
        ],
        images: [],
      },
      {
        title: "Systems & Networking",
        description: (
          <>
            Proficient in low-level programming and network architecture. Currently 
            exploring resilient radio transmission and semantic communications.
          </>
        ),
        tags: [
          { name: "C++", icon: "cplusplus" },
          { name: "C", icon: "c" },
          { name: "SQL", icon: "sql" },
          { name: "GNURadio", icon: "radio" },
        ],
        images: [],
      },
      {
        title: "Mobile & Software Engineering",
        description: (
          <>
            Experienced in native Android development and building engaging mobile 
            experiences. Strong foundation in core computer science concepts including 
            data structures, algorithms, and automata.
          </>
        ),
        tags: [
          { name: "Java", icon: "java" },
          { name: "Kotlin", icon: "kotlin" },
          { name: "Android Studio", icon: "android-studio" },
          { name: "Firebase", icon: "firebase" },
        ],
        images: [],
      },
      {
        title: "Developer Tools & Architecture",
        description: (
          <>
            Proficient in modern development workflows and specialized tools for 
            simulation and deployment. Experienced in collaborative version control 
            and game engine architecture.
          </>
        ),
        tags: [
          { name: "Git", icon: "git" },
          { name: "Vercel", icon: "vercel" },
          { name: "Unity", icon: "unity" },
          { name: "Jupyter", icon: "jupyter" },
        ],
        images: [],
      },
    ],
  },
  hobbies: {
    display: true,
    title: "Hobbies",
    items: [
      {
        title: "Game Development",
        description: <>I enjoy dabbling in game development using Unity and GameMakerStudios. My most recent project is an action platformer, coming to my Github soon!</>,
      },
      {
        title: "Photography",
        description: <>I occasionally travel, and enjoy capturing photos of the cityscapes and cultures I encounter. View them in my gallery!</>,
      },
      {
        title: "Guitar",
        description: <>I enjoy playing the guitar, especially with friends or while working on projects to keep my mind engaged. I love playing the fingerstyle guitar, although I am still learning and improving my skills.</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/experiences",
  label: "Experiences",
  title: `Experiences – ${person.name}`,
  description: `Work and research by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const resume: Resume = {
  path: "/resume",
  label: "Resume",
  title: `Resume - ${person.name}`,
  description: `Read about ${person.name}'s resume here!`,
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Planetway",
        timeframe: "June 2025 - Present",
        role: "Software Engineer",
        location: "Remote",
        achievements: [
          <>Developed a responsive frontend using Next.js, TypeScript, and Tailwind CSS deployed on Vercel, enabling visualization of 8,000+ monthly data points.</>,
          <>Engineered a scalable Supabase backend with Row Level Security and optimized SQL queries for sub-second latency.</>,
          <>Currently refactoring SQL queries to further accelerate rendering speed for data visualizations.</>
        ],
      },
      {
        company: "Agile Communications Architecture",
        timeframe: "January 2025 - Present",
        role: "Researcher @ GaTech",
        location: "Atlanta, GA",
        achievements: [
          <>Developed an AI-powered image compression system using PyTorch and Stable Diffusion that reduces data size by 90%.</>,
          <>Building a resilient radio transmission system using ML to automatically correct errors in high-interference environments.</>
        ],
      },
    ],
  },
  education: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Georgia Institute of Technology",
        degree: "Bachelor of Science in Computer Science",
        timeframe: "Expected May 2026",
        location: "Atlanta, GA",
        gpa: "3.7",
        details: <>Relevant Coursework: Machine Learning, AI, Computer Networking, Algorithms, and Data Structures.</>,
      },
    ],
  },
  projects: {
    display: true,
    title: "Projects",
    items: [
      {
        name: "Flight Connection Risk Predictor",
        technologies: ["Python", "XGBoost", "Pandas", "scikit-learn"],
        date: "Nov 2025",
        description: [
          <>Developed a ML model analyzing 15M+ flight records to predict missed connections with 90% accuracy.</>
        ],
      },
      {
        name: "Carbon Tracker",
        technologies: ["Javascript", "React", "Vercel", "Supabase"],
        date: "June 2025",
        description: [
          <>Collaborated with Planetway to build a carbon footprint tracking platform for companies with secure cloud backends.</>
        ],
      },
    ],
  },
  skills: {
    display: true,
    title: "Technical Skills",
    categories: [
      { name: "Languages", list: ["C++", "Python", "Java", "Javascript", "SQL"] },
      { name: "Frameworks", list: ["React", "PyTorch", "TensorFlow", "Supabase", "Vercel"] },
      { name: "Tools", list: ["Git", "GNURadio", "Unity", "Android Studio"] },
    ],
  },
  download: {
    display: true,
    url: "/images/Allen_Jiang_s_Resume_Spring_2026.pdf",
    fileName: "Allen_Jiang_Resume_2026.pdf",
    buttonLabel: "Download Full PDF",
  },
};

const ResumeAccess: React.FC = () => {
    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/Allen_Jiang_s_Resume_Spring_2026.pdf'; 
    link.download = 'Allen_Jiang_Resume.pdf';
    link.click();
};

    return (
        <div>
            <h2>Access My Resume</h2>
            <button onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export { about, blog, gallery, home, newsletter, person, resume, ResumeAccess, social, work };

