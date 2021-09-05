import React from 'react'
import SvgLock from '../icons/lock.svg';
import logo from '../icons/logo-generic.svg';
import { ReactSVG } from 'react-svg'

function Navbar() {
  return (
    <div>
        <ReactSVG 
        src={logo} 
        beforeInjection={(svg) => {
            svg.setAttribute('style', 'width: 200px')
          }}
        />
    </div>
  );
}

export default Navbar;