import React, { useState } from 'react'
import './List.css'
import Arcticle from './Article/Article'

const List = (props) => {
    const {data} = props
    const [pagination, setPagination] = useState(3)
    const [tour, setTour] = useState([data[0],data[1],data[2]])
    
    const handlePagination = (e) => {
        if( data.length > pagination + 3 ) {
            setPagination( pagination + 3 )

            let stour = tour
            for(let i = pagination+1; i <= pagination + 3; i++) {
                stour.push(data[i])
            }
            setTour(stour)
        }
        else {
            setPagination( pagination + (data.length - pagination))
        }
    }

    const renderTour = () => {
    
        let tourTemplate = null

        if (tour.length) {
            tourTemplate = tour.map(function(item) {
                return <Arcticle key={item.id} data={item} />
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