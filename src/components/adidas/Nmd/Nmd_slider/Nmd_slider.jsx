import React, { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-cards';
import Classes from '../Nmd.module.scss'
import { EffectCards } from 'swiper/modules';
import axios from 'axios';

const src = `http://localhost:5000/api/sneakers?typeId=8&brandId=2`
const img_src = 'http://localhost:5000/'

const Nmd_slider = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get(src)
        .then(data => {
            setData(data.data)
        })
    }, [])

    const navigate = useNavigate()

    return (
        <div>
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={Classes.swiper}
        >
            {data && data.map((item) => (
                <SwiperSlide 
                    className={Classes.swiper_slide}
                    key={item.id}
                    style={{background: `linear-gradient(142deg, ${item.color_code} 9%, black 100%)`}}
                >
                    <img src={img_src+item.img}/>
                    <p className={Classes.price}>{item.price} $</p>
                    <button 
                        className={Classes.enter_button}
                        onClick={() => {navigate(`/sneakers/${item.id}`)}}
                        >
                        Перейти
                    </button>
                </SwiperSlide>
            ))}    
        </Swiper>
        </div>
    )
}

export default Nmd_slider