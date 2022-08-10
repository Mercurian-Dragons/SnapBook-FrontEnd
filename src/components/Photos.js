import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import AlbumEdit from './albumComponent/AlbumEdit';
import PhotoViewer from './photoComponent/PhotoViewer'
import UploadPictures from '../components/UploadPictures'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPencil,faLink, faArrowLeft, } from "@fortawesome/free-solid-svg-icons"
// import { faStar, faSquareShareNodes, faLock, faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import copy from 'copy-to-clipboard'


const Photos = () => {
  let { albumId } = useParams()
  // let { photoId } = useParams()
  const [photos, setPhotos] = useState([])
  // const [deleted, setDeleted] = useState('')
  const [modalShow, setModalShow] = React.useState(false);
  const [deletePhoto, setDeletePhoto] = useState('')
  // const Context = createContext()
  const navigate = useNavigate()
  const [index, setIndex] = useState(0);
  // console.log(Context)

    // handle click to get all images from db
    // const handleClick = (event) => {
    //     event.preventDefault();
    //     axios.get(`http://localhost:8000//${albumId}/photos`)
    //         .then(res => setPhotos(res.data))
    //     // console.log(event.target.albumName)
    //     navigate(`/photos/${event.target}`)
    //     // console.log('hi')
    // }
  // select carousel image
  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);
  // };

    useEffect(() => {
      // useParams of album id to retrieve images associated to the specific album
      axios.get(`http://localhost:8000/${albumId}/photos`)
      .then(res => setPhotos(res.data)
      )
    },)

  const photoViewerClick = (event) => {
    event.preventDefault()
    setDeletePhoto(event.target.id)
  }

  const handleReturn = () => {
    navigate('/albums/')
  }

  function copyToClipboard(text) {
    copy(window.location.href)
    alert('Copied!')
}

  return (
    <div>
      <UploadPictures />
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className='logos' 
        onClick={handleReturn}/>
      {/* set up to return to /albums */}
        <FontAwesomeIcon icon={faLink} className='logos link-logo' onClick={copyToClipboard} />
        {/* ^ get sharing link */}

      <FontAwesomeIcon 
        icon={faPencil} 
        className='logos'
        onClick={() => setModalShow(true)}/>
          {/* ^ opens edit modal */}
          {/* <Button variant="primary" onClick={() => setModalShow(true)}>Edit/Delete Album</Button> */}
      <AlbumEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        albumId={albumId}/>
          {/* Trash icon, open edit modal */}


      <h3>
        (Album name)'s photos
      </h3>
      

      <Container className='photosContainer' onClick={photoViewerClick}>
        {photos.map((photo, i) => (
        <div key={i}>
          
          {/* <PhotoViewer photo={photo} show={modalShow} onHide={() => setModalShow(false)} deletePhoto={deletePhoto}/> */}
          <PhotoViewer photo={photo} photos={photos}/>
        </div>
        ))}
      </Container>
    </div>
  )
}

export default Photos