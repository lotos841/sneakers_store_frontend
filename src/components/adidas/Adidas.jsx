import React from 'react'
import Superstar from './superstar/Superstar'
import Nmd from './Nmd/Nmd'

const Adidas = () => {
    return (
      <div className='container' style={{overflow: 'hidden'}} id='adidas'>
          <Superstar/>
          <Nmd/>
      </div>
    )
}

export default Adidas