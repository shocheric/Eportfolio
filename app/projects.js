import styles from './page.module.css';
import ProjectCard from "./projectCard.js";
// Image imports
import chemTutor from "../public/chemTutor.png"
import cratePic from "../public/crateNinja.png"
import eportPic from "../public/eportPic.png"
import surveyPic from "../public/surveyPic.png"
import schedPic from "../public/schedPic.png"
import googPic from "../public/googPic.png"
import cpuPic from "../public/Verilog_CPU.png"

// Project Objects
const chemTutorProj = {
    title: "Chemistry Tutor Game",
    description: "For this research project, I developed the frontend of a chemistry tutoring game using Unity and C#. I was responsible for creating all graphics and game objects as well as all frontend programming. The Unity game fetches and stores data in a Java server. Both the game and server are hosted on a Penn State IST issued remote server, which I share responsibility for managing. Use username \"admin7071\" for testing levels 1 and 2.",
    link: "https://chem.ist.psu.edu",
    skills: "C#, Unity, HTTP Requests, 3D Modeling, Graphic Design",
    pic: chemTutor,
    vid: null
}

const surveyProj = {
    title: "Terms and Conditions Survey Application",
    description: "For this research project, I worked with a graduate student to answer the question, \"How severe is too severe when it comes to terms and conditions statements?\". To help with carrying out this study, I created a web application using React where surveyors could rate the severity and understandability of 5 randomly selected statements commonly found on terms and conditions files. The ratings were then stored in a SQLite database for analysis",
    link: "https://github.com/shocheric/Survey-Application",
    skills: "JavaScript, Python, Flask, HTTP Requests, JSX, React, HTML/CSS, SQLite",
    pic: surveyPic,
    vid: null
}

const schedulerProj = {
    title: "Course Schedular GUI",
    description: "This project was part of a Object Oriented Programming Course. For it, I created a Course scheduler similar to ones students use in college. There is a admin panel for adding students to the SQL database, and a student panel for adding or dropping courses. You can schedule for multiple semesters as well. SwingGUI was used to create the graphical user interface. The purpose of this project was to increase understanding of OOP principles like inheritance.",
    link: null,
    skills: "Java, SwingGUI, Apache Netbeans, SQL",
    pic: schedPic,
    vid: null
}

const verilogCpuProj = {
    title: "Verilog CPU",
    description: "This project built gradually over the course of a semester in a Computer Engineering class. For it, I wrote the verilog code to implement the CPU modules necessary to carry out general R-Format and I-Format MIPS commands like load word (lw), store word (sw) and add. Modules included an arithmetic logic unit (ALU), a program counter for tracking location within the instruction memory, multiplexers for choosing the proper datapath, and many more.",
    link: null,
    skills: "Verilog, Vivado, Computer Engineering",
    pic: cpuPic,
    vid: null
}

const googleProj = {
    title: "Google Clone",
    description: "This project was done as part of a Harvard CS50 course I took online over the summer. The purpose was to use CSS and HTML to create a functioning Google Clone. When running, you can actually search and use the \"I'm feeling lucky\" feature. There is also an Image Search and an Advanced Search page. The search features work by appending whatever content the user wants to search for onto the actual Google search URL.",
    link: "https://github.com/shocheric/Google-Clone",
    skills: "HTML/CSS, Github",
    pic: googPic,
    vid: null
}

const crateNinja = {
    title: "Fruit Ninja Varient",
    description: "\"Crate Ninja\" was an early Unity project that I made to help practice using Unity's particle system for visual effects. It plays like Fruit Ninja, where you must explode the crates before they hit the ground and avoid the bombs. Your lives are limited. There are three difficulty modes to choose from: Easy, Medium, and Hard. Each mode will spawn crates at a different frequency. You can try the game for yourself by clicking the image.",
    link: "https://play.unity.com/mg/other/webgl-builds-368609",
    skills: "C#, Unity, Unity Particle System",
    pic: cratePic,
    vid: null
}

const eportfolioProj = {
    title: "This Website!",
    description: "My english class tasked us with creating an eportfolio on Wordpress, but I didn't like any of the templates, so I coded my own website from scratch! It utilizes Next.js and React, making assembling it much more streamlined. Every project or experience block that you see is a React component, loaded into an array and passed all the text and images that you see as a prop. There was no need for copy and paste. Additionally, the website is entirely static.",
    link: "https://github.com/shocheric/Eportfolio",
    skills: "JavaScript, JSX, Next.js, React, HTML/CSS",
    pic: eportPic,
    vid: null
}

let projects = [chemTutorProj, surveyProj, schedulerProj, verilogCpuProj, googleProj, crateNinja, eportfolioProj]
export default function Projects() {
    // Upload projects to be displayed
    const projComponents = []

    for (let i = 0; i < projects.length; i++) {
        let activeProj = projects[i]
        let newProj = <ProjectCard title={activeProj.title} description={activeProj.description} skills={activeProj.skills} link={activeProj.link} pic={activeProj.pic}/>
        projComponents.push(newProj)
    }


    return (
        <div className={styles.contentBlock}>
            <h1 className={styles.sectionHead}>
                Projects
            </h1>
            {projComponents}
        </div>
    );
}