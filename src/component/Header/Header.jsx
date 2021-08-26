import React from 'react';
import './Header.css';


const Header = ({headingTitle, headerExpanded}) => {
    return(
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
            className={`Head-image ${headerExpanded ? `head-image-expanded` : 'head-image-contraced' }`} alt="" />
        <h1 className={`Head-text ${headerExpanded ? `head-text-expanded` : 'head-text-contraced' }`}>{headingTitle}</h1>
        </div>
    );
};


export default Header;