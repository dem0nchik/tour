import React from 'react'
import './Favorite.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Favorite = (props) => {
    const {id, img, title} = props.data
    const linkHandler = () => {
        props.choosedTour(id)
        props.showFav()
    }

    return (
            <div className='nav-favorite__container'>
                {console.log(props)}
                <h5>id: {id}</h5>
                <div>
                    <Link to={`tour/${id}`}><img src={img} alt='' onClick={linkHandler}/></Link>
                    <Link  to={`tour/${id}`} onClick={linkHandler}><h4>{title}</h4></Link>
                </div>
            </div>
    )
}

export default Favorite