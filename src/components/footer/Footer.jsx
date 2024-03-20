import Logo from '../Header/logo/logo'
import Classes from './footer.module.scss'

import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Classes.Footer}>
        <div className="container">
            <div className={Classes.footer_content}>
                <h3 className={Classes.title}>SN SHOP</h3>
                <p>© 2024 SN shop All Rights Reserved</p>
                <ul className={Classes.socials}>
                    <li><a href=""><FaVk/></a></li>
                    <li><a href=""><FaTelegramPlane/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer