import React from 'react'
import './Filter.css'

const Filter = () => {
    return (
        <aside>
            <div className='filter'>
                <div className='filter-date'>
                    <h3>Вибір дати</h3>
                    <input type='date' id='date-from' />
                    <input type='date' id='date-to' />
                    <button>Знайти</button>
                </div>

                <div className='filter-toggles'>
                    <div className='filter-toggl'>
                        <h3>Тривалість</h3>
                        <ul>
                            <li><label><input type='checkbox'/>0 - 3 години</label></li>
                            <li><label><input type='checkbox'/>3 - 5 годин</label></li>
                            <li><label><input type='checkbox'/>5 - 7 годин</label></li>
                            <li><label><input type='checkbox'/>Цілий день</label></li>
                        </ul>
                    </div>
                    <div className='filter-toggl'>
                        <h3>Категорії</h3>
                            <ul>
                                <li><label><input type='checkbox'/>Екскурсії</label>
                                    <ul>
                                        <li><label><input type='checkbox'/>Активні</label></li>
                                        <li><label><input type='checkbox'/>Місцева кухня</label></li>
                                        <li><label><input type='checkbox'/>Історія і культура</label></li>
                                    </ul>
                                </li>
                                <li><label><input type='checkbox'/>Білети</label></li>
                                <li><label><input type='checkbox'/>Оренда авто</label></li>
                            </ul>
                    </div>
                    <div className='filter-toggl'>
                        <h3>Ціни</h3>
                            <ul>
                                <li><label><input type='checkbox'/>від 3000</label></li>
                                <li><label><input type='checkbox'/>від 5000</label></li>
                            </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Filter