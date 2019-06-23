import React from 'react';
import './App.css';
import Header from './components/header/header.js'
import Content from './components/content/Content.js'
import Footer from './components/Footer/Footer.js'

const App = () => {
  return(
    <div className="App">
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default App;
