import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import people from '../../people.json';
import './style.sass';

function Nav() {
    return (
        <ul className='nav'>
            {
                people.map(p => <Link to={p.name} replace >
                    <li 
                        key={`l_${p.name}`}
                        data-name={p.name}>
                    </li>
                </Link>)
            }
        </ul>
    );
}

export default Nav;
