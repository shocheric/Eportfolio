"use client";
import styles from "../page.module.css";
import Image from "next/image";
import Navbar from "../navbar.js";
import { useEffect } from "react";

export default function Resume() {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

    return (
        <main>
        <div className={styles.resumeBlock}>
            <Navbar active="resume"/>
            <iframe src="/resume.pdf" className={styles.resumeIframe}/>
        </div>
        </main>
    );
}