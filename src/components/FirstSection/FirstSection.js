import React from 'react';
import Scene from './Cat/Scene.js'
import About from './AboutMe/AboutMe'
import './FirstSection.css'

const First = () => {
    return(
        <div className="containerFirst">
            <About />
            <div className='scene'>
                <Scene />
            </div>   
        </div>
        
    )
}


export default First;