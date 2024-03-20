import React, { useContext, useState } from 'react'
import Classes from './Header.module.scss'

import { IoMdMenu } from "react-icons/io";
import { SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';

import Logo from './logo/logo';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts';

const Header = observer(() => {

  const {user} = useContext(Context)

  const [modal_menu, setModal_menu] = useState(false)
  
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <div className={Classes.header}>
        <div className="container">
          {!modal_menu ?
            <div className={Classes.header_content}>
            <Logo />
            <menu className={Classes.nav_menu}>
              <ul className={Classes.menu_list}>
              <HashLink smooth to="/#nike" className={Classes.link}>
                  <SiNike className={Classes.icon}/> NIKE
                </HashLink>
                <HashLink smooth to="/#adidas" className={Classes.link}>
                  <CgAdidas className={Classes.icon}/> ADIDAS
                </HashLink>
              </ul>
            </menu>
            {user.isAuth ?
              <menu className={Classes.prifile_menu}>
                <ul className={Classes.menu_list}>
                  <Link onClick={() => logOut()}>
                    выйти
                  </Link>
                  <Link to={BASKET_ROUTE}>
                    корзина
                  </Link>
                  <Link to={ADMIN_ROUTE}>
                    Админ
                  </Link>
                </ul>
              </menu> 
              :
              <menu className={Classes.profile_menu}>
                <ul className={Classes.menu_list}>
                  <Link to={REGISTRATION_ROUTE} onClick={() => navigate(LOGIN_ROUTE)}>
                    Авторизация
                  </Link>
              </ul>
              </menu>
            }
            <span className={Classes.menu_btn}>
              <a className={Classes.link} onClick={() => {
                  setModal_menu(true)
              }}>
                <IoMdMenu />
              </a>
            </span>
          </div> :
            <></>
          }
          {modal_menu ?
            <div className={Classes.modal_menu}>
              <ul className={Classes.modal_menu_list}>
                  <li>
                    <Link to={''} className={Classes.link}>
                      <SiNike className={Classes.icon}/> NIKE
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'} className={Classes.link}>
                      <CgAdidas className={Classes.icon}/> ADIDAS
                    </Link>
                  </li>
              </ul>
              {user.isAuth ?
                    <menu className={Classes.modal_prifile_menu}>
                      <ul className={Classes.modal_menu_list}>
                        <Link onClick={() => logOut()}>
                          выйти
                        </Link>
                        <Link to={BASKET_ROUTE}>
                          корзина
                        </Link>
                        <Link to={ADMIN_ROUTE}>
                          Админ
                        </Link>
                      </ul>
                    </menu> 
                    :
                    <menu className={Classes.profile_menu}>
                      <ul className={Classes.menu_list}>
                        <Link to={REGISTRATION_ROUTE} onClick={() => navigate(LOGIN_ROUTE)}>
                          Авторизация
                        </Link>
                    </ul>
                    </menu>
                  }
                  <span className={Classes.close_modal_btn}>
                    <a className={Classes.link} onClick={() => {
                        setModal_menu(false)
                    }}>
                    <IoIosCloseCircle />
                    </a>
                    </span>
            </div>
            : <></>
          }
        </div>
    </div>
  )
})

export default Header