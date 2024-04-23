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
                    I’m Eric Shoch. Currently, I attend Penn State University, pursuing a Bachelor’s of Computer Science and a minor in Cybersecurity. Outside of class I work at the Applied Cognitive Science Laboratory in the school of Information Sciences and Technology (IST) as a software developer and research assistant. I have had the opportunity to work on several exciting projects and have become a coauthor/contributor on 3 formal studies. I have greatly enjoyed being a part of a team and having the opportunity to learn from other lab members.
                    <br></br>
                    <br></br>
                    I am a full stack software developer, having spent significant time learning and developing both frontend and backend projects. I hope to find a job as a fullstack developer so that I can continue doing what I enjoy. My more technical hobbies include game development, and 3D modeling. I create many of the 3D characters and objects in my games using Blender. I am still learning game development with Unity, but I have some ambitious games I'd like to create in my free time. I also enjoy fitness, trying to get at least 60 minutes of activity a day in the form of lifting, swimming, or MMA.
                    </p>
                    < NavButtons refs={props.refs}/>
                </div>
            </div>

        </div>
    );
}