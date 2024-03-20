import { useState } from 'react';
import Classes from './modals.module.scss'
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/sneakersApi'


const CreateBrandModal = ({show, onHide}) => {

  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({name: value}).then(data => 
      setValue('')
    )
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
          <h3>Добавить новый бренд</h3>
        </div>
        <div className={Classes.body}>
          <form>
            <input 
              type="text" 
              placeholder='название бренда' 
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </form>
        </div>
        <div className={Classes.footer}>
          <button onClick={onHide}>Закрыть</button>
          <button onClick={addBrand}>Добавить</button>
        </div>
      </div>
    </Modal>
  )
}

export default CreateBrandModal