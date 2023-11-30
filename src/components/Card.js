import React from 'react';
import './css/PageContent.css'; // Make sure to create a corresponding CSS file
import icon from '../OvalCopy3.svg';
import icon2 from '../Group 771.svg';
import arr from '../ic_back.svg';


const Banner = ({ type, title, subTitle }) => {
  return (
    <div className="banner">
        <div className="banner-content">
            <div className='arrowbox'>
                <img src={arr} className='arr'></img>
            </div>
            <div className='rectbox'></div>
            <div className='subbanner'>
                <img src={icon} className='icn'></img>
                <img src={icon2} className='ic1'></img>
                <h1 className='type'>{type}</h1>
            </div>
        
            <h1 className="banner-title">{title}</h1>
            {subTitle && <h2 className="banner-subtitle">{subTitle}</h2>}
            {/* Add additional content here if needed */}
        </div>
    </div>
  );
};

export default Banner;
