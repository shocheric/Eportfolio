import styles from './page.module.css';

// On click definition
const scrollToElement = e => {
    e.current.scrollIntoView({
        behavior: "smooth"
    });
};

export default function NavButtons(props) {
    return (
        <div className={styles.navButtons}>
            <div className={styles.sepDiv}>
                <button onClick={() => scrollToElement(props.refs[0])} type="button" className={styles.btn}>PROJECTS</button>
            </div>
            <div className={styles.sepDiv}>
                <button onClick={() => scrollToElement(props.refs[1])} type="button" className={styles.btn}>COURSES</button>
            </div>
            <div className={styles.sepDiv}>
                <button onClick={() => scrollToElement(props.refs[2])} type="button" className={styles.btn}>CONTACT</button>
            </div>
        </div>
    );
}