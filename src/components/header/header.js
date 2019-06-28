import React from 'react'
import './header.css'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Link } from "react-router-dom"; // eslint-disable-line no-console
import { searchWord, choosedTour } from '../../actions/actionCreator.js'
import Favorite from './Favorite/Favorite.js'

class Header extends React.Component {
    state = {
        searchText: '',
        opacityLang: false,
        currentLang: 'UKR',
        opacityFav: false,

    }
    handleChange = (e) => {
        this.setState({searchText: e.currentTarget.value})
    }
    searchHandle = (e) => {
        const {searchWord}= this.props

        e.preventDefault()
        searchWord(this.state.searchText)
    }

    onClickLang = (e) => {
        this.setState({ currentLang: e.currentTarget.innerText })
        this.setState({ opacityLang: !this.state.opacityLang })
    }

    //список айтемів
    renderFav = () => {
        let favTemplate = null
        if (this.props.tour.tour.length) {
            favTemplate = this.props.tour.tour.map((item) => {
                return <Favorite key={item.id}
                                 data={item}
                                 choosedTour={this.props.choosedTour}
                                 showFav={this.showFav}/>
            })
        }
        return favTemplate
    }

    showFav = () => {
        if(this.props.isLogin)
            this.setState({ opacityFav: !this.state.opacityFav })
    }

    render(){
        return (
                <header>
                    <nav>
                        <div className='nav-wrap'>
                                <Link to='/'><img className='nav-logo' src="../../../img/logo.jpg"
                                    alt='logo' title='Сайт відпочинку'/></Link>
                                <div className='nav-menu'>
                                    <span><a className='nav-phone' href='tel:+380506526072'>+380506526072</a></span>
                                    
                                    <span className='nav-currentlang' onClick={() => this.setState({ opacityLang: !this.state.opacityLang })} >{this.state.currentLang}</span>
                                    {this.state.opacityLang &&
                                        <div className='nav-lang'>
                                            <p onClick={this.onClickLang}>УКР</p>
                                            <p onClick={this.onClickLang}>ENG</p>
                                        </div>
                                    }
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

                                <div>
                                    <img className='nav-favorite'
                                         src='https://upload.wikimedia.org/wikipedia/commons/5/52/Heart_icon_red_hollow.svg'
                                         alt=''
                                         onClick={this.showFav}
                                    />
                                    { this.state.opacityFav && 
                                        <div className='nav-favorite__wrap'>
                                            {this.renderFav()}
                                        </div>
                                    }
                                </div>

                                <Link to="/login" className='nav-login'>Війти</Link>
                        </div>
                    </nav>
                </header>
        )
    }
}

export default connect(state => ({
    tour: state.tour,
}), {searchWord, choosedTour})(Header)
