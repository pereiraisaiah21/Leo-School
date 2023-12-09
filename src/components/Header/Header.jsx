import { useState } from "react"

import { FaBars } from "react-icons/fa"

/**
 * 
 * @returns 
 */

export const Header = () => {
    return (

        <header className="header">
            <div className="header__wrapper">
                <div className="header__brand">
                    Brand Name
                </div>
                <nav className="header__pages">
                    <a href="#">
                        Home
                    </a>
                    <a href="#">
                        About
                    </a>
                    <a href="#">
                        Contact
                    </a>
                </nav>
                <div className="header__buttons">
                    <button className="header__button">
                        Login
                    </button>
                    <button className="header__button header__button--join">
                        Join us
                    </button>
                </div>
                <button className="header__mobile-button">
                    <FaBars />
                </button>
            </div>
        </header>
    )
}
