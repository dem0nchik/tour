import React from 'react'
import Filter from './Filter/Filter'
import List from './List/List'

const Listtour = (props) => {
    return (
        <>
            <p className='content-title'><span>{props.tour.search}</span> знайдено <span>{props.tour.filteredTour.length}</span> заходи</p>
            <div className='content-wrap'>
                <Filter filterOption={props.filterOption} />
                {props.tour.filteredTour.length && <List data={props.tour.filteredTour}  choosedTour={props.choosedTour}/> }
            </div>
        </>
    )
}

export default Listtour