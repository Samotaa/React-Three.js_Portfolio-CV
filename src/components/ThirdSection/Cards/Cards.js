import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaChrome } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import './Cards.scss'
export default function Cards() {
  return (
    <div className="cards">
        <div className="portfolio__title">
            <h4>My projects</h4>
        </div>
        <div className="cards__info">

            <div className="planetor card">
                <div className="project__name">
                    <h4>Planetor</h4>              
                </div>
                <div className="project__description">
                    <p>
                        A Telegram Mini Aps game where the user creates their own unique planet and improves it
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>Vue</p>
                    <p>Pinia</p>
                    <p>Three.js</p>
                    <p>HTML/CSS</p>
                    <p>Tailwind</p>
                </div>
                <div className="link">
                    <a href="https://t.me/PlanetorBot" target="_blank"> <FaTelegram /></a>
                </div>
            </div>

            <div className="todo card">
                <div className="project__name">
                    <h4>Todo list</h4>              
                </div>
                <div className="project__description">
                    <p>
                        Full basic functionality of the Todo list.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>Vue</p>
                    <p>Pinia</p>
                    <p>HTML/CSS</p>
                    <p>Tailwind</p>
                </div>
                <div className="link">
                    <a href="https://github.com/Samotaa/vue-todo-test" target="_blank"> <AiFillGithub /></a>
                </div>
            </div>

            <div className="horoscope card">
                <div className="project__name">
                    <h4>Horoscope</h4>              
                </div>
                <div className="project__description">
                    <p>
                        A Telegram Mini App providing daily horoscope updates
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>Vue</p>
                    <p>Pinia</p>
                    <p>HTML/CSS</p>
                    <p>Tailwind</p>
                </div>
                <div className="link">
                    <a href="https://github.com/Samotaa/zodiac-task" target="_blank"> <AiFillGithub /></a>
                </div>
            </div>
    
            <div className="landing card">
                <div className="project__name">
                    <h4>Landing</h4>
                </div>
                <div className="project__description">
                    <p>
                        A website for a startup
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>Vue</p>
                    <p>HTML/CSS</p>
                    <p>Tailwind</p>
                </div>
                <div className="link">
                    <a href="https://planetor.io/" target="_blank"> <FaChrome /></a>
                </div>
            </div>
    
            <div className="interactive__map card">
                <div className="project__name">
                    <h4>Interactive map</h4>
                </div>
                <div className="project__description">
                    <p>
                        An interactive map with edit mode
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>React</p>
                    <p>HTML/CSS</p>
                    <p>Leaflet</p>
                </div>
                <div className="link">
                    <a href="https://github.com/Samotaa/react-map" target="_blank"> <AiFillGithub /></a>
                </div>
            </div>

            <div className="pokedex card">
                <div className="project__name">
                    <h4>Movies App</h4>
                </div>
                <div className="project__description">
                    <p>
                        A simple web app for search movie and explore his description.                    
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>HTML/SASS</p>
                    <p>Axios</p>
                    <p>TMDb API</p>
                </div>
                <div className="link">
                    <a href="https://github.com/Samotaa/React-Redux_MoviesApp" target="_blank"> <AiFillGithub /></a>
                </div>
            </div>
            <div className="wether card">
                <div className="project__name">
                    <h4>Wether app</h4>
                </div>
                <div className="project__description">
                    <p>
                        Servise where user can get information about the weather.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>React</p>
                    <p>HTML/CSS</p>
                    <p>Axios</p>
                    <p>Wether API</p>
                </div>
                <div className="link">
                    <a href="https://github.com/Samotaa/React-Wether_App" target="_blank"> <AiFillGithub /></a>
                </div>
            </div>
            <div className="Pokedex card">
                <div className="project__name">
                    <h4>Portfolio</h4>
                </div>
                <div className="project__description">
                    <p>
                        This web site :)
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>React</p>
                    <p>Three.js</p>
                    <p>HTML/SASS</p>
                    <p>Blender 3D</p>
              
                </div>
                <div className="link">
                    <a href="https://github.com/Samotaa/React-Three.js_Portfolio-CV" target="_blank"> <AiFillGithub /></a>
                </div>
            </div>
            <div className="Pokedex card">
                <div className="project__name">
                    <h4>Pokedex</h4>
                </div>
                <div className="project__description">
                    <p>
                        Service for exploring Pokemons.
                        Users can receive the list of all Pokemons and sort them by name or number, type, weakness.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JS</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>HTML/CSS</p>
                    <p>Axios</p>
                    <p>PokeAPI</p>
                </div>
                <div className="link">
                    <p className='pokedex'>No code because the project was created at internship</p>
                </div>
                    
            </div>
        </div>
        
    </div>
  )
}
