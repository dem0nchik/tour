import React from 'react'
import './Content.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { getTours, filterOption, choosedTour, addFavorite, pagination } from '../../actions/actionCreator.js'
import Pagetour from './Pagetour/Pagetour.js'
import Listtour from './Listtour/Listtour.js'
import Header from '../header/header.js'
import Login from '../Login/Login.js'

class Content extends React.Component {
    componentDidMount() {
      fetch('http://localhost:3000/data/tourData.json')
          .then(response => {
              return response.json()
          })
            .then(data => {
                this.props.getTours(data)
            })
    }
    render(){
        const {chooseTour} = this.props.tour
        return(
            <Router>
                <Header tour={this.props.tour}
                        isLogin={this.props.tour.isLogin}/>
                <Route path='/login' component={Login} />
                <main>
                    <Route  path='/' exact render={() => <Listtour choosedTour={this.props.choosedTour}
                                                                    filterOption={this.props.filterOption}
                                                                    tour={this.props.tour}
                                                                    isLogin={this.props.tour.isLogin}
                                                                    addFavorite={this.props.addFavorite}
                                                                    pagination={this.props.pagination}/>
                                                    } />
                    <Route path={`/tour/${chooseTour}`} exact  render={() =>
                                                            <Pagetour
                                                                        tour={this.props.tour.tour[chooseTour-1]} 
                                                                        addFavorite={this.props.addFavorite}
                                                            />}/>
                </main>
            </Router>
        )
    }
}

export default connect(state => ({
    tour: state.tour,
}), {getTours, filterOption, choosedTour, addFavorite, pagination})(Content)