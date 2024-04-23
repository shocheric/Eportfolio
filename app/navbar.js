import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";


export default function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#004AAD"}}>
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{color: "white", fontFamily: "Courier", fontSize: 35}}>Eric Shoch</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav" style={{color: "white"}}>
            <ul class="nav navbar-nav">
                <li className={styles.navText}>
                <a className={`${styles.navLink} ${props.active=="home" ? styles.selected : ''}`} href="/">Home</a>
                </li>

                <li className={styles.navText}>
                <a className={`${styles.navLink} ${props.active=="resume" ? styles.selected : ''}`} href="/resume">Resume</a>
                </li>

                <li className={styles.navText}>
                <a className={`${styles.navLink} ${props.active=="reflection" ? styles.selected : ''}`} href="/reflection">Reflection</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}