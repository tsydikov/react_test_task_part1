import React from 'react'
import lock from '../../icons/lock.svg';
import signup from '../../icons/signup.svg';
import logo from '../../icons/logo-generic.svg';
import { ReactSVG } from 'react-svg'
import cl from './Navbar.module.css';
import Button from '../button/Button';
import ButtonReverse from '../button/ButtonReverse';

const Navbar = () => {
    const nav = [
        'Expertise',
        'Industries',
        'News',
        'Partners',
        'Careers',
        'Abut Us'
    ]
    return (
        <div>
            <div className={cl.navbar_container}>
                <ReactSVG
                    className={cl.navbarLogo}
                    src={logo}
                    beforeInjection={(svg) => {
                        svg.setAttribute('style', 'width: 200px')
                    }}
                />
                <div className={cl.linkContainer}>
                    {nav.map(n =>
                        <a>{n}</a>
                    )}
                </div>
                <div className={cl.navbarAuth}>
                    <ButtonReverse><ReactSVG src={lock} />Sign In</ButtonReverse>
                    <Button><ReactSVG src={signup} 
                    beforeInjection={(svg) => {
                        svg.classList.add('svg-signup')
                        svg.setAttribute('style', 'background: #90F9AD; margin:-2px;')
                        
                    }}
                    />Sign Up</Button>
                </div>
                
            </div>
        </div>
    );
}

export default Navbar;