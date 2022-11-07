import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home'
import About from './pages/About';
import Collection from './pages/Collection';

function App() {
  return (
    <div className='container'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/collection' element={ <Collection /> } />
          <Route path='/about-us' element={ <About /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
