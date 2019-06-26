import React from 'react'
import './Pagetour.css'

const Pagetour = () => {
    return (
        <div className='ptour'>
            <div className='ptour__head'>
                <div className='ptour__head-container'>
                    <h1>Пхукет: Пхіпхі, залив Майя, Бамбукові острова, Майтон</h1>
                    <p className='ptour__head-reviews'>Кількість відгуків: <span>2</span></p>
                </div>
                <div className='ptour__head-container'>
                    <p className='ptour__head-id'>Код тура: 1</p>
                    <p className='ptour__head-hit'>Хіт продаж</p>
                </div>
            </div>

            <div className='ptour__body'>
                <div className='ptour__body-wrap'> 
                    <div className='ptour__body-container'>
                        <img src='http://www.saga.ua/files/gallery/albums/62/e6acb7d785da9798b1fc18d147a05593_big.jpg' alt=''/>
                    </div>

                    <div className='ptour__body-container ptour__body-container__content'>
                        <div>
                            <p className='ptour__body-date'>Датa:</p>
                            <p className='ptour__body-date-text'>24 червня</p>
                            <p className='ptour__body-date-text'>Тривалість 9 годин</p>
                        </div>
                        <div>
                            <p className='ptour__body-includes'><strong>Включено: </strong>трансфер страховка віза не потребується</p>
                        </div>
                        <div>
                            <div className='ptour__body-price'>
                                <p>ЦІНА 6999 ГРН</p>
                                <img className='ptour__body-favorite' src='https://upload.wikimedia.org/wikipedia/commons/5/52/Heart_icon_red_hollow.svg' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ptour__body-desc'>
                    <h2>Опис туру</h2>
                    <p>Отримайте задоволення від поїздки на роскішному катері з Пхукета на Пхіпхі, Бамбукові острова і острови Майтон. Проведіть веселий день, огляньте</p>
                </div>
            </div>

        </div>
    )
}

export default Pagetour