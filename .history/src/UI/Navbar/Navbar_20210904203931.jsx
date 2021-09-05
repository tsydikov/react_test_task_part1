import React from 'react'
import lock from '../../icons/lock.svg';
import signup from '../../icons/signup.svg';
import logo from '../../icons/logo-generic.svg';
import { ReactSVG } from 'react-svg'
import cl from './Navbar.module.css';
import Button from '../button/Button';
import ButtonReverse from '../button/ButtonReverse';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const router = useHistory()
    const nav = [
        'Expertise',
        'Industries',
        'News',
        'Partners',
        'Careers',
        'About Us'
    ]
    return (
        <div>
            <div className={cl.navbar_container}>
                <ReactSVG
                    className={cl.navbarLogo}
                    src={logo}
                    beforeInjection={(svg) => {
                        svg.setAttribute('style', 'width: 120px')
                    }}
                />
                <div className={cl.linkContainer}>
                    {nav.map(n =>
                    // eslint-disable-next-line
                        <a>{n}</a>
                    )}
                </div>
                <div className={cl.navbarAuth}>
                    <ButtonReverse onClick={() => router.push('/choose')}><ReactSVG src={lock} 
                    beforeInjection={(svg) => {
                        svg.setAttribute('style', 'background: #343a40')
                    }}
                    /><pre>Sign In</pre></ButtonReverse>
                    <Button><ReactSVG src={signup} 
                    beforeInjection={(svg) => {
                        svg.setAttribute('style', 'background: #90F9AD;padding-right:2px')
                        
                    }}
                    /><pre>Sign Up</pre></Button>
                </div>
                
            </div>
            {(window.matchMedia('(max-width: 684px)').matches)
            ?<div>
                <div className={cl.navbar_mobile}>
            <ReactSVG
                    className={cl.navbarLogo}
                    src={logo}
                    beforeInjection={(svg) => {
                        svg.setAttribute('style', 'width: 120px')
                    }}
                />
            </div>
            </div>
            :<div>more</div>
            }
            
        </div>
    );
}

export default Navbar;