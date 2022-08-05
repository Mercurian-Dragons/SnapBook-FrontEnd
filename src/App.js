import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js'
import Album from './components/albumComponent/Album.js'
import Footer from './components/Footer.js';
<<<<<<< HEAD
import Photos from './components/Photos'
import Pictures from './components/Pictures';
=======
import Photos from './components/Photos.js'
>>>>>>> 1f089ab (lunchSavePoint day2)

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/album' element={ <Album /> } />
<<<<<<< HEAD
        <Route path='album/photos/:albumId' element={ <Photos /> } />
        <Route path='pictures' element={ <Pictures/> } />
=======
        <Route path='/photos' element={ <Photos /> } />

>>>>>>> 1f089ab (lunchSavePoint day2)
      </Routes>
      <Footer />
    </>
  );
}

export default App;
