import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import AlbumEdit from './albumComponent/AlbumEdit';
import PhotoViewer from './photoComponent/PhotoViewer'
import UploadPictures from './UploadPictures'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPencil,faLink, faArrowLeft, } from "@fortawesome/free-solid-svg-icons"
// import { faStar, faSquareShareNodes, faLock, faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import copy from 'copy-to-clipboard'
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';


const Photos = () => {
  let { albumId } = useParams()
  let { albumName } = useParams()
  const [photos, setPhotos] = useState([])
  // const [deleted, setDeleted] = useState('')
  const [modalShow, setModalShow] = React.useState(false);
  const [deletePhoto, setDeletePhoto] = useState('')
  // const Context = createContext()
  const navigate = useNavigate()
  const [index, setIndex] = useState(0);
  // Tooltip styles below
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

    useEffect(() => {
      // useParams of album id to retrieve images associated to the specific album
      axios.get(`http://localhost:8000/${albumId}/photos`)
      .then(res => setPhotos(res.data)
      )
    },[photos])


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
      <UploadPictures  photos={photos}/>
      <span class='albumHeader'>
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className='logos' 
        onClick={handleReturn}/>
      <span className='albumName'>{albumName}</span>
      <span>
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
        albumId={albumId}
        />
          {/* Trash icon, open edit modal */}

      <h3>
        
      </h3>

        </span>
      </span>
      
      <Container className='photosContainer' onClick={photoViewerClick}>
        {photos.map((photo, i) => (
        <div key={i}>
          
          {/* <PhotoViewer photo={photo} show={modalShow} onHide={() => setModalShow(false)} deletePhoto={deletePhoto}/> */}
          <PhotoViewer photo={photo} photos={photos} key={i}/>
        </div>
        ))}
      </Container>
    </div>
  )
}

export default Photos