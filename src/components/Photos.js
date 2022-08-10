import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
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
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';


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
  // Tooltip styles below
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);


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
    // alert('Copied!')
}

const handleCopy = (event) => {
  setShow(!show);
  setTarget(event.target);
};


  return (
    <div>
      <UploadPictures />
      <span class='albumHeader'>
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className='logos' 
        onClick={handleReturn}/>

      <span className='albumName'>(Album name)'s photos</span>
      <span ref={ref}
        onClick={handleCopy} >
          <FontAwesomeIcon icon={faLink} className='logos link-logo' onClick={copyToClipboard} />
        {/* ^ get sharing link */}
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
        <Popover id="popover-contained">
          <Popover.Body>
          Album link copied to clipboard
          </Popover.Body>
        </Popover>
      </Overlay>
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
        </span>
      </span>
      
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