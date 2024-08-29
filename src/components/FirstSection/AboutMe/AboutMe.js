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
        transition: {delay: custom * 0.3}
    })
}
const About = () => {
    return(
       <div>
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0, once: true}}
            className="about__me">
           
            <motion.p 
           
            custom={4} variants={textAnimation} className="first___sentence">
               <b>Hello, my name is</b> 
            </motion.p>
            <motion.h1
            
            custom={5} variants={textAnimation}
            className="my__fio">
                Artyom Novikevich
            </motion.h1>
            <motion.h5
          
            custom={6} variants={textAnimation}
            className="text__about">
                I'm a frontend developer from Brest, Belarus
            </motion.h5>
        </motion.div>
       </div>
    )
}


export default About;
