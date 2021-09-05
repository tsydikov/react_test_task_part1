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
            {(window.matchMedia('(max-width: 684px)').matches)
                ? <div>
                    <div className={cl.navbar_mobile}>
                        <ReactSVG
                            className={cl.navbarLogo}
                            src={logo}
                            beforeInjection={(svg) => {
                                svg.setAttribute('style', 'width: 120px', 'marginRight:10px')
                            }}
                        />
                        <div className={cl.navbarAuth}>
                            <ButtonReverse onClick={() => router.push('/choose')} style={{margin:5}}><ReactSVG src={lock}
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
                        <div className={cl.linkContainer}>
                            Li
                        </div>
                    </div>
                </div>
                : <div>
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
                </div>
            }
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.16704 14.5416C9.27412 14.6057 9.38873 14.6341 9.5 14.6327C9.61127 14.6341 9.72588 14.6057 9.83296 14.5416L10.7834 13.9733C12.6475 12.8585 14.9272 12.6764 16.9456 13.4811C17.6901 13.7779 18.5 13.2314 18.5 12.4321V2.70273C18.5 2.22043 18.2054 1.78672 17.7561 1.6076C15.1565 0.571124 12.2203 0.805635 9.8194 2.24149L9.5 2.43253L9.1806 2.24149C6.77971 0.805635 3.84345 0.571124 1.24384 1.6076C0.794589 1.78672 0.5 2.22043 0.5 2.70273V12.4321C0.5 13.2314 1.30991 13.7779 2.05446 13.4811C4.07281 12.6764 6.35253 12.8585 8.21656 13.9733L9.16704 14.5416ZM1.75582 2.75182V12.2541C4.09648 11.3795 6.71359 11.6146 8.86272 12.8998L8.8721 12.9055V3.51677L8.53445 3.31486C6.48416 2.08865 3.97973 1.88141 1.75582 2.75182ZM10.1373 12.8998L10.1279 12.9055V3.51677L10.4656 3.31486C12.5159 2.08865 15.0203 1.88141 17.2442 2.75182V12.2541C14.9035 11.3795 12.2864 11.6146 10.1373 12.8998Z" fill="#343A40"/>
<path d="M7.21873 14.8807C5.52433 13.8955 3.42913 13.8955 1.73474 14.8807L1.64872 14.9307C1.34918 15.1048 1.248 15.488 1.42273 15.7866C1.59747 16.0852 1.98194 16.1861 2.28148 16.0119L2.36751 15.9619C3.67088 15.2041 5.28258 15.2041 6.58595 15.9619L7.49622 16.4912C8.73444 17.2111 10.2655 17.2111 11.5038 16.4912L12.414 15.9619C13.7174 15.2041 15.3291 15.2041 16.6325 15.9619L16.7185 16.0119C17.018 16.1861 17.4025 16.0852 17.5772 15.7866C17.7519 15.488 17.6508 15.1048 17.3513 14.9307L17.2653 14.8807C15.5708 13.8955 13.4756 13.8955 11.7812 14.8807L10.871 15.4099C10.0238 15.9025 8.97614 15.9025 8.12897 15.4099L7.21873 14.8807Z" fill="#343A40"/>
</svg>

        </div>
    );
}

export default Navbar;