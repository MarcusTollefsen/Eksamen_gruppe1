import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <button style={{ backgroundColor: '#f8f8f8', padding: '10px 20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <h1>Pokédex</h1>
            </Link>
        </button>
    );
}

export default Header;