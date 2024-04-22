import styles from "../page.module.css";
import Image from "next/image";
import Navbar from "../navbar.js";

export default function Resume() {
    return (
        <main>
        <div className={styles.resumeBlock}>
            <Navbar active="resume"/>
            <iframe src="/resume.pdf" className={styles.resumeIframe}/>
        </div>
        </main>
    );
}