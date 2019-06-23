import React from 'react'
import './header.css'

const Header = () => {
    return (
            <header>
                <nav>
                    <div className='nav-wrap'>
                            <a href='/'><img className='nav-logo' src="../../../img/logo.jpg"
                                alt='logo' title='Сайт відпочинку'/></a>
                            <div className='nav-menu'>
                                <span><a className='nav-phone' href='tel:+380506526072'>+380506526072</a></span>
                                <span>Українська | УКР</span>
                                <span>Допомога</span>
                            </div>

                            <input className='nav-search' placeholder="Місце вашого відпочинку.." type='search'/>
                            <button className='nav-button'>Війти</button>
                    </div>
                </nav>
            </header>
    )
}

export default Header
