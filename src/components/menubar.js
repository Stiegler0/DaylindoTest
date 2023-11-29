import React from 'react';
import './menubar.css'; 

const Menubar = () =>{
    return(
        <aside className='menubar'>
            <div className="sidebar-top">
                
            
            <nav className='menu'>
                <div className="item">
                    <a href='#'>Raja</a>
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