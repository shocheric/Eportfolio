import styles from './page.module.css';

export default function Contact() {

    return (
        <div className={styles.contentBlock}>
            <h1 className={styles.sectionHead}>
                Contact
            </h1>
            <div className={styles.contact}>
                <h2 className={styles.projectTitle}>Email</h2>
                <p>shocheric@gmail.com</p>
                <br></br>
                <h2 className={styles.projectTitle}>Phone</h2>
                <p>(570) 809-6503</p>
                <br></br>
                <a target="_blank" className={styles.projectTitle} href="https://www.linkedin.com/in/eshoch/">LinkedIn</a>
            </div>
        </div>
    );
}