import React, { useContext, useEffect, useState } from 'react'
import Classes from './modals.module.scss'
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';
import { createSneakers, fetchBrands, fetchTypes } from '../../http/sneakersApi';


const CreateSneakersModal = ({show, onHide}) => {

  const {sneakersStore} = useContext(Context)

  const [brands, setBrands] = useState([])
  const [types, setTypes] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [colorCode, setColorCode] = useState('')
  const [file, setFile] = useState('')
  const [brand, setBrand] = useState('')
  const [type, setType] = useState('')
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchBrands().then(data => setBrands(data))
    fetchTypes().then(data => setTypes(data))
  }, [])
  const addInfo = () => {
    setInfo([...info, {title: '', description: '',number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }
  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addSneakers = () => {
    const formData  = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('color_code', colorCode)
    formData.append('img', file)
    formData.append('brandId', brand)
    formData.append('typeId', type) 
    formData.append('info', JSON.stringify(info))
    createSneakers(formData).then(data => onHide())
  }

  return (
    <Modal 
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
     <div className={Classes.Modal}>
      <div className={Classes.header}>
          <h3>Добавить новые кроссовки</h3>
        </div>
        <div className={Classes.body}>
          <div className={Classes.brand_radios}>
            <p>Выберите бренд</p>
            {brands.map(brand => 
              <div className={Classes.radio} key={brand.id}>
                <input 
                  type="radio" 
                  name='brand' 
                  value={brand.name}
                  onClick={() => setBrand(brand.id)}
                />
                <p>{brand.name}</p>
              </div>
            )}
          </div>
          <div className={Classes.brand_radios}>
            <p>Выберите тип</p>
            {types.map(type => 
              <div className={Classes.radio} key={type.id}>
                <input 
                  type="radio" 
                  name='type' 
                  value={type.name}
                  onClick={() => setType(type.id)}
                />
                <p>{type.name}</p>
              </div>
            )}
          </div>
          <input 
            type="text" 
            placeholder='Название'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="number" 
            placeholder='цена'
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
          <input 
            type="text" 
            placeholder='код цвета'
            value={colorCode}
            onChange={e => setColorCode(e.target.value)}
          />
          <div className={Classes.photo}>
            <p>фото</p>
            <input 
              type="file" 
              name='photo'
              onChange={selectFile}
            />
          </div>
          <button
          onClick={addInfo}
        >
          добавить характеристику
        </button>
        {
          info.map(i =>
            <div className={Classes.info_box} key={i.number}>
              <input 
                type="text" 
                placeholder='навзвание характеристики'
                value={i.title}
                onChange={(e) => {changeInfo('title', e.target.value, i.number)}}
              />
              <input 
                type="text" 
                placeholder='описание характеристики'
                value={i.description}
                onChange={(e) => {changeInfo('description', e.target.value, i.number)}}
              />
              <button
                onClick={() => removeInfo(i.number)}
              >
                удалить
              </button>
            </div>
          )
        }
          {/* <div className={Classes.images}>
              <button onClick={addImages} >добавить изображение</button>
              {
                images.map(i =>
                  <input
                    key={i.number} 
                    type="file" 
                    value={i.img}
                    onChange={(e) => {changeImages('img', e.target.value, i.number)}}
                  />
                )
              }
          </div> */}
        </div>

        <div className={Classes.footer}>
          <button onClick={onHide}>Закрыть</button>
          <button onClick={addSneakers}>Добавить</button>
        </div>
     </div>
     
    </Modal>
  )
}

export default CreateSneakersModal