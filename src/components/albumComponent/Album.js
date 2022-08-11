import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumCard from './AlbumCard';
import AlbumEdit from './AlbumEdit';
import CreateAlbum from './CreateAlbum';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const Album = () => {
  const [album, setAlbum] = useState([])
  const [targetAlbum, setTargetAlbum] = ('')
  const [editAlbum, setEditAlbum] = useState({
    albumName: '',
    description: '',
  })
 
  useEffect(() => {
    axios.get('http://localhost:8000/albums')
      .then(res => setAlbum(res.data))
    },[album])

    // const onClick = (event) => {
    //   event.preventDefault()
    //   axios.patch(`http://localhost:8000/albums/edit/${event.target.id}`, editAlbum)
    //     .then((res) => {
    //       console.log(res)
    //       console.log(res.data)
    //     })
    // }

    if(!album){
      <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />}

return (
  <>
    <header className='albumsHeader'>
      <h1>Your Albums</h1>
      <CreateAlbum />
    </header>


    <Container className='albumContainer'>
      {album.map((album) => (
        <AlbumCard key={album._id} id={album._id} albumName={album.albumName} 
        album={album}/>
      ))}
    </Container>
  </>
)}

export default Album


