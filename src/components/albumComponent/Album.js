import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumCard from './AlbumCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';

const Album = () => {
  const [album, setAlbum] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/albums')
      .then(res => setAlbum(res.data))
      console.log(album)
    },[])



if(!album){
  <p>loading</p>
}

return (
  <>
  <div>
      <div className='albumTopContainer'>
        <FontAwesomeIcon icon={faHouse} className='logos' />
      <div>
        <div className='logosContainer'>
        <h1>
          <FontAwesomeIcon icon={faArrowLeft} className='logos' />
          Album's info here
        </h1>
          <FontAwesomeIcon icon={faStar} className='logos' />
          <FontAwesomeIcon icon={faPencil} className='logos' />
          <FontAwesomeIcon icon={faSquareShareNodes} className='logos' />
          <FontAwesomeIcon icon={faLock} className='logos' />
          <FontAwesomeIcon icon={faLink} className='logos' />
        </div>
      </div>
    </div>

    <div>
    <Container className='albumContainer'>
    {album.map((album) => (
      <AlbumCard key={album._id} id={album._id} albumName={album.albumName} />
    ))}
    </Container>
    </div>
    <button>
      delete
    </button>
  </div>
  </>
)}

export default Album


