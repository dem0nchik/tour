import React from 'react'
import './Article.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Article = (props) => {
    const {id, img, hit, title, reviews, duration, description, price, date } = props.data
    
    return (
        <article>
            <div className='article'>
            <Link  to={'tour\\'+id}><img src={img} alt=''/></Link>
                <div>
                    { hit && <p className='article__hit'>Хіт продаж</p> }
                    <Link  to={'tour\\'+id}><h3>{title}</h3></Link>
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
                            <span className='article__excursion-date'>{date.excursiondate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Article