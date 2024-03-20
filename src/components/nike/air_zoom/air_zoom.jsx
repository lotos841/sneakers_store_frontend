import React from 'react'
import Classes from './air_zoom.module.scss'
import Air_zoom_preview from './air_zoom_preview/air_zoom_preview'
import Air_zoom_catalog from './air_zoom_catalog/air_zoom_catalog'

const Air_zoom = () => {
  return (
    <div className={Classes.air_zoom}>
      <Air_zoom_preview/>
      <Air_zoom_catalog/>
    </div>
  )
}

export default Air_zoom