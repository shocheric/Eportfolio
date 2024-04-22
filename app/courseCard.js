import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import Image from 'next/image';

export default function courseCard(props) {
    return (
        <div className={styles.projectCard}>
            <div className={styles.parent}>
                <div className={styles.child} style={{padding: "10px", width: "700px"}}>
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