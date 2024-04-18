import styles from './page.module.css';
import ProjectCard from "./projectCard.js";
// Image imports
import chemTutor from "../public/chemTutor.png"
import cratePic from "../public/crateNinja.png"
import eportPic from "../public/eportPic.png"

// Project Objects
const chemTutorProj = {
    title: "Chemistry Tutor Game",
    description: "For this research project, I developed the frontend of a chemistry tutoring game using Unity and C#. I was responsible for creating all graphics and game objects as well as all frontend programming. The Unity game fetches and stores data in a Java server. Both the game and server are hosted on a Penn State IST issued remote server, which I share responsibility for managing. Use username \"admin7071\" for testing levels 1 and 2.",
    link: "https://chem.ist.psu.edu",
    skills: "C#, Unity, HTTP Requests, 3D Modeling, Graphic Design",
    pic: chemTutor
}

const surveyProj = {
    title: "Terms and Conditions Survey Application",
    description: "For this research project, I worked with a graduate student to answer the question, \"How severe is too severe when it comes to terms and conditions statements?\". To help with carrying out this study, I created a web application using React where surveyors could rate the severity and understandability of 5 randomly selected statements commonly found on terms and conditions files. The ratings were then stored in a SQLite database for analysis",
    link: "https://github.com/shocheric/Survey-Application",
    skills: "JavaScript, Python, Flask, HTTP Requests, JSX, React, HTML/CSS, SQLite",
    pic: chemTutor,
    vid: null
}

const schedulerProj = {
    title: "Course Schedular GUI",
    description: "",
    link: "",
    skills: "Java, SwingGUI, Apache Netbeans, SQL",
    pic: chemTutor,
    vid: null
}

const verilogCpuProj = {
    title: "Verilog CPU",
    description: "",
    skills: "Verilog, Vivado, Computer Engineering",
    pic: chemTutor,
    vid: null
}

const operatingSystem = {
    title: "Operating System Features",
    description: "",
    skills: "C, GitHub, Networking, GitHub",
    pic: chemTutor,
    vid: null
}

const googleProj = {
    title: "Google Clone",
    description: "",
    link: "https://github.com/shocheric/Google-Clone",
    skills: "HTML/CSS, Github",
    pic: chemTutor,
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
    skills: "JavaScript, JSX, Next.js, React, HTML/CSS",
    pic: eportPic,
    vid: null
}

let projects = [chemTutorProj, surveyProj, schedulerProj, verilogCpuProj, operatingSystem, googleProj, crateNinja, eportfolioProj]

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