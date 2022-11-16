import React from 'react';
import { motion, transform } from "framer-motion"

import './SecondSection.scss'
import { DiReact, DiSass } from 'react-icons/di';
import { SiJavascript, SiRedux, SiThreedotjs, SiMapbox, SiMysql } from 'react-icons/si';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';

import file from '../doc/ArtyomNovikevich_CV.pdf'
import Me from '../images/me.JPG'
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
                        Hello! My name is Artyom and Im 22 y.o. My interest in web development started 
                        back in 2018 when i first time met HTML & CSS on computer science lesson at school. 
                        After this I decided to connect my life with programming.
                    </motion.p>
                    <motion.p 
                    custom={2} variants={textAnimation} 
                    className="info__about__me-paragraph-second">
                        In May 2022 I attended an internship at EpolSoft for 3 months as frontend developer.
                        In June 2022 I graduated from Brest State Technical University as a software engineer.
                        Now im creating projects for my portfolio and actively searching for job or internship as a frontend developer.
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
                                    <li><SiRedux /> Redux</li>
                                    <li><SiThreedotjs /> Three.js</li>
                                </ul>
                            </div>
                            <div className="tools">
                                <ul>
                                    <li><DiSass /> SASS</li>
                                    <li><AiFillGithub /> Git</li>
                                    <li><SiMysql /> MySQL</li>
                                    <li><SiMapbox /> MapBox</li>
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