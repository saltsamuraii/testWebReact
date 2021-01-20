import React from 'react';
import s from "./About.module.css";

const About = () => {
    return (
        <div>
            <nav className={s.nav}>
                <a className={s.navLink} href="">Home</a>
                <a className={s.navLink} href="">About Me</a>
                <a className={s.navLink} href="">Portfolio</a>
                <a className={s.navLink} href="">Contact</a>
            </nav>
            <section className={s.content}>
                <сontainer >
                    <div>Photo</div>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div>Jason Wood</div>
                </сontainer>
            </section>
        </div>
    );
};

export default About;