import React from 'react';
import './App.css';
import Header from './components/Header';
import Opportunities from './components/Opportunities';
import About from './components/About';
import Footer from './components/Footer';
import Pipeline from './components/Pipeline';

function App() {
  return (
    <div className="App">
      <Header />
      <Opportunities />
      <About />
      <Pipeline/>
      <Footer />
     
    </div>
  );
}

export default App;

