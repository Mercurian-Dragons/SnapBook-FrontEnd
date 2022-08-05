import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js'
import Album from './components/Album.js'
import Footer from './components/Footer.js';
import Photos from './components/Photos.js'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/album' element={ <Album /> } />
        <Route path='/photos' element={ <Photos /> } />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
