import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js'
import Album from './components/albumComponent/Album'
import Footer from './components/Footer.js';
import Photos from './components/Photos.js'
import UploadPictures from './picturesComponent/UploadPictures';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Album /> } />
        {/* until have login functionality, makes most sense to route directly */}
        <Route path='/albums' element={ <Album /> } />
        <Route path='/:albumId/:albumName/photos/' element={ <Photos /> } />
        <Route path='/pictures' element={ <UploadPictures /> } />
      </Routes>
      <Footer />
    </>
  );
}
export default App;