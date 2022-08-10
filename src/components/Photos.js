import axios from 'axios'
import React, { useEffect, useState, createContext} from 'react'
import { useParams, useNavigate, Route } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import AlbumEdit from './AlbumEdit';
import PhotoViewer from './photoComponent/PhotoViewer'
import UploadPictures from './UploadPictures'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons"


const Photos = () => {
  let { albumId } = useParams()
  let { photoId } = useParams()
  const [photos, setPhotos] = useState([])
  // const [deleted, setDeleted] = useState('')
  const [modalShow, setModalShow] = React.useState(false);
  const [deletePhoto, setDeletePhoto] = useState('')
  const Context = createContext()
  const navigate = useNavigate()
  const [index, setIndex] = useState(0);
  // console.log(Context)

    // handle click to get all images from db
    const handleClick = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:8000//${albumId}/photos`)
            .then(res => setPhotos(res.data))
        // console.log(event.target.albumName)
        navigate(`/photos/${event.target}`)
        // console.log('hi')
    }
  // select carousel image
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
  };

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

  const copyLink = (event) => {
    console.log(event.target.value)
  }
 
  return (
    <div>
      <UploadPictures photos={photos}/>
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className='logos' 
        onClick={handleReturn}/>
      {/* set up to return to /albums */}
        <FontAwesomeIcon icon={faLink} className='logos link-logo' onClick={copyLink} />
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
          <PhotoViewer photo={photo} photos={photos} key={i}/>
        </div>
        ))}
      </Container>
    </div>
  )
}

export default Photos