import React from 'react'
import Filter from './Filter/Filter'
import List from './List/List'

const Listtour = (props) => {
    return (
        <>
            <p className='content-title'><span>{props.tour.search}</span> знайдено <span>{props.tour.filteredTour.length}</span> заходи</p>
            <div className='content-wrap'>
                <Filter filterOption={props.filterOption} />
                {props.tour.tourPagination.length && <List data={props.tour.tourPagination}
                                                         choosedTour={props.choosedTour}
                                                         isLogin={props.isLogin}
                                                         addFavorite={props.addFavorite}
                                                         pagination={props.pagination}/> }
            </div>
        </>
    )
}

export default Listtour