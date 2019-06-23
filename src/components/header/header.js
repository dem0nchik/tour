import React from 'react'
import './header.css'
import {connect} from 'react-redux'
import { searchWord } from '../../actions/actionCreator.js'

class Header extends React.Component {
    state = {
        searchText: ''
    }
    handleChange = (e) => {
        this.setState({searchText: e.currentTarget.value})
    }
    searchHandle = (e) => {
        const {searchWord}= this.props

        e.preventDefault()
        if(this.state.searchText.length)
            searchWord(this.state.searchText)
    }
    render(){
        return (
                <header>
                    <nav>
                        <div className='nav-wrap'>
                                <a href='/'><img className='nav-logo' src="../../../img/logo.jpg"
                                    alt='logo' title='Сайт відпочинку'/></a>
                                <div className='nav-menu'>
                                    <span><a className='nav-phone' href='tel:+380506526072'>+380506526072</a></span>
                                    <span>Українська | УКР</span>
                                    <span>Допомога</span>
                                </div>

                                <div >
                                    <input  className='nav-search'
                                            placeholder="Місце вашого відпочинку.." 
                                            type='search'
                                            value={this.state.searchText}
                                            onChange={this.handleChange}
                                    />
                                    <button className='nav-search__button' onClick={this.searchHandle}>пошук</button>
                                </div>

                                <button className='nav-button'>Війти</button>
                        </div>
                    </nav>
                </header>
        )
    }
}

export default connect(state => ({
    search: state.search,
}), {searchWord})(Header)
