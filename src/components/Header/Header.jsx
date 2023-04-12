import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
            <div className='brand-name'>
                <h2>Avi's Hub</h2>
            </div>
            <div className='link'>
                <Link to='/'>Home</Link>
                <Link to='/statics'>Statics</Link>
                <Link to='/applied'>Applied-jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div >
                <button className='btn-header' >Start applying</button>
            </div>
            </nav>    
           
        </div>
    );
};

export default Header;