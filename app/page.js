import Image from "next/image";
import styles from "./page.module.css";
// Component imports
import Navbar from "./navbar.js";
import AboutMe from "./aboutMe.js";
import Projects from "./projects.js"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* Header with Navbar */}
        <Navbar />
        {/* Circular image with eportfolio introduction */}
        <AboutMe />
        {/* Cards with sections: Resume, Projects, About Me */}
        <Projects />
      </div>
    </main>
  );
}
