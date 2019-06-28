import React from 'react'
import './List.css'
import Arcticle from './Article/Article'

const List = (props) => {
    const {data} = props
    
    const handlePagination = () => {
        props.pagination()
    }

    const renderTour = () => {
    
        let tourTemplate = null

        if (data.length) {
            tourTemplate = data.map(function(item) {
                return <Arcticle key={item.id}
                                 data={item}
                                 choosedTour={props.choosedTour}
                                 isLogin={props.isLogin}
                                 addFavorite={props.addFavorite}/>
            })
        }
        return tourTemplate
    }

    return (
        <div className='list'>
            {renderTour()}
            <button className='list-morebutton' onClick={() => {handlePagination()}}>Показати більше</button>
        </div>
    )
}

export default List