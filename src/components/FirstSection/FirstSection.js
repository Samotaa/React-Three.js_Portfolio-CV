import React from 'react';
import Scene from './Cat/Scene.js'
import About from './AboutMe/AboutMe'
import './FirstSection.scss'

const First = () => {
    return(
        <div className="containerFirst">
       
            <div className="about">
                <About />
            </div>
            <div className='scene'>
                <Scene />
            </div>   
            
        </div>
        
    )
}


export default First;