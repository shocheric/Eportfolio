import styles from './page.module.css';

export default function NavButtons() {
    return (
        <div className={styles.navButtons}>
            <button type="button" className={styles.btn}>RESUME</button>
            <button type="button" className={styles.btn}>PROJECTS</button>
            <button type="button" className={styles.btn}>CONTACT</button>
        </div>
    );
}