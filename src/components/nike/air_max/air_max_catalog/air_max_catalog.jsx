import React, { useEffect } from 'react'
import Classes from './air_max_catalog.module.scss'
import Air_max_catalog_item from './air_max_item/air_max_catalog_item'
import axios from 'axios'

const src = `${process.env.REACT_APP_API_URL}api/sneakers?typeId=1&brandId=4`


const Air_max_catalog = () => {

  const [data, setData] = React.useState([])

  useEffect(() => {
    axios
      .get(src)
      .then(data => {
        setData(data.data)
      })
  }, [])
  return (
    <div className={Classes.air_max_catalog}>
      <ul className={Classes.catalog}>
        {data && data.map(item => (
            <li key={item.id}>
                <Air_max_catalog_item item_data={item}/>
            </li>
        ))}
    </ul>
    </div>  
  )
}

export default Air_max_catalog