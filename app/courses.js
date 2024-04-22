"use client";
import {useRef} from 'react';
import styles from './page.module.css';
import CourseCard from './courseCard';

// course defintions
const dsaCourse = {
    title: "Data Structures and Algorithms",
    description: "This class was an intensive deep dive into various data structures and algorithms as well as their run time analysis. Topics reviewed include trees, with a focus on binary trees, Heaps (min and max) and Heap operations like Heapify-up/down, Search and Sort Algorithms, Shortest Path algorithms such as Kruskal's and Prim's, Flow algorithms, Matrix Multiplication algorithms, Linear Programming, and more. Coursework included analyzing algorithm runtimes in Big-O, Omega, and Theta notation as well as modifying existing algorithms to accomplish a different goal in the same runtime, such as finding all paths to a specific vertex while certain paths are blocked in O(nlogn) time."
}

const sysCourse = {
    title: "Systems Programming",
    description: "This course was explored systems programming in the C programming language. Emphasis was on the operating system side of the interplay between computer hardware and the operating system. We explored how the operating system sends and recieves binary signals and converts them into C instructions such as reading and writing into a buffer. Projects included creating a buffer read/write system with blocks of specified size. Other topics included cache implementation and network communication. By the end of the course, I had a fully operational read/write system with a single level cache on a remote server, which could be sent items to write or recieve items to read locally",
}

const cmpenCourse = {
    title: "Computer Engineering I/II",
    description: "This combination of courses provided an in depth look into the inner workings of modern day digital devices. The first course focused on circuit components like decoders, multiplexers, and logical hardware chips like and, or, nand, nor, etc. We studied many laws of electronics and dug deep into chip design, learning about the physics behind CMOS technology. In the second course, we focused more on the abstracted layers of computers like their CPU's and how they recieve and parse instructions in binary. Much of this class was spent designing our own CPU capable of performing memory stores/loads and other MIPS instructions like add, sub, etc.",
}

const progLangCourse = {
    title: "Programming Languages and Concepts",
    description: "This course examined the phases of program compilation and the requirements for creating a valid, parseable programming language. We examined the lexical analysis phase, in which we learned what lexemes and tokens were and their rule in compilation. Next we looked at the Syntax analysis phase, in which we build a syntax tree and determined if it coincides with the specified grammar. Next we learned about program semantics by utilizing a semantic programming language, rocket. An additional focus of this class was lambda calculus. The class project consisted of programming and Parser and Lexer for compiling a specific grammar.",
}

let courses = [dsaCourse, sysCourse, cmpenCourse, progLangCourse]

export default function Courses() {
    const courseComponents = []

    for (let i = 0; i < courses.length; i++) {
        let activeCourse = courses[i]
        let newCourse = <CourseCard title={activeCourse.title} description={activeCourse.description}/>
        courseComponents.push(newCourse)
    }

    return (
        <div className={styles.contentBlock}>
            <h1 className={styles.sectionHead}>
                Courses
            </h1>
            <div>
               { courseComponents }
            </div>
        </div>
    );
}