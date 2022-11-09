import React from 'react';
import './AboutMe.scss'
import '../FirstSection.scss'
import { motion, transform } from "framer-motion"

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}
const About = () => {
    return(
       <div>
        <motion.div 
            initial="hidden"
            whileInView="visible"
            className="about__me">
           
            <motion.p custom={2} variants={textAnimation} className="first___sentence">
               <bold>Hello, my name is</bold> 
            </motion.p>
            <motion.h1
            custom={3} variants={textAnimation}
            className="my__fio">
                Artyom Novikevich
            </motion.h1>
            <motion.h5
            custom={4} variants={textAnimation}
            className="text__about">
                I'm a junior frontend developer from Brest, Belarus
            </motion.h5>
        </motion.div>
       </div>
    )
}


export default About;