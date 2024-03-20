import React from 'react'
import Classes from './air_max.module.scss'
import Air_max_info from './air_max_info'
import Air_max_catalog from './air_max_catalog/air_max_catalog'

const Air_max = ({info}) => {
    return (
        <div className={Classes.Air_max}>
           <Air_max_info info={info}/>
           <Air_max_catalog/>
        </div>
    )
}

export default Air_max