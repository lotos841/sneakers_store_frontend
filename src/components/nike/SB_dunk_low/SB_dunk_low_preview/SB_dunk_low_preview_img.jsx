import React from 'react'
import Classes from './SB_dunk_low_preview.module.scss'

const SB_dunk_low_preview_img = () => {
  return (
    <div>
        <div className={Classes.sneakers_img}>
          <img src='imgs\dunk_low\sb_dunk_low58.png'/>
          <img src='imgs\dunk_low\sb_dunk_low_sour_apple.png'/>
          <div className={Classes.decor}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </div>
  )
}

export default SB_dunk_low_preview_img