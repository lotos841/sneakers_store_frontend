import React from 'react'
import Classes from '../SneakersPage.module.scss'
import { useNavigate } from 'react-router-dom'


const Another_item = ({data, getData, setIsAdded}) => {

    const src = process.env.REACT_APP_API_URL
    const navigate = useNavigate()

    function handleClick() {
        navigate (`/sneakers/${data.id}`)
        getData()
        setIsAdded(false)
    }

    return (
        <div className={Classes.another_item} onClick={handleClick}>
            <img src={src+data.img} alt="" />
            <span className={Classes.decor} style={{background: data.color_code}}></span>
        </div>
    )
}

export default Another_item