import React from 'react'
import Classes from './SB_dunk_low_catalog.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Catalog_item from './dunk_low_item/dunk_low_item'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const src = `http://localhost:5000/api/sneakers?typeId=2&brandId=1`

const SB_dunk_low_catalog = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(src)
      .then(data => {
        setData(data.data)
      })
  }, [])

  return (
    <div className={Classes.Catalog}>
        <h2 className={Classes.title}>SB Dnnk Low</h2>
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

export default SB_dunk_low_catalog