import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.bg}>
            <nav className={s.nav}>
                <a className={s.navLink} href="">Home</a>
                <a className={s.navLink} href="">About Me</a>
                <a className={s.navLink} href="">Portfolio</a>
                <a className={s.navLink} href="">Contact</a>
            </nav>
            <div >
                <h1 className={s.text}>scroll down to see more</h1>

                {/*Проблема тут
                    <img src="./../../assets/doubleArrow.svg" alt=""/>*/}

            </div>
        </div>
    );
};

export default Header;