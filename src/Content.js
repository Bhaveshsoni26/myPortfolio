// import images
import Hero_person from "./assets/images/Hero/person.png";

import CVDoc from "./assets/CV/Bhavesh_Soni.pdf";


import Laravel from "./assets/images/Skills/Laravel.png";
import PHP from "./assets/images/Skills/PHP.png";
import Flutter from "./assets/images/Skills/flutter.png";
import sketch from "./assets/images/Skills/sketch.png";
import Javascript from "./assets/images/Skills/JavaScript.png";
import CSS from "./assets/images/Skills/CSS.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
const getCountForExperience = () => {
  const today = new Date();
  const start = new Date("2023-01-04");
  const diff = today - start;
  let time = Math.floor(diff / (1000 * 60 * 60 * 24 * 24));
  let p = "Months";

  if(time > 12){
    time = Math.floor(time / 12);
    p = "Years";
  }
  return {count: time , period: p};
};
export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "BHAVESH",
    LastName: "SONI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: `${getCountForExperience().count}+`,
        text: `${getCountForExperience().period} of Experinse in Web development`,
      },
      {
        count: "2+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Laravel",
        para: "Laravel is a web application framework.",
        Indesc: [
          "Laravel is a web application framework with expressive, elegant syntax.",
          "Laravel is accessible, yet powerful, providing tools needed for large, robust applications. ",
          "A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.",
        ],
        logo: Laravel,

      },
      {
        name: "PHP",
        para: "PHP is a widely used server-side scripting language",
        Indesc: [
          "PHP is a widely used server-side scripting language designed for web development but also used as a general-purpose programming language.",
          "It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.",
          "It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server."
        ],
        logo: PHP,
      },
      {
        name: "Flutter",
        para: "Flutter is an open-source UI software development kit created by Google.",
        Indesc: [
          "Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.",
          "Flutter includes a modern react-style framework, a 2D rendering engine, ready-made widgets, and development tools. All of these widgets are written in the Dart programming language."
        ],
        logo: Flutter,
      },
      {
        name: "React js",
        para: "React is a JavaScript library for building user interfaces.",
        Indesc: [
          "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
          "React can be used as a base in the development of single-page or mobile applications.",
          "However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing."
        ],
        logo: reactjs,
      },
      {
        name: "CSS",
        para: "CSS describes how HTML elements are to be displayed on screen.",
        Indesc: [
          "CSS describes how HTML elements are to be displayed on screen, paper, or in other media.",
          "CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
          "External stylesheets are stored in CSS files.",
          "CSS is independent of HTML and can be used with any XML-based markup language.",
          "CSS is a simple design language intended to simplify the process of making web pages presentable.",
        ],
        logo: CSS,
      },
      {
        name: "JavaScript",
        para: "JavaScript is a client-side as well as server side scripting language.",
        Indesc: [
          "JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers.",
          "JavaScript is also an Object based Programming language",
          "JavaScript is a lightweight, interpreted programming language.",
          "JavaScript is designed for creating network-centric applications.",
 
        ],
        logo: Javascript,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).",
        logo: services_logo1,
      },
      {
        title: "Mobile App Development",
        para: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
        logo: services_logo4,
      },
      {
        title: "Database Management",
        para: "Database management is the process of creating and maintaining a database. The database management system (DBMS) is the software that interacts with end users, applications.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "This is my CV, you can download it and see my skills and experience.",
    btnText: "Hire Me",
    CVLink : CVDoc,
    
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "bhaveshsoni28105@gmail.com",
        icon: GrMail,
        link: "mailto:bhaveshsoni28105@gmail.com",
      },
      {
        text: "+91 7043398501",
        icon: MdCall,
        link: "https://wa.me/7043398501?text=Hello%20Bhavesh%20Soni",
      },
      {
        text: "Bhavesh Soni",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/bhavesh-soni-22871521a/" ,
      },
    ],
  },
  Footer: {
    text: "Copyright © BhaveshDev.in 2023",
  },
};
