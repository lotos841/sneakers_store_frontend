import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import Classes from '../Superstar.module.scss'
import { EffectCube, Pagination } from 'swiper/modules';
import axios from 'axios';

const src = `http://localhost:5000/api/sneakers?typeId=7&brandId=2`
const img_src = 'http://localhost:5000/'


const SuperstarSlider = () => {

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
        <div className={Classes.Slider}>
            <Swiper 
            className={Classes.Swiper}
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            >
                {data && data.map((item) => (
                    <SwiperSlide 
                        className={Classes.slider_item} 
                        key={item.id} 
                        >
                        <img 
                            src={img_src+item.img} 
                            style={{background: `linear-gradient(142deg, ${item.color_code}, black 100%)`}}
                        />
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

export default SuperstarSlider