import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js'
import Album from './components/albumComponent/Album.js'
import Footer from './components/Footer.js';
import Photos from './components/Photos'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/album' element={ <Album /> } />
        <Route path='album/photos/:photoId' element={ <Photos /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
