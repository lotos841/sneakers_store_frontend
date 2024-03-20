import React from 'react'
import Nmd_slider from './Nmd_slider/Nmd_slider'
import Nmd_text from './Nmd_text/Nmd_text'
import Classes from './Nmd.module.scss'

const Nmd = () => {
  return (
    <div className={Classes.Nmd}>
        <Nmd_slider/>
        <Nmd_text/>
    </div>
  )
}

export default Nmd