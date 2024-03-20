import React, { useEffect, useState } from 'react'
import Classes from './air_max.module.scss'
import Air_max_slider from './air_max_slider'
import Paralax from './paralax_effect/paralax';


const Air_max_info = () => {
    
    const [snk_color, setSnk_color] = useState('#0087be');
    const [snk_img, setSnk_img] = useState('/imgs/sneaker_img9.png')
    
    const handlerChangeSneakers = (color, img) => {
        setSnk_color(color);
        setSnk_img(img);
    }

    return (
        <div className={Classes.product_info}>
            <div className={Classes.left}>
                <h2 className={Classes.title}>NIKE AIR <span style={{color: snk_color}}>Max</span> 90</h2>
                <p className={Classes.text}>Легендарные кроссовки Nike Air Max 90, которые стали символом <br/>
                    стиля и комфорта, теперь доступны для вас!
                </p>
                <p className={Classes.price}>250 $</p>
                <ul className={Classes.colors}>
                    <li className={Classes.color} 
                        style={{backgroundColor: "white"}} 
                        onClick={() => {handlerChangeSneakers('white', '/imgs/sneaker_img2.png')}}>
                    </li>
                    <li className={Classes.color} 
                        style={{backgroundColor: "red"}} 
                        onClick={() => {handlerChangeSneakers('red', '/imgs/sneaker_img3.png')}}>
                    </li>
                    <li className={Classes.color} 
                        style={{backgroundColor: "#FF5D00"}} 
                        onClick={() => {handlerChangeSneakers('#FF5D00', '/imgs/sneaker_img4.png')}}>
                    </li>
                    <li className={Classes.color} 
                        style={{backgroundColor: "#3be8ce"}} 
                        onClick={() => {handlerChangeSneakers('#3be8ce', '/imgs/sneaker_img7.png')}}>
                    </li>
                    <li className={Classes.color} 
                        style={{backgroundColor: "#fd7184"}} 
                        onClick={() => {handlerChangeSneakers('#fd7184', '/imgs/sneaker_img8.png')}}>
                    </li>
                    <li className={Classes.color} 
                        style={{backgroundColor: "#0087be"}} 
                        onClick={() => {handlerChangeSneakers('#0087be', '/imgs/sneaker_img9.png')}}>
                    </li>
                    
                </ul>
            </div>
            <Air_max_slider img={snk_img} color={snk_color}/>
            <Paralax color={snk_color}/>
        </div>
    )
}

export default Air_max_info