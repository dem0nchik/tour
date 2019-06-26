import React from 'react';
import './App.css';
import Content from './components/content/Content.js'
import Footer from './components/Footer/Footer.js'

const App = () =>  {
    return(
        <div className="App">
          <Content/>
          <Footer />
        </div>
    )
}

export default App;
