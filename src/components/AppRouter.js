import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes} from '../routes'
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>} key={path}/ > 
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>} key={path}/ > 
            )}
            <Route path="*"element={<Navigate to="/" replace />}/>
        </Routes>
    )
}

export default AppRouter