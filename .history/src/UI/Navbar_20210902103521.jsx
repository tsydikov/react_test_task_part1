import React from 'react'
import borrower from '../icons/borrower.svg';
import checkmark from '../icons/checkmark.svg';
import close from '../icons/close.svg';
import guide from '../icons/guide.svg';
import lender from '../icons/lender.svg';
import lock from '../icons/lock.svg';
import signup from '../icons/signup.svg';
import logo from '../icons/logo-generic.svg';
import { ReactSVG } from 'react-svg'

function Navbar() {
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
        <ReactSVG  src={borrower} />
        <ReactSVG  src={checkmark} />
        <ReactSVG  src={close} />
        <ReactSVG  src={guide} />
        <ReactSVG  src={lender} />
        
        
        <div>
        <ReactSVG 
        src={logo} 
        beforeInjection={(svg) => {
            svg.setAttribute('style', 'width: 200px')
          }}
        />
        {nav.map(n => n)}
        <button><ReactSVG  src={lock} />Sign In</button>
        <button><ReactSVG  src={signup} />Sign Up</button>
        </div>
    </div>
  );
}

export default Navbar;