import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link'

export default function Card(props) {
    return (
        <div className={styles.projectCard}>
            <div className={styles.parent}>
                <div className={styles.child} style={{padding: "15px"}}>
                    <div style={{borderRadius: '7px', border: '2px solid #004AAD', overflow: 'hidden'}}>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <div style={{borderRadius: "7px"}}>
                                <Image
                                    src={props.pic}
                                    height={200}
                                    width={200}
                                    alt="Picture of the project"
                                    className={props.link ? styles.imageLink : ''}
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styles.child} style={{padding: "10px", maxWidth: "700px"}}>
                    <div>
                        <h3 className={styles.projectTitle}>
                            {props.title}
                        </h3>
                    </div>
                    <div>
                        <p className={styles.projDesc}>{props.description}</p>
                    </div>
                    <div>
                        <h3 className={styles.skills}>{props.skills}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}