import React from 'react'
import Classes from './air_max.module.scss'

const Air_max_slider = ({img, color}) => {
  return (
    <div className={Classes.air_max_slider} style={{border: `10px solid ${color}`}}>
      <img src={img} alt=""/>
    </div>
  )
}

export default Air_max_slider