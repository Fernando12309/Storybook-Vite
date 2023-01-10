import React from 'react';
import PropTypes from 'prop-types';
import '../css/tailwind.css';

import { Button } from './Button';

export const Navbar = ({user, onLogin, onLogout, onCreateAccount}) => (
    <header className='bg-purple-200'>
        <nav className=" nav">
            <div className='flex items-start'>
                <img className='inline-block align-top' width="32" height="32" src="../img/logo.png" />
                <h1>Raven Clan</h1>
                
            </div>
            <div>
                <ul className="nav-list">
                        <li className='list-items'>Emotes</li>
                        <li className='list-items'>About Us</li>
                        <li className='list-items'>Events</li>
                        <li className='list-items'>Socials</li>
                    </ul>
            </div>
            <div className='items-end'>
                {user ? (
                <>
                    <span className="welcome">
                    Welcome, <b>{user.name}</b>!
                    </span>
                    <Button onClick={onLogout} label="Log out" />
                </>
                ) : (
                <>
                    <Button onClick={onLogin} label="Log in" />
                    <Button third onClick={onCreateAccount} label="Sign up" />
                </>
                )}
            </div>
        </nav>
  </header>
);


Navbar.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
  };
  
  Navbar.defaultProps = {
    user: null,
  };
  