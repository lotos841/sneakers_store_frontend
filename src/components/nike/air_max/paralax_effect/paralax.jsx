import React from 'react'
import Classes from './paralax.module.scss'

const Paralax = ({color}) => {

  return (
    <div className={Classes.background_decor} style={{'--paralax-color': color}}>
       <div className={Classes.paralax}>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
        <div className={Classes.object}></div>
       </div>
    </div>
  )
}

export default Paralax