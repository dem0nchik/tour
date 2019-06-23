import React from 'react'
import './Content.css'
import Filter from './Filter/Filter'
import List from './List/List'

const Content = () => {
    return(
        <main>
            <p className='content-title'>пхукет знайдено 44 заходи</p>
            <div className='content-wrap'>
                <Filter />
                <List />
            </div>
        </main>
    )
}

export default Content