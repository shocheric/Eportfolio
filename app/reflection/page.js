import styles from "../page.module.css";
import Image from "next/image";
import Navbar from "../navbar.js";

export default function Resume() {
    return (
        <main>
        <div >
            <Navbar active="reflection"/>
            <br></br>
            <br></br>
            <h1 className={styles.sectionHead}>
                Reflection
            </h1>
            <div className={styles.contentBlock}>
                <div className={styles.reflect}>
                    <p>
                    As a Junior, with possibly just one more year of college education left, I feel as though I’ve learned so much, and yet I know so little about its application in the industry setting. I’ve gained a lot of valuable experience, both in and out of the class. In class, I diligently studied programming principles and dove heavily into systems and backend programming as well as computer engineering. Out of class, I’ve learned and worked on several projects involving frontend development. I’ve programmed several websites, published a game that I fully programmed the frontend of as part of a research study, and more. Other projects have realized the union of both frontend and backend, where I developed full stack applications complete with remote servers. With both backend and frontend programming skills under my belt, I feel confident enough to call myself a full stack software developer. Yet, I know that a career as such involves much more than I have experienced so far. I am excited for the task though. I’m excited to see how industry differs from education, and I’m eager to truly be able to call myself a full stack developer. I hope to earn a career in Software development, and even if my focus is initially on a specific area, I plan to continue to sharpen my skills in others so that I can contribute in as many areas as I can.
                    <br></br>
                    <br></br>
                    In 5 years, I hope to have ascended to higher levels of developer responsibilities such as a Junior or Senior level Software developer. I enjoy working in teams, and after 5 years of experience I hope to be leading a team of my own. By then, I want to have earned the responsibility to head projects. At this point I will have had plenty of industry developer experience, becoming familiar with the tools and work systems used, making me better suited to helping others become familiar as well. I feel as though after years of contribution, it will be that much more rewarding to have a larger impact on the direction that my assignments go, being able to direct the development of quality products. I look forward to earning more responsibility, but I am in no rush yet to get there. I hope to learn everything I can before that point.
                    <br></br>
                    <br></br>
                    In 10 years, I hope to be in a managerial position. While I have no clue if 10 years is enough time to learn the in’s and out’s of the software engineering industry, I hope to have learned enough to feel comfortable stepping back completely from the hands on development and leaning even deeper into the managing aspect, now ascending from small teams to potentially entire departments. After that, who knows. 
                    <br></br>
                    <br></br>
                    Overall, my goal is to establish myself in an industry that I enjoy. I am not stamping any time horizons on it yet. I want to be patient and let things develop on their own. I want to produce quality work and be thought of as reliable. I feel like that is a perfect blend of goals to carry me far in software engineering.
                    </p>
                </div>
            </div>
        </div>
        </main>
    );
}