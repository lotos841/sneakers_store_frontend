import React from 'react'
import SuperstarSlider from './Slider/Slider'
import Classes from './Superstar.module.scss'
import Superstar_text from './superstar_text/Superstar_text'

const Superstar = () => {
  return (
    <div className={Classes.Superstar}>
        <Superstar_text/>
        <SuperstarSlider/>
    </div>
  )
}

export default Superstar