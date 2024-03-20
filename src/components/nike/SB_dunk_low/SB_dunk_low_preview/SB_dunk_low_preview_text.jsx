import React from 'react'
import Classes from './SB_dunk_low_preview.module.scss'
import { TiThumbsOk } from "react-icons/ti";
import { PiSneakerMoveFill } from "react-icons/pi";
import { MdOutlineSportsHandball } from "react-icons/md";

const SB_dunk_low_preview_text = () => {
  return (
    <div className={Classes.info}>
          <h2 className={Classes.title}>SB Dunk Low</h2>
          <p className={Classes.text}><span>легендарные</span> кроссовки от <span>Nike</span>, которые завоевали сердца многих любителей уличного <span>стиля и спорта</span>.</p>
          <ul className={Classes.specifications}>
            <li><TiThumbsOk className={Classes.icon}/> Стиль</li>
            <li><PiSneakerMoveFill className={Classes.icon}/> Мода</li>
            <li><MdOutlineSportsHandball className={Classes.icon}/> Спорт</li>
          </ul>
          <a className={Classes.buy_button} href='https://sneakerfreak.ru/nike-sb-dunk-low-story/'>Подробнее...</a>
    </div>
  )
}

export default SB_dunk_low_preview_text