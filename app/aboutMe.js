import Image from 'next/image';
import profilePic from '../public/Profile.png';
import styles from "./page.module.css";
import codeBg from "../public/Code_BG.png";

// Component Imports
import NavButtons from './navButtons.js';

export default function AboutMe(props) {
    return (
        <div className={styles.contentBlock}>
            <div className={styles.parent} style={{height: '100%'}}>
                {/* Image block */}
                <div className={styles.child}>
                    <Image 
                        className={styles.aboutImg}
                        src={profilePic}
                        alt="Picture of the author"
                    />
                </div>

                {/* Text block */}
                <div className={styles.child}>
                    <h1 className={styles.aboutHead}>About Me</h1>
                    <p>
                    I’m Eric Shoch. Currently, I attend Penn State University, pursuing a Bachelor’s of Computer Science and a minor in Cybersecurity. Outside of class I work at the Applied Research Laboratory in the school of Information Sciences and Technology (IST) as a software developer and research assistant. I have had the opportunity to work on several exciting projects and have become a coauthor/contributor on 3 formal studies.
                    <br></br>
                    <br></br>
                    My hobbies include game development, 3D modeling, fitness, and mixed martial arts (MMA). I create many of the 3D characters and objects in my games myself using Blender. Fitness is part of my daily routine. I try to get around 60 minutes of activity a day. I enjoy lifting and MMA. I started training MMA in college, doing Muay Tai initially but eventually picking up Jiu Jitsu. I hope to continue with Jiu Jitsu after graduation. 
                    </p>
                    < NavButtons refs={props.refs}/>
                </div>
            </div>

        </div>
    );
}