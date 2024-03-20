import React from 'react'
import Classes from './SB_dunk_low_preview.module.scss'

import SB_dunk_low_preview_img from './SB_dunk_low_preview_img';
import SB_dunk_low_preview_text from './SB_dunk_low_preview_text';

const SB_dunk_low_preview = () => {
  return (
    <div className={Classes.SB_preview}>
        <SB_dunk_low_preview_img/>
        <SB_dunk_low_preview_text/>
    </div>
  )
}

export default SB_dunk_low_preview