import React from 'react'
import Classes from '../air_max_catalog.module.scss'
import { useNavigate } from 'react-router-dom'


const src = process.env.REACT_APP_API_URL

const Air_max_catalog_item = ({item_data}) => {

    const navigate = useNavigate()
    return (
        <div className={Classes.catalog_item} onClick={() => {navigate(`/sneakers/${item_data.id}`)}}>
            <img className={Classes.item_img} src={src+item_data.img} alt="" />
            <div className={Classes.overflow_content}>
                <div className={Classes.item_content}>
                    <a className={Classes.to_basket_ref} href='#'>Перейти...</a>
                    <p className={Classes.price}>{item_data.price} $</p>
                </div>
                <span className={Classes.decor_color} style={{backgroundColor: item_data.color_code}}></span>
            </div>
        </div>
    )
}

export default Air_max_catalog_item