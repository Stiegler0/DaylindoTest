import React from 'react';
import './Header.css'; // Assurez-vous de créer également un fichier Header.css pour le style
import icon1 from '../ic_search.svg';
import icon2 from '../ic_notification.svg';
import icon3 from '../ic_newsfeed.png';
import icon4 from '../ic_messages.svg';
import icon5 from '../Ellipse 2.svg';
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
          <img src={icon2} className="notificationlogo" alt="logo" />
          <img src={icon3} className="notificationlogo" alt="logo" />
          <img src={icon4} className="notificationlogo" alt="logo" />
        </div>
        <div className="Utilisateur">
            <div className='icon'>
            <img src={icon5} className="notificationlogo" alt="logo" />
            </div>
            <span>Nom Utilisateur</span>
        </div>
    </header>
  );
}

export default Header;
