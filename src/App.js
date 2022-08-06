import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js'
import Albums from './components/Albums.js'
import Footer from './components/Footer.js';
import Photos from './components/Photos.js'
import Album from './components/albumComponent/Album'
import Pictures from './components/Pictures'




const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/album' element={ <Album /> } />
 
        <Route path='album/photos/:albumId' element={ <Photos /> } />
        <Route path='pictures' element={ <Pictures/> } />

        <Route path='/albums' element={ <Albums /> } />
        <Route path='/photos' element={ <Photos /> } />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
