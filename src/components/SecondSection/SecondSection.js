import React from 'react';
import { motion, transform } from "framer-motion"

import './SecondSection.scss'
import { DiReact, DiSass } from 'react-icons/di';
import { FaLaravel, FaVuejs } from "react-icons/fa";
import { SiJavascript, SiRedux, SiThreedotjs, SiMapbox, SiMysql } from 'react-icons/si';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';

import file from '../doc/ArtyomNovikevichCV.pdf'
import Me from '../images/me.jpg'
const textAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const Second = () => {
    return(
        <div id="second" className="containerSecond">
            <div className = "info">
                <div className="my__picture">
                    <img src={Me} alt="me"></img>
                    <a href={file} target="_blank">Check out CV</a>
                </div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.3, once: true}}
                    className="info__about__me">
                    <h1
                    custom={2} 
                    variants={textAnimation} 
                    >  
                        About me
                    </h1>
                    <motion.p 
                    custom={2} variants={textAnimation} 
                    className="info__about__me-paragraph">
                        Hello! My name is Artyom and Im 23 y.o. My interest in web development started 
                        back in 2018 when i first time met HTML & CSS on computer science lesson at school. 
                        After this I decided to connect my life with programming. In 2022 graduated from BSTU as a software engineer.
                    </motion.p>
                    <motion.p 
                    custom={2} variants={textAnimation} 
                    className="info__about__me-paragraph-second">
                        In the field of frontend development, I work with JavaScript, React, Vue.js, and CSS/SCSS/Tailwind. I have knowledge of SQL and experience in backend development using PHP and Laravel. 
                        I use GitHub for version control. I completed a 3-month internship at EpolSoft as a Frontend Developer (React). From February 2023 to February 2024, I worked at Encore Studio as a Junior Full Stack Developer, 
                        where I optimized Laravel applications and developed frontend components using JavaScript and Vue3. Currently, I am a Frontend Developer and Designer at Planetor, a game in Telegram Mini Apps, 
                        where I focus on building and designing user interfaces with Vue3, Three.js, JavaScript and Tailwind.
                    </motion.p>
                    <motion.div 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{amount: 0.3, once: true}}
                        className="skills">
                        <h1 custom={3} variants={textAnimation} >Skills:</h1>
                        <motion.div 
                        custom={4} variants={textAnimation} className="skills__languages">
                            <div className="front">
                                <ul>
                                    <li><AiFillHtml5 /> HTML/CSS</li>
                                    <li><SiJavascript /> JavaScript</li>
                                    <li><DiReact /> React</li>
                                    <li><FaVuejs /> Vue</li>
                                    <li><SiThreedotjs /> Three.js</li>
                                </ul>
                            </div>
                            <div className="tools">
                                <ul>
                                    <li><DiSass /> SCSS</li>
                                    <li><FaLaravel /> Laravel</li>
                                    <li><AiFillGithub /> Git</li>
                                    <li><SiMysql /> MySQL</li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                
            </div>
            
        </div>    
    )
}


export default Second;
