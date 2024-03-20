import Classes from '../SneakersPage.module.scss';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToBasket, fetchOneSneakers } from '../../../http/sneakersApi'
import Anothers from '../anothers/Anothers';
import Specifications from '../specifications/Specifications';

const Sneakers_page_main = () => {

    const [sneakers, setSneakers] = useState({info: []})
    const sizes= [37,38,39,40,41,42,43,44,45]
    const [selected_size, setSelected_size] = useState(40)
    const [isAdded, setIsAdded] = useState(false)
  
    const {id} = useParams()

  
    const addToBasketProduct = () => {
      const formData = new FormData()
      formData.append('sneakerId', id)
      formData.append('size', selected_size)
      addToBasket(formData).then(response => setIsAdded(true))
    }
  
    const getData = () => {
        fetchOneSneakers(id).then(data => setSneakers(data))
    }   

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={Classes.SneakersPage}>
            <div className={Classes.main}>
                 <div className={Classes.slide}>
                    <img src={process.env.REACT_APP_API_URL+sneakers.img} alt="" />
                </div>
                <div className={Classes.info}>
                    <h2 className={Classes.title}>{sneakers.name}</h2>
                    <p className={Classes.price}>цена: {sneakers.price} $</p>
                    <p>Размер: {selected_size}</p>
                    <ul className={Classes.sizes_list}>
                        {sizes.map((item) => {
                        if (selected_size == item) {
                            return <li key={item}
                            onClick={() => {setSelected_size(item)}}
                            style={
                                {background: "var(--link-hover-color)", color: 'white'}}
                            >
                            {item}                       
                        </li>
                        }
                        else {
                            return <li key={item}
                            onClick={() => {setSelected_size(item)}}
                            >
                            {item}      
                        </li>
                        }
                    })}
                    </ul>
                    <div className={Classes.buttons}>
                        <a className={Classes.button} style={isAdded ? {opacity: '0.5'} : {background: ''}} onClick={addToBasketProduct} >В корзину</a>
                    </div>
                </div>
            </div>
            <div className={Classes.chars_anothers}>
                <Specifications info={sneakers.info}/>
                {sneakers.typeId && sneakers.brandId && 
                <Anothers 
                    src={`http://localhost:5000/api/sneakers?typeId=${sneakers.typeId}&brandId=${sneakers.brandId}`}
                    getData={getData}
                    setIsAdded={setIsAdded}
                />}
            </div>
        </div>
    )
}

export default Sneakers_page_main