import React from 'react'
import './Content.css'
import Filter from './Filter/Filter'
import List from './List/List'
import {connect} from 'react-redux'

class Content extends React.Component {
    state = {
        tour: []
    }

    componentDidMount() {
      fetch('http://localhost:3000/data/tourData.json')
          .then(response => {
              return response.json()
          })
            .then(data => {
                  this.setState({ tour: data })
            })
    }
    render(){
        return(
            <main>
                <p className='content-title'><span>пхукет</span> знайдено <span>44</span> заходи</p>
                <div className='content-wrap'>
                    <Filter />
                    {this.state.tour.length && <List data={this.state.tour} /> }
                </div>
            </main>
        )
    }
}

export default connect(state => ({
    search: state.search,
}), {})(Content)