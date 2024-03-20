import React from 'react'
import Classes from '../Header.module.scss';
import { PiSneakerMoveLight } from "react-icons/pi";

const Logo = () => {
  return (
    <h3 className={Classes.logo}><p>SN SHOP</p> <PiSneakerMoveLight className={Classes.icon}/></h3>
  )
}

export default Logo