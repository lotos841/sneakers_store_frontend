import { useState } from 'react';
import Classes from './modals.module.scss'
import Modal from 'react-bootstrap/Modal';
import { createType } from '../../http/sneakersApi'


const CreateTypeModal = ({show, onHide}) => {

  const [value, setValue] = useState('')

  const addType = () => {
    createType({name: value}).then(data => 
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
          <h3>Добавить новый тип</h3>
        </div>
        <div className={Classes.body}>
          <form>
            <input 
                type="text" 
                placeholder='название типа' 
                value={value}
                onChange={e => setValue(e.target.value)}
              />
          </form>
        </div>
        <div className={Classes.footer}>
          <button onClick={onHide}>Закрыть</button>
          <button onClick={addType}>Добавить</button>
        </div>
      </div>
    </Modal>
  )
}

export default CreateTypeModal