import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a solid foundation in creating efficient and scalable web applications. My experience spans front-end technologies like React and Tailwind, and back-end technologies including Node.js, MongoDB, and PostgreSQL. I’ve developed projects like Code-Quest, a technical Q&A platform, and SummarizeX, an AI-powered tool for summarizing articles with features like multi-language support and text-to-speech. My goal is to leverage my expertise in real-time communication and user-focused design to create innovative solutions that deliver exceptional experiences and drive growth.`;

export const ABOUT_TEXT = `I am a Chemical Engineering student at NIT Karnataka, Though my academic background is in chemical engineering, I am heavily interested in coding and have dedicated myself to learning and mastering technologies such as React, Node.js, MongoDB, and PostgreSQL. My fascination with software development drives me to continuously seek new challenges and opportunities to apply my skills in building efficient, scalable, and user-friendly web applications. I thrive in collaborative environments and am eager to contribute to innovative and impactful software solutions.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    role: "Full Stack Developer",
    company: "Nullclass-Nucleus Technology",
    description: `Developed Code-Quest, a Stack Overflow clone using React, JavaScript, and CSS, featuring a Gemini API-powered chatbot and integrated ads. Implemented a secure private chatroom for real-time communication and file sharing, with session-based data deletion. This project enhanced web development, real-time communication, and UX design skills, resulting in a sophisticated and user-friendly platform.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  {
    year: "Feb 2024 - March 2024",
    role: "Frontend Developer",
    company: "InternPixel",
    description: `Collaborated with a team to develop SparkTech, a website offering various online courses for developers and college students, focusing on creating a seamless and engaging front-end experience using React and CSS. This project enhanced front-end development and user interface design skills, enabling users to easily browse courses.`,
    technologies: ["HTML", "CSS", "React.js", "Javascript"],
  },
  {
    year: "June 2024 - July 2024",
    role: "Contributor ",
    company: "Vinaysa Summer of code ",
    description: `Contributed to diverse projects using tech stacks like React, Next.js, Tailwind, JavaScript, and TypeScript, showcasing versatility and expertise. Made over 350 contributions and merged over 75 pull requests, demonstrating commitment and effective collaboration. Ranked 2nd as a top contributor with 980 points, highlighting exceptional performance and proficiency.`,
    technologies: ["Javascript", "TypeScript", "Mongodb", "Python"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "SummarizeX",
    image: project1,
    description:
      "An AI powered tool for summarizing articles. Simplifies content consumption for busy professionals.",
    technologies: ["React", "Tailwind", "RapidApi", "Clerk"],
    link:"https://summarize-x.vercel.app/"
  },
  {
    title: "CodeQuest",
    image: project2,
    description:
      " Code-Quest, a Stack Overflow clone with a chatbot, ad integration, and secure real-time chat features using React, JavaScript, and CSS.",
    technologies: ["React", "CSS", "mongodb", "node.js"],
    link:"https://code-quest-webapp.vercel.app/"
  },
  {
    title: "Eduverse",
    image: project3,
    description:
      "Eduverse transforms traditional learning into an engaging and rewarding experience by combining the best educational content with innovative gamification techniques.",
    technologies: ["React", "Tailwind", "Javascript", "Bootstrap","AuthO"],
    link:"https://eduverse-app.vercel.app/"
  },
  {
    title: "Zomato Data analysis",
    image: project4,
    description:
      "Analyzed Zomato's dataset, performing data collection, preprocessing, EDA, and applying statistical methods to uncover insights for improved business decision-making in the food and restaurant industry.",
    technologies: ["Python", "numpy", "pandas", "Jupyter"],
    link:"https://github.com/Krishna100604/Zomato-data-analysis"
  },
];

export const CONTACT = {
  address: "Vadali,Gujarat,383235",
  phoneNo: "+919313060298 ",
  email: "krishnaprajapati757@gmail.com",
};


