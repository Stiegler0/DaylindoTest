import React, { useState } from 'react';
import './css/menubar.css'; 
import arrowUp from '../Arrow.svg';
import arrowDown from '../Arrow (1).svg';



const Menubar = () => {

    const [openSection, setOpenSection] = useState('');
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSection = (section) => {
        if (openSection === section) {
            setOpenSection('');
            setSubMenuOpen(false); // Close submenu when collapsing the main section
        } else {
            setOpenSection(section);
            setSubMenuOpen(section === 'todo'); // Open submenu only for "À faire"
        }
    };

    return (
        <aside className='menubar'>
            <div className="sidebar-top">
                <nav className='menu'>
                    <div className="item">
                        <a href='#e'>Référentiels</a>
                        <img src={arrowUp} className="arrow" alt="arrow down" />
                    </div>
                    <div className="item">
                        <a href='#e'>Ressources</a>
                        <img src={arrowUp} className="arrow" alt="arrow down" />
                    </div>
                    <div className="item" onClick={() => toggleSection('todo')}>
                        <a href='#e' >À faire</a>
                        <img src={subMenuOpen ? arrowDown : arrowUp} className="arrow" alt="toggle submenu" />
                        {subMenuOpen && (
                            <div className='submenu'>
                                <div className="submenu-item">Séquences</div>
                                <div className="submenu-item">Parcours</div>
                            </div>    
                        )}
                    </div>
                    <div className="item">
                        <a href='#e'>Suivi groupe et apprenants</a>
                        <img src={arrowUp} className="arrow" alt="arrow down" />
                    </div>
                    {/* Other menu items */}
                </nav>
            </div>
            {/* Other parts of aside */}
        </aside>
    );
};

export default Menubar;
