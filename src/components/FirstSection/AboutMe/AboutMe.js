import React from 'react';
import './AboutMe.scss'

const About = () => {
    return(
       <div>
        <div className="about__me">
           
            <p className="first___sentence">
                Hello, my name is
            </p>
            <h1 className="my__fio">
                Artyom Novikevich
            </h1>
            <p className="text__about">
                I'm a junior frontend developer from Brest, Belarus
            </p>
        </div>
       </div>
    )
}


export default About;