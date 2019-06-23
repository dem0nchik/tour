import React from 'react'
import './List.css'

const List = () => {
    return (
        <div className='list'>
            <div className='list-item'>
                <img src='http://www.saga.ua/files/gallery/albums/62/e6acb7d785da9798b1fc18d147a05593_big.jpg' alt=''/>
                <div>
                    <p className='list-item__hit'>Хіт продаж</p>
                    <h3>Пхукет: Пхіпхі, залив Майя, Бамбукові острова, Майтон</h3>
                    <div className='list-item__column'>
                        <span className='list-item__reviews'>Відгуки: 2</span>
                        <span className='list-item__duration'>Тривалість: 9г.</span>
                    </div>
                    <p className='list-item__description'>Отримайте задоволення від поїздки на роскішному катері 
                        з Пхукета на Пхіпхі, Бамбукові острова і острови Майтон. Проведіть веселий день, огляньте</p>

                    <div className='list-item__column'>
                        <div>
                            <span className='list-item__price'>від</span>
                            <span className='price-from'>3999 грн</span>
                        </div>
                        <div>
                            <span className='list-item__excursion'>найближча екскурсія: </span>
                            <span className='list-item__excursion-date'>24 червня</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='list-item'>
                <img src='http://livt.net/info/wp-content/uploads/2015/08/%D0%A1%D0%BB%D0%BE%D0%BD%D1%8B1.jpg' alt=''/>
                <div>
                    <p className='list-item__hit'>Хіт продаж</p>
                    <h3>Пхукет: Пхіпхі, залив Майя, Бамбукові острова, Майтон</h3>
                    <div className='list-item__column'>
                        <span className='list-item__reviews'>Відгуки: 2</span>
                        <span className='list-item__duration'>Тривалість: 9г.</span>
                    </div>
                    <p className='list-item__description'>Отримайте задоволення від поїздки на роскішному катері 
                        з Пхукета на Пхіпхі, Бамбукові острова і острови Майтон. Проведіть веселий день, огляньте</p>

                    <div className='list-item__column'>
                        <div>
                            <span className='list-item__price'>від</span>
                            <span className='price-from'>3999 грн</span>
                        </div>
                        <div>
                            <span className='list-item__excursion'>найближча екскурсія: </span>
                            <span className='list-item__excursion-date'>24 червня</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='list-item'>
                <img src='http://touroko.com/wp-content/uploads/2017/09/%D0%98%D0%BD%D0%B4%D0%B8%D1%8F.jpg' alt=''/>
                <div>
                    <p className='list-item__hit'>Хіт продаж</p>
                    <h3>Пхукет: Пхіпхі, залив Майя, Бамбукові острова, Майтон</h3>
                    <div className='list-item__column'>
                        <span className='list-item__reviews'>Відгуки: 2</span>
                        <span className='list-item__duration'>Тривалість: 9г.</span>
                    </div>
                    <p className='list-item__description'>Отримайте задоволення від поїздки на роскішному катері 
                        з Пхукета на Пхіпхі, Бамбукові острова і острови Майтон. Проведіть веселий день, огляньте</p>

                    <div className='list-item__column'>
                        <div>
                            <span className='list-item__price'>від</span>
                            <span className='price-from'>3999 грн</span>
                        </div>
                        <div>
                            <span className='list-item__excursion'>найближча екскурсія: </span>
                            <span className='list-item__excursion-date'>24 червня</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List