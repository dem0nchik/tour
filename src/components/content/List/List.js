import React, { useState } from 'react'
import './List.css'
import Arcticle from './Article/Article'

const List = (props) => {
    const {data} = props
    //количество айтемов за загрузку
    const countItem = 3
    const [datalength, setDatalength] = useState(data.length)
    const [pagination, setPagination] = useState(countItem)
    const [tour, setTour] = useState([data[0],data[1],data[2]])
    
    const handlePagination = () => {
        if(datalength !== data.length) {
            setDatalength(data.length)
            setTour([data[0],data[1],data[2]])
            setPagination(countItem)
            return
        }

        if( data.length > pagination + countItem ) {
            setPagination( pagination + countItem )

            let stour = tour
            for(let i = pagination+1; i <= pagination + countItem; i++) {
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