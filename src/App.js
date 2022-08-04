import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './Nav';
import Home from './components/Home'
import Album from './components/Album'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/album' element={ <Album /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
