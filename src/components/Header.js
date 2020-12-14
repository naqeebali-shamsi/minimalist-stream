import React from 'react';
import { Link } from 'react-router-dom';
import Googleauth from './Googleauth';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
            <Link to="/streams/StreamList" className="item">
                   All streams 
            </Link>
            <Googleauth />
            </div>
        </div>
    );
};

export default Header;
