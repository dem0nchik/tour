import React from 'react'
import './Article.css'

const Article = (props) => {
    const { img, hit, title, reviews, duration, description, price, excursiondate } = props.data
    
    return (
        <article>
            <div className='article'>
                <img src={img} alt=''/>
                <div>
                    { hit && <p className='article__hit'>Хіт продаж</p> }
                    <h3>{title}</h3>
                    <div className='article__column'>
                        <span className='article__reviews'>Відгуки: {reviews}</span>
                        <span className='article__duration'>Тривалість: {duration}г.</span>
                    </div>
                    <p className='article__description'>{description}</p>

                    <div className='article__column'>
                        <div>
                            <span className='article__price'>від</span>
                            <span className='price-from'>{price} грн</span>
                        </div>
                        <div>
                            <span className='article__excursion'>найближча екскурсія: </span>
                            <span className='article__excursion-date'>{excursiondate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Article