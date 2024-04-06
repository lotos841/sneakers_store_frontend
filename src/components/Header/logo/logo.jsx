import React from 'react'
import Classes from '../Header.module.scss';
import { PiSneakerMoveLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className={Classes.logo} to="/">
      <p>SN SHOP</p> 
      <PiSneakerMoveLight className={Classes.icon}/>
    </Link>
    
  )
}

export default Logo