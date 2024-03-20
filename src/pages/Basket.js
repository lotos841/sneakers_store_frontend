import React, { useEffect, useState } from 'react'
import { getBasket, removeFromBasket } from '../http/sneakersApi'
import Classes from './styles/basket.module.scss'
import SneakersItem from '../components/sneakers/sneakersItem'

const Basket = () => {

  const [basket, setBasket] = useState([])
  const [final_price, setFinal_price] = useState([])

  const [phone, setPhone] = useState()
  const [sity, setSity] = useState()
  const [street, setStreet] = useState()
  const [house, setHouse] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    getBasket().then(data => setBasket(data))
  }

  useEffect(() => {
    price_calculator()    
  }, [basket])

  const handleDeleteItem = (id) => {
    removeFromBasket(id)
    setBasket(prev => {
      getData()
      return prev.filter(item => item.id != id)
    })
  }

  let price_calculator = () => {
    setFinal_price(0)
    basket.forEach(el => {
      setFinal_price(prev => Number(prev) + Number(el.sneaker?.price))
  });
  }

  return (
    <div className={Classes.Basket}>
      <div className='container'>
        <div className={Classes.basket_content}>
          <ul className={Classes.product_list}>
          {basket && basket.map((i) => (
            <li key={i.id}>
              {<SneakersItem data={i} handleDeleteItem={handleDeleteItem}/>}
            </li>
            ))}
          </ul>
          <div className={Classes.calculation_box}>
            <p className={Classes.total_price}>Общ. цена: <span>{final_price} $</span></p>
            <div className={Classes.inputs}>
               <input 
                value={phone}
                onChange={(e) => {setPhone(e.target.value)}}
                placeholder='телефон'>
              </input>
              <input 
                value={sity}
                onChange={(e) => {setSity(e.target.value)}}
                placeholder='город'>
              </input>
              <input 
                value={street}
                onChange={(e) => {setStreet(e.target.value)}}
                placeholder='улица'>
              </input>
              <input 
                value={house}
                onChange={(e) => {setHouse(e.target.value)}}
                placeholder='дом'>
              </input>
            </div>
            <a className={Classes.pay_button} href='#'>Отправить заявку</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket