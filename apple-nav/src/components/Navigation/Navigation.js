import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    return (

        <header>
            <ul>
                <NavLink to='/'><li><i className="fab fa-apple"></i></li></NavLink>
                <NavLink to='/mac'><li>Mac</li></NavLink>
                <NavLink to='/ipad'><li>iPad</li></NavLink>
                <NavLink to='/iphone'><li>iPhone</li></NavLink>
                <NavLink to='/watch'><li>Watch</li></NavLink>
                <NavLink to='/tv'><li>TV</li></NavLink>
                <NavLink to='/music'><li>Music</li></NavLink>
                <NavLink to='/support'><li>Support</li></NavLink>
                <NavLink to='/search'><li><i className="fas fa-search"></i></li></NavLink>
                <NavLink to='/bag'><li><i className="fas fa-shopping-bag"></i></li></NavLink>
            </ul>
        </header>


    )
}

export default Navigation