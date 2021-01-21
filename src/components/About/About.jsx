import React from 'react';
import s from "./About.module.css";
import author from '../../assets/author.jpg'
import DoubleArrow from "../../icons/DoubleArrow.svg";

export const About = () => {
    return (
        <div className={s.about}>
            <div className={s.container}>
                <nav className={s.nav}>
                    <a className={s.navLink} href="">Home</a>
                    <a className={s.navLink} href="">About Me</a>
                    <a className={s.navLink} href="">Portfolio</a>
                    <a className={s.navLink} href="">Contact</a>
                </nav>
            </div>
            <section className={s.about__content}>
                <img className={s.about__img} src={author} alt="authorPhoto"/>
                <div>
                    <h2 className={s.about__title}>About Me</h2>
                    <p className={s.about__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className={s.about__text}>Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className={s.about__name}>Jason Wood</div>
                </div>
                <div className={s.content}>
                    <h3 className={s.text}>keep scrolling, there is still more to come.</h3>
                    <img src={DoubleArrow} alt="scroll down"/>
                </div>
            </section>
        </div>
    );
};