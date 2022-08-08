import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js'
import Albums from './components/Albums.js'
import Footer from './components/Footer.js';
import Photos from './components/Photos.js'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/albums' element={ <Album /> } />
        <Route path='/:albumId/photos' element={ <Photos /> } />
        <Route path='/pictures' element={ <Pictures /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
