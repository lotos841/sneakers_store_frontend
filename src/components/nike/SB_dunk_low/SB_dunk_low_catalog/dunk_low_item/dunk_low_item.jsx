import React from 'react'
import Classes from '../SB_dunk_low_catalog.module.scss'
import { useNavigate } from 'react-router-dom'

const src = process.env.REACT_APP_API_URL

const Dunk_low_item = ({item_data}) => {

  const navigate = useNavigate()

  return (
    <>
      <div className={Classes.catalog_item} onClick={() => {navigate(`/sneakers/${item_data.id}`)}}>
        <span className={Classes.decor} style={{backgroundColor: item_data.color_code}}></span>
        <img src={src+item_data.img} alt="" />
        <p className={Classes.price}>{item_data.price} $</p>
      </div>
    </>
  )
}

export default Dunk_low_item