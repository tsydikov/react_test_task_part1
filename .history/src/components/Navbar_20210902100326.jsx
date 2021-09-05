import React from 'react'
import SvgLock from '../icons/lock.svg';
import { ReactSVG } from 'react-svg'

function Navbar() {
  return (
    <div>
        <ReactSVG src={SvgLock} />
    </div>
  );
}

export default Navbar;