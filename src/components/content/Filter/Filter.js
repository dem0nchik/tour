import React, { useState } from 'react'
import './Filter.css'

const Filter = (props) => {
    const [toogleDuration, setToogleDuration] = useState(false);
    const [toogleCateg, setToogleCateg] = useState(false);
    const [tooglePrice, setTooglePrice] = useState(true);

    const [duration, setDuration] = useState(0);
    const [price, setPrice] = useState(1000);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const handleDuration = (e) => {
        e.currentTarget.checked ? setDuration(e.currentTarget.value) : setDuration(0)
    }
    const handlePrice = (e) => {
        if(e.currentTarget.checked && +e.currentTarget.value === 2000)
            setPrice(e.currentTarget.value)
         else setPrice(5000)
    }
    const handleDateTo = e => setDateTo(e.currentTarget.value)
    const handleDateFrom = e =>  setDateFrom(e.currentTarget.value)

    const sendData = () => {
       props.filterOption(duration, price, dateFrom, dateTo)
    }

    return (
        <aside>
            <div className='filter'>
                <div className='filter-date'>
                    <h3>Вибір дати</h3>
                    <input type='date' id='date-from' onChange={handleDateFrom}/>
                    <input type='date' id='date-to' onChange={handleDateTo}/>
                    <button onClick={sendData}>Знайти</button>
                </div>

                <div className='filter-toggles'>
                    <div className='filter-toggl'>
                        <h3 onClick={() => setToogleDuration(!toogleDuration) }>Тривалість</h3>                        
                        { toogleDuration &&
                            <ul>
                                <li><label><input type='checkbox' value='3' onClick={handleDuration}/>0 - 3 години</label></li>
                                <li><label><input type='checkbox' value='5' onClick={handleDuration}/>3 - 5 годин</label></li>
                                <li><label><input type='checkbox' value='7' onClick={handleDuration}/>5 - 7 годин</label></li>
                                <li><label><input type='checkbox' value='8' onClick={handleDuration}/>Цілий день</label></li>
                            </ul>
                        }
                    </div>

                    <div className='filter-toggl'>
                        <h3 onClick={() => setToogleCateg(!toogleCateg) }>Категорії</h3>
                        { toogleCateg && 
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
                        }
                    </div>

                    <div className='filter-toggl'>
                        <h3 onClick={() => setTooglePrice(!tooglePrice) }>Ціни</h3>
                        { tooglePrice &&
                            <ul>
                                <li><label><input type='checkbox' value='2000' onClick={handlePrice}/>від 2000</label></li>
                                <li><label><input type='checkbox' value='5000' onClick={handlePrice}/>від 5000</label></li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Filter