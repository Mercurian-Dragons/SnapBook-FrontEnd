import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumCard from './AlbumCard';
import AlbumEdit from '../AlbumEdit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const Album = () => {
  const [album, setAlbum] = useState([])
  

  useEffect(() => {
    axios.get('http://localhost:8000/albums')
      .then(res => setAlbum(res.data))
    },[])


    if(!album){
      <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
    }

return (
  <>
  <div>
      <div className='albumTopContainer'>
        {/* <FontAwesomeIcon icon={faHouse} className='logos' /> 
        <FontAwesomeIcon icon={faArrowLeft} className='logos' /> */}
        <h1>
          Your Albums
        </h1>
      <div>
        <div className='logosContainer'>
          {/* <FontAwesomeIcon icon={faStar} className='logos' /> */}
          {/* ^ favorites (stretch) */}
          {/* <FontAwesomeIcon icon={faSquareShareNodes} className='logos' /> */}
          {/* ^ might not need this one?  */}
          <FontAwesomeIcon icon={faLink} className='logos' />
          {/* <FontAwesomeIcon icon={faLock} className='logos' /> */}
          {/* ^ private (stretch)  */}

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
  </div>
  </>
)}

export default Album


