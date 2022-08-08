import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js'
<<<<<<< HEAD
import Album from './components/albumComponent/Album.js'
=======
import Albums from './components/Albums.js'
>>>>>>> 2e3931c (day2 End dev-Sean)
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
<<<<<<< HEAD
        <Route path='/album' element={ <Album /> } />
<<<<<<< HEAD
        <Route path='album/photos/:albumId' element={ <Photos /> } />
        <Route path='pictures' element={ <Pictures/> } />
=======
=======
        <Route path='/albums' element={ <Albums /> } />
>>>>>>> 2e3931c (day2 End dev-Sean)
        <Route path='/photos' element={ <Photos /> } />

>>>>>>> 1f089ab (lunchSavePoint day2)
      </Routes>
      <Footer />
    </>
  );
}

export default App;
