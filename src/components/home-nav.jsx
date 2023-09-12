import React from 'react';
import '../styles/home-nav.css'
import logo from '../assets/icon.png'
import menu from '../assets/menu.svg'

export default function HomeNav() {
    return (
        <div className='home-nav'>
            <div className="logo-section">
                <img src={logo} alt="movie box logo" />
                <h2 className='movieBox-title'>MovieBox</h2>
            </div>
            <div className="search-bar">
                <input type="text" name="search" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="signin-section">
                <h4>Sign in</h4>
                <img src={menu} alt="menu icon" />
            </div>
        </div>
    )
}
