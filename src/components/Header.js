import React from 'react';
import './Header.css'; // Assurez-vous de créer également un fichier Header.css pour le style
import icon1 from '../ic_search.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="Company">
                    <h1>Company name</h1>
                    <p>Bootcamp name here</p>
                </div>
        <div className="barre-recherche">
            <img src={icon1} className="searchicon" alt="logo" />
            <input type="text" placeholder="Search" className='search-input'/>
        </div>
        <div className="icons">

        </div>
        <div className="Utilisateur">
            <div className='icon'></div>
            <span>Nom Utilisateur</span>
        </div>
    </header>
  );
}

export default Header;
