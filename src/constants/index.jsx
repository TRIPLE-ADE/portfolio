import { html, css, js, tailwind, react, main, mentor, music, crypto, digisec,bank } from "../assets";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact",
  },
];

export const Skills = [
  {
    id: 1,
    icon: html,
    text: "HTML",
  },
  {
    id: 2,
    icon: css,
    text: "CSS",
  },
  {
    id: 3,
    icon: js,
    text: "JavaScript",
  },
  {
    id: 4,
    icon: tailwind,
    text: "Tailwind CSS",
  },
  {
    id: 5,
    icon: react,
    text: "React JS",
  },
];

export const Projects = [
  {
    id: 1,
    image: digisec,
    name: "HTML | CSS | JavaScript | Google API",
    work: "Digital Security",
    github: "https://github.com/TRIPLE-ADE/Digital_security_village",
    live: "https://digisecvillage.org/",
  },
  {
    id: 2,
    image: main,
    name: "HTML | CSS | JavaScript",
    work: "Zuri Replica",
    github: "https://github.com/TRIPLE-ADE/Zuri-Replica",
    live: "https://triple-ade.github.io/Zuri-Replica/",
  },
  {
    id: 3,
    image: crypto,
    name: "HTML | CSS | JavaScript",
    work: "Crypto-Currency",
    github: "https://github.com/TRIPLE-ADE/Crypto-Currency-landing-Page",
    live: "https://cryptocurrenc.netlify.app/",
  },
  {
    id: 4,
    image: music,
    name: "HTML | CSS | JavaScript",
    work: "MusicApp",
    github: "https://github.com/TRIPLE-ADE/Musica-Tunes",
    live: "https://music-tunes.netlify.app/",
  },
  {
    id: 5,
    image: mentor,
    name: "React | Tailwind-CSS | Firebase | API",
    work: "MentorApp",
    github: "https://github.com/TRIPLE-ADE/Metro-web",
    live: "https://metro-carousel.netlify.app/",
  },
  {
    id: 6,
    image: bank,
    name: "React | Tailwind-CSS",
    work: "HooBank",
    github: "https://github.com/TRIPLE-ADE/bank-modern-app",
    live: "https://modern-bank-web-app.netlify.app/",
  },
];

export const FootersLink = [
    {
        id: 1,
        icon: <FaTwitter/>,
        link: 'https://twitter.com/Triple123A'
    },
    {
        id: 2,
        icon: <FaLinkedinIn/>,
        link: 'https://www.linkedin.com/in/abdulsalam-dev'
    },
    {
        id: 3,
        icon: <FaGithub/>,
        link: 'https://github.com/TRIPLE-ADE'
    },
]

