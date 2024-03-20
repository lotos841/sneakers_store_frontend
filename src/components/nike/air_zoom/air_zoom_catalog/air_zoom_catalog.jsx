import React from 'react'
import Classes from './air_zoom_catalog.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Catalog_item from './catalog_item/catalog_item'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const src = `http://localhost:5000/api/sneakers?typeId=3&brandId=1`

const Air_zoom_catalog = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(src)
      .then(data => {
        setData(data.data)
      })
  }, [])

  return (
    <div className={Classes.Air_zoom_catalog}>
        <Swiper 
          breakpoints={{
            1000: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 3,
            },
            276: {
              slidesPerView: 2,
            }
          }}
          className={Classes.catalog_list}>
            {data && data.map(item => (
                <SwiperSlide key={item.id}>
                    <Catalog_item item_data={item}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Air_zoom_catalog