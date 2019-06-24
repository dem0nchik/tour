import React from 'react'
import './Content.css'
import Filter from './Filter/Filter'
import List from './List/List'
import {connect} from 'react-redux'
import { getTours, filterOption } from '../../actions/actionCreator.js'

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
        return(
            <main>
                <p className='content-title'><span>{this.props.tour.search}</span> знайдено <span>{this.props.tour.filteredTour.length}</span> заходи</p>
                <div className='content-wrap'>
                    <Filter filterOption={this.props.filterOption} />
                    {this.props.tour.filteredTour.length && <List data={this.props.tour.filteredTour} /> }
                </div>
            </main>
        )
    }
}

export default connect(state => ({
    tour: state.tour,
}), {getTours, filterOption})(Content)