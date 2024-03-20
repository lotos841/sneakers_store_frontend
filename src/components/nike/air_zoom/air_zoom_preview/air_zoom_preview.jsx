import React from 'react'
import Classes from '../air_zoom.module.scss'
import { SiSpringCreators } from "react-icons/si";
import { PiSneakerMoveFill } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";

const Air_zoom_preview = () => {
  return (
    <div className={Classes.air_zoom}>
      <div className={Classes.preview}>
        <p className={Classes.air_zoom_bg}>AIR ZOOM</p>
        <img className={Classes.sneakers_img} src='imgs\air_zoom\air_zoom.png'></img>
        <h2 className={Classes.title}>AIR ZOOM PEGASUS 39</h2>
        <ul className={Classes.characters}>
          <li>
            <h3>Отличная амортизация</h3>
            <SiSpringCreators className={Classes.icon}/>
            <p>обеспечивает комфорт и поддержку при каждом шаге</p>
          </li>
          <li>
            <h3>Адаптивная посадка</h3>
            <PiSneakerMoveFill className={Classes.icon}/>
            <p>гибкая подошва для оптимальной подвижности стопы</p>
          </li>
          <li>
            <h3>Универсальный дизайн</h3>
            <MdDesignServices className={Classes.icon}/>
            <p>доступны в различных цветовых решениях и стилях</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Air_zoom_preview