import React from 'react'
import './Pagetour.css'

const Pagetour = (props) => {
    const {id, img, hit, title, reviews, duration, description, price, date } = props.tour

    const addFav = () => {
        props.addFavorite(id)
    }
    return (
        <div className='ptour'>
            <div className='ptour__head'>
                <div className='ptour__head-container'>
                    <h1>{title}</h1>
                    <p className='ptour__head-reviews'>Кількість відгуків: <span>{reviews}</span></p>
                </div>
                <div className='ptour__head-container'>
                    <p className='ptour__head-id'>Код тура: {id}</p>
                    { hit && <p className='ptour__head-hit'>Хіт продаж</p> }
                </div>
            </div>

            <div className='ptour__body'>
                <div className='ptour__body-wrap'> 
                    <div className='ptour__body-container'>
                        <img src={img} alt=''/>
                    </div>

                    <div className='ptour__body-container ptour__body-container__content'>
                        <div>
                            <p className='ptour__body-date'>Датa:</p>
                            <p className='ptour__body-date-text'>{date.excursiondate}</p>
                            <p className='ptour__body-date-text'>Тривалість {duration} годин</p>
                        </div>
                        <div>
                            <p className='ptour__body-includes'><strong>Включено: </strong>трансфер страховка віза не потребується</p>
                        </div>
                        <div>
                            <div className='ptour__body-price'>
                                <p>ЦІНА {price} ГРН</p>
                                <img className='ptour__body-favorite' 
                                    src='https://upload.wikimedia.org/wikipedia/commons/5/52/Heart_icon_red_hollow.svg' 
                                    alt=''
                                    onClick={addFav}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ptour__body-desc'>
                    <h2>Опис туру</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}

export default Pagetour