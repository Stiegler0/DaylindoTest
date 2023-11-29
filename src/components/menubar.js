import React from 'react';
import './menubar.css'; 
import arrow from '../Arrow.svg';

const Menubar = () =>{
    return(
        <aside className='menubar'>
            <div className="sidebar-top">
            <nav className='menu'>
                <div className="item">
                    <a href='#e'>Référentiels</a>
                    <img src={arrow} className="arrow" alt="logo" />
                </div>
                <div className="item">
                    <a href='#e'>Ressources</a>
                    <img src={arrow} className="arrow" alt="logo" />
                </div>
            </nav>
            </div>
            <div className="Copyrights">
                <p>Powered by DAYLINDO</p>
            </div>
            <div className="ShowMore"></div>
        </aside>
    )
}

export default Menubar;