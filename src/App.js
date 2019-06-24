import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/header/header.js'
import Content from './components/content/Content.js'
import Footer from './components/Footer/Footer.js'
import Login from './components/Login/Login.js'

const App = () =>  {
    return(
      <Router>
        <div className="App">
            <Header />
            <Route path='/login' component={Login} />
            <Route exact  path='/' component={Content} />
            <Footer />
        </div>
      </Router>
    )
}

export default App;
