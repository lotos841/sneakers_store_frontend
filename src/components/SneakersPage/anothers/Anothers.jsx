import React, { useEffect, useState } from 'react'
import Classes from '../SneakersPage.module.scss'
import axios from 'axios'
import Another_item from './Another_item'

const Anothers = ({src, getData, setIsAdded}) => {

    const [anothers, setAnothers] = useState([])

    useEffect(() => {
        axios
      .get(src)
      .then(data => {
        setAnothers(data.data)
      })
    }, [])
    
    return (
        <ul className={Classes.anothers}>
            {anothers.map((item) => (
                <Another_item 
                    data={item} 
                    key={item.id}
                    getData={getData}
                    setIsAdded={setIsAdded}
                />
            ))}
        </ul>
    )
}

export default Anothers