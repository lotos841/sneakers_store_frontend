import React, { useContext, useState } from 'react'
import Classes from './styles/Auth.module.scss'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userApi'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)

      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch(e) {
      alert('ошибка при авторизации')
    }
    
  }

  return (
    <div className={Classes.Auth}>
      <div className='container'>
        <form className={Classes.form}>
          <h2 className={Classes.title}>{isLogin ? 'Войти' : 'Регистрация'}</h2>
          <input 
            placeholder='ваш email' 
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          >  
          </input>
          <input 
            placeholder='ваш пароль' 
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          >
          </input>
          <div className={Classes.enter_block}>
            <Link 
              to="" 
              className={Classes.enter_button}
              onClick={click}
            >
              {isLogin? 'Войти' : 'Регистрация'}
            </Link>
            {isLogin?
              <Link 
                to={REGISTRATION_ROUTE} 
                className={Classes.ref}
              >
                Регистрация
              </Link>
              :
              <Link 
                to={LOGIN_ROUTE} 
                className={Classes.ref}
              >
                  Войти
              </Link>
            }
          </div>
        </form>
      </div>
    </div>
  )
})

export default Auth