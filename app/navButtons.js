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
            <button onClick={() => scrollToElement(props.refs[0])} type="button" className={styles.btn}>PROJECTS</button>
            <button onClick={() => scrollToElement(props.refs[1])} type="button" className={styles.btn}>COURSES</button>
            <button onClick={() => scrollToElement(props.refs[2])} type="button" className={styles.btn}>CONTACT</button>
        </div>
    );
}