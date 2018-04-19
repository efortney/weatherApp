//header file, dynamically loads wu logo 
import React from 'react';

const Header = ({json}) => {
    if(!json){
        return <div className="loadingSpinner"> Loading... </div>
    }
    
    const imageURL = 'http://icons.wxug.com/graphics/wu2/logo_130x80.png';
    return (
        <div className="header row">
            <div className="headerLeft col-md-8">
                <h1 className="title"> React Weather </h1>
                <h4> A simple weather app written in React </h4>
            </div>
            <div className="headerRight col-md-4">
                <h6> Made possible by: </h6>
                <img className="wuImage" alt="wundergroundLogo" src={imageURL} />
            </div>
        </div>
    )
}

export default Header;