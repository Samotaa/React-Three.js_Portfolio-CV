import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

import './Cards.scss'
export default function Cards() {
  return (
    <div className="cards">
        <div className="portfolio__title">
            <h4>My projects</h4>
        </div>
        <div className="cards__info">
            <div className="interactive__map card">
                <div className="project__name">
                    <h4>Belarus Interactive map</h4>
                    
                </div>
                <div className="project__description">
                    <p>
                        User can get information about population and national symbols on main page. On the map
                        user can get a detailed information about regions and cities. Universities and lakes have their
                        own markers with information on the map.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>HTML/CSS</p>
                    <p>MapBox</p>
                </div>
                <div className="link">
                    <a href="https://github.com/Samotaa/Belarus_Interactive_Map" target="_blank"> <AiFillGithub /></a>
                </div>
            </div>

            <div className="pokedex card">
                <div className="project__name">
                    <h4>Pokedex</h4>
                </div>
                <div className="project__description">
                    <p>
                        Service for exploring Pokemons.
                        Users can receive the list of all Pokemons and sort them by name or number, type, weakness,
                        height, weight. In addition, users can get description of each pokemon and his stats.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>HTML/CSS</p>
                    <p>PokeAPI</p>
                </div>
            </div>
            <div className="university card">
                <div className="project__name">
                    <h4>Pokedex</h4>
                </div>
                <div className="project__description">
                    <p>
                        Service for exploring Pokemons.
                        Users can receive the list of all Pokemons and sort them by name or number, type, weakness,
                        height, weight. In addition, users can get description of each pokemon and his stats.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>HTML/CSS</p>
                    <p>PokeAPI</p>
                    
                </div>
            </div>
            <div className="Pokedex card">
                <div className="project__name">
                    <h4>Pokedex</h4>
                </div>
                <div className="project__description">
                    <p>
                        Service for exploring Pokemons.
                        Users can receive the list of all Pokemons and sort them by name or number, type, weakness,
                        height, weight. In addition, users can get description of each pokemon and his stats.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>HTML/CSS</p>
                    <p>PokeAPI</p>
                </div>
            </div>
            <div className="Pokedex card">
                <div className="project__name">
                    <h4>Pokedex</h4>
                </div>
                <div className="project__description">
                    <p>
                        Service for exploring Pokemons.
                        Users can receive the list of all Pokemons and sort them by name or number, type, weakness,
                        height, weight. In addition, users can get description of each pokemon and his stats.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>HTML/CSS</p>
                    <p>PokeAPI</p>
                </div>
            </div>
            <div className="Pokedex card">
                <div className="project__name">
                    <h4>Pokedex</h4>
                </div>
                <div className="project__description">
                    <p>
                        Service for exploring Pokemons.
                        Users can receive the list of all Pokemons and sort them by name or number, type, weakness,
                        height, weight. In addition, users can get description of each pokemon and his stats.
                    </p>
                </div>
                <div className="project__stack">
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>HTML/CSS</p>
                    <p>PokeAPI</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
