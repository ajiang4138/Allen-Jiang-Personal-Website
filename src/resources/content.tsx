import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
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
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Resume",
    icon: "filepdf", 
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
  image: "/images/og/home.jpg",
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
        Hi, I'm Allen, a software engineer passionate about building intelligent systems that solve real-world problems. I enjoy data sciences and machine learning, and I love to develop games on the side!
        <br />
        <br />
        Currently, I'm a student and researcher at Georgia Tech, where I'm working on developing an AI-powered image compression and resilient radio transmission system. 
        <br />
        <br />
        Feel free to reach out!

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
        description: <>Bachelor of Science in Computer Science. 
            Concentrating in Intelligence and Infornetworks.</>,
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
          { name: "GNURadio", icon: "gnuradio" },
        ],
        images: [],
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

export { about, blog, gallery, home, newsletter, person, ResumeAccess, social, work };

