import React from 'react'
import Classes from '../Superstar.module.scss'
import { CgAdidas } from "react-icons/cg";


const Superstar_text = () => {
  return (
    <div className={Classes.sueperstar_text}>
        <CgAdidas className={Classes.icon}/>
        <h1 className={Classes.title}>ADIDAS SUPERSTAR</h1>
        <dir className={Classes.list_and_img}>
          <div>
            <p className={Classes.subtitle}>Икона стиля и комфорта!</p>

            <ul className={Classes.chars}>
                <li className={Classes.char}>Стиль</li>
                <li className={Classes.char}>Комфорт</li>
                <li className={Classes.char}>Долговечность</li>
            </ul>
          </div>
          <img src="imgs\superstar\superstar_preview.png" alt="" />
        </dir>
    </div>
  )
}

export default Superstar_text