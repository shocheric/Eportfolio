"use client";
import Image from "next/image";
import styles from "./page.module.css";
// Component imports
import Navbar from "./navbar.js";
import AboutMe from "./aboutMe.js";
import Projects from "./projects.js";
import Resume from "./resume/page.js";
import Contact from "./contact.js";
import Courses from "./courses.js";
import {Profiler, useRef} from 'react';

export default function Home() {
    // create reference
    const projRef = useRef()
    const courseRef = useRef()
    const contactRef = useRef()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* Header with Navbar */}
        <Navbar active="home"/>
        {/* Circular image with eportfolio introduction */}
        <AboutMe refs={[projRef, courseRef, contactRef]}/>
        {/* Cards with sections: Projects, Courses, Contact */}
        <div ref={projRef} id="Projects" >
          <Projects />
        </div>
        <div ref={courseRef} id="Courses" >
          <Courses />
        </div>
        <div ref={contactRef} id="Contact">
          <Contact/>
        </div>
      </div>
    </main>
  );
}
