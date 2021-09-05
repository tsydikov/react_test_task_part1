import React from 'react'
import SvgLock from '../icons/lock.svg';
import logo from '../icons/logo-generic.svg';
import { ReactSVG } from 'react-svg'

function Navbar() {
  return (
    <div>
        <ReactSVG src={logo} height="100px"/>
    </div>
  );
}

export default Navbar;