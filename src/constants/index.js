/*
 ! This file contains all the constants used in the project, can be used to change the content of the website.
*/
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  carrent,
  jobit,
  tripguide,
  icon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Red Team Operations",
    icon: web,
  },
  {
    title: "Malware Development",
    icon: mobile,
  },
  {
    title: "Debian GNU/Linux",
    icon: backend,
  },
  {
    title: "Research",
    icon: creator,
  },
];

const socials = [
  {
    name: "github",
    url: "https://github.com/smadi0x86",
    icon: github,
  },
  {
    name: "github",
    url: "https://github.com/smadi0x86",
    icon: github,
  },
  {
    name: "github",
    url: "https://github.com/smadi0x86",
    icon: github,
  },
];

const technologies = [];

const experiences = [
  {
    title: "Technical Trainer",
    company_name: "Enlighten Me Club - HTU · Self-employed",
    icon: icon,
    iconBg: "#FFF",
    date: "Mar 2023 - Present",
    points: [
      "Enlighten Me Club is a student club at Al Hussein Technical University aiming to provide the less fortunate children and teenagers with opportunities to learn programming, english and many more under the emblem of “Knowledge is for everybody”.\n",

      "My responsibilities include:\n",

      "Communication with children and delivering information efficiently.",
      "Develop their creativity, problem solving and guide them to a bright future.",
      "Creating presentations that can help them better understand why learning is important in a entertaining way.",
      "Teach programming and increase their ability to learn, develop and improve their skills in programming.",
    ],
  },
];

const projects = [
  {
    name: "Offensive operations pathway",
    description:
      "As a head of offensive operations in my university's cyber security club, I developed this pathway to help new members learn the basics of offensive operations.",
    tags: [
      {
        name: "red team",
        color: "blue-text-gradient",
      },
      {
        name: "offensive operations",
        color: "green-text-gradient",
      },
      {
        name: "pathway",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/smadi0x86/CSC-RedOps",
  },
  {
    name: "Java Teach2Learn",
    description:
      "This is a study technique that I developed to help me learn Java for my university, It tricks your brain into thinking you already know these concepts and that you are teaching it to someone else.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Teach2Learn",
        color: "green-text-gradient",
      },
      {
        name: "University",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/smadi0x86/java0x01",
  },
  {
    name: "MalwareHolmes",
    description:
      "This is a malware Identifier for my university's programming final project written in java!",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Maven",
        color: "green-text-gradient",
      },
      {
        name: "Malware-detection",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/smadi0x86/MalwareHolmes",
  },
];

export { services, technologies, experiences, projects, socials };
// export { services, technologies, experiences, projects };
