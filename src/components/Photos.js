import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import Tooltip from 'react-bootstrap/Tooltip';
import { OverlayTrigger } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faLink, faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons"
// import { faStar, faSquareShareNodes, faLock, faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import AlbumEdit from './albumComponent/AlbumEdit';
import PhotoViewer from './photoComponent/PhotoViewer'
import UploadPictures from '../picturesComponent/UploadPictures'


const Photos = () => {
  let { albumId } = useParams()
  let {albumName} = useParams()
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
    .then(res => setPhotos(res.data))
  },[photos])
  // select carousel image
  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);
  // };
  
  const photoViewerClick = (event) => {
    event.preventDefault()
    setDeletePhoto(event.target.id)
  }
  
  const handleReturn = () => {
    navigate('/albums')
  }

  function copyToClipboard(text) {
    copy(window.location.href)
    // alert('Copied!')
}
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click me to copy link!
    </Tooltip>
  );

//   const renderEditTooltip = (props) => (

// );  


  return (
    <div>
      <div className='albumHeader'>
      
      <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="button-tooltip-2">Return to Your Albums </Tooltip>}>
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className='logos' 
        onClick={handleReturn}/>
    </OverlayTrigger>
      
      <span className='albumName'>{albumName}</span>


      <OverlayTrigger
      placement="right"
      overlay={renderTooltip}>
          <FontAwesomeIcon icon={faLink} className='logos link-logo' onClick={copyToClipboard} ref={target}/>
      </OverlayTrigger>
  
        {/* ^ get sharing link */}
      {/* <OverlayTrigger
      placement="bottom"
      overlay={renderEditTooltip}> */} 
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="button-tooltip-2">Edit or Delete Album</Tooltip>}>
        <FontAwesomeIcon 
        icon={faPencil} 
        className='logos'
        onClick={() => setModalShow(true)}/>
    </OverlayTrigger>
      {/* </OverlayTrigger> */}
      {/* <Tooltip id="button-tooltip" {...props}>
        Click to Edit or Delete Album
      </Tooltip> */}

     {/* <Button variant="primary" onClick={() => setModalShow(true)}>Edit/Delete Album</Button> */}
      <AlbumEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        albumId={albumId}
        albumName={albumName}
        />
        <UploadPictures photos={photos} />

      </div>

      <Container className='photosContainer' onClick={photoViewerClick}>
        {photos.map((photo, i) => (
          <div key={i}>

            {/* <PhotoViewer photo={photo} show={modalShow} onHide={() => setModalShow(false)} deletePhoto={deletePhoto}/> */}
            <PhotoViewer photo={photo} photos={photos} key={i} />
          </div>
        ))}
      </Container>
    </div>
  )
}
export default Photos
