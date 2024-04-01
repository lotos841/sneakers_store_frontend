import React from 'react'
import Classes from '../air_zoom_catalog.module.scss'
import { useNavigate } from 'react-router-dom'

const src = process.env.REACT_APP_API_URL

const Air_zoom_item = ({item_data}) => {

  const navigate = useNavigate()

  return (
    <>
      <div className={Classes.catalog_item} onClick={() => {navigate(`/sneakers/${item_data.id}`)}}>
        <img src={src+item_data.img} alt="" />
        <p className={Classes.price}>{item_data.price} $</p>
        <h3 className={Classes.name}>{item_data.name}</h3>
      </div>
    
    </>
  )
}

export default Air_zoom_item