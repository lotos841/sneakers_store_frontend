import React from 'react'
import Classes from './sneakersItem.module.scss'

import { useNavigate } from 'react-router-dom'
import { CiCircleRemove } from "react-icons/ci";

const SneakersItem = ({data, handleDeleteItem}) => {

    const navigate = useNavigate()

    return (
        <div className={Classes.SneakersItem}>
            <img src={process.env.REACT_APP_API_URL + data.sneaker.img} alt="" />
            <h3 className={Classes.name} onClick={() => {navigate(`/sneakers/${data.sneaker.id}`)}}>{data.sneaker.name}</h3>
            <p className={Classes.size}>{data.size}</p>
            <span className={Classes.color} style={{backgroundColor: data.sneaker.color_code}}></span>
            <p className={Classes.price}>{data.sneaker.price} $</p>
            <a className={Classes.delete_button} onClick={() => {handleDeleteItem(data.id)}}><CiCircleRemove className={Classes.icon}/></a>
        </div>
    )
}

export default SneakersItem