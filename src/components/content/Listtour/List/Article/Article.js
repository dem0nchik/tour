import React from 'react'
import './Article.css'
// eslint-disable-next-line no-console 
import { BrowserRouter as Router, Link } from "react-router-dom";

const Article = (props) => {
    const {id, img, hit, title, reviews, duration, description, price, date } = props.data

    const linkHandler = () => {
        props.choosedTour(id)
    }

    const addFav = () => {
        props.addFavorite(id)
    }
    
    return (
        <article>
            <div className='article'>
            <Link to={`tour/${id}`}><img src={img} className='article__img' alt='' onClick={linkHandler}/></Link>
                <div>
                    <div className='article__column'>
                        { props.isLogin &&  <img className='article__favorite' 
                                                 title='add to favorite' 
                                                 src='https://upload.wikimedia.org/wikipedia/commons/5/52/Heart_icon_red_hollow.svg' 
                                                 alt=''
                                                 onClick={addFav}/> }
                        { hit && <p className='article__hit'>Хіт продаж</p> }
                    </div>
                    <Link  to={`tour/${id}`} onClick={linkHandler}><h3>{title}</h3></Link>
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