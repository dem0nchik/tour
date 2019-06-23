import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <h2>Будюк Дмитро | 2019</h2>
                <div className='footer-col'>
                    <h4>Клієнтам</h4>
                    <ul>
                        <li><a href='/'>Послуги</a></li>
                        <li><a href='/'>Тарифи</a></li>
                        <li><a href='/'>Зворотній звязок</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer