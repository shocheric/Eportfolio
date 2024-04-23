import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import Image from 'next/image';

export default function courseCard(props) {
    return (
        <div className={styles.courseCard}>
            <div className={styles.parent}>
                <div className={styles.child}>
                    <div>
                        <h3 className={styles.projectTitle}>
                            {props.title}
                        </h3>
                    </div>
                    <div>
                        <p className={styles.projDesc}>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}