import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Classes from './styles/Admin.module.scss'
import CreateBrandModal from '../components/modals/createBrandModal'
import CreateTypeModal from '../components/modals/createTypeModal'
import CreateSneakersModal from '../components/modals/createSneakersModal'

const Admin = () => {

  const [brandVisiable, setBrandVisiable] = useState(false)
  const [typeVisiable, setTypeVisiable] = useState(false)
  const [sneakersVisiable, setSneakersVisiable] = useState(false)

  return (
    <div className={Classes.Admin_page}>
      <div className='container'>
        <div className={Classes.page_content}>
          <h2>Админ панель</h2>
          <div className={Classes.buttons}>
            <button
              onClick={() => setBrandVisiable(true)}
            >
              Добавить бренд
            </button>
            <button
              onClick={() => setTypeVisiable(true)}
            >
              Добавить тип
            </button>
            <button
              onClick={() => setSneakersVisiable(true)}
            >
              Добавить кросовки
            </button>
          </div>
          <CreateBrandModal show={brandVisiable} onHide={() => setBrandVisiable(false)}/>
          <CreateTypeModal show={typeVisiable} onHide={() => setTypeVisiable(false)}/>
          <CreateSneakersModal show={sneakersVisiable} onHide={() => setSneakersVisiable(false)}/>
        </div>
      </div>
    </div>
  )
}

export default Admin