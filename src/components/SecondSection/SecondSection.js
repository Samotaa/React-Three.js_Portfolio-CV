import React from 'react';

import './SecondSection.scss'

import Me from '../images/me.JPG'
const Second = () => {
    return(
        <div className="containerSecond">
            <div className = "info">
                <div className="my__picture">
                    <img src={Me} alt="me"></img>
                </div>
                <div classname="info__about__me">
                    <h1>About me</h1>
                    <p className="info__about__me-paragraph">
                        Hello! My name is Artyom and Im 22 y.o. My interest in web development starter 
                        back in 2018 when i first time met HTML & CSS on computer science lesson at school. 
                        After this I decided to connect my life with programming.
                    </p>
                    <p className="info__about__me-paragraph-second">
                        In May 2022 I attended an internship at EpolSoft for 3 months as frontend developer.
                        In June 2022 I graduated from Brest State Technical University as a software engineer.
                        Now im creating projects for my portfolio and actively searching for job or internship as a frontend developer.
                    </p>
                </div>
            </div>
            <div>
                Skills:
            </div>
        </div>    
    )
}


export default Second;