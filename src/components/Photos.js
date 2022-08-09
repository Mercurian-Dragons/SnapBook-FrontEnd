import axios from 'axios'
import React, { useEffect, useState, createContext} from 'react'
import { useParams, useNavigate, Route } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import AlbumEdit from './AlbumEdit';
import PhotoViewer from './photoComponent/PhotoViewer'
import UploadPictures from '../components/UploadPictures'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons"


const Photos = () => {
  let { albumId } = useParams()
  let { photoId } = useParams()
  const [photos, setPhotos] = useState([])
  const [deleted, setDeleted] = useState('')
  const [modalShow, setModalShow] = React.useState(false);
  const [deletePhoto, setDeletePhoto] = useState('')
  const Context = createContext()
  const navigate = useNavigate()
  console.log(Context)
    // handle click to get all images from db
    const handleClick = (event) => {
        event.preventDefault();
    
        axios.get(`http://localhost:8000//${albumId}/photos`)
            .then(res => setPhotos(res.data))
        // console.log(event.target.albumName)
        navigate(`/photos/${event.target}`)
        console.log('hi')
    }

    useEffect(() => {
      // useParams of album id to retrieve images associated to the specific album
      axios.get(`http://localhost:8000/${albumId}/photos`)
      .then(res => setPhotos(res.data)
      )
    },[])
    // console.log(photos)

    // const handleDelete = (event) => {
    //     const id = event.target.id
    //     // prevents multiple selection of same id
    //     // setState callback creates a persistent value in the state, or else it would update everytime to 
    //     // the new item we added. 
    //     setDeleted((prev) => !deleted.includes(id) ? [...prev, id] : deleted)
    // }
    // console.log(deleted)
    
   
  const photoViewerClick = (event) => {
    event.preventDefault()
    setDeletePhoto(event.target.id)
  }
 
  return (
    <div>
      <UploadPictures />
      <FontAwesomeIcon 
        icon={faPencil} 
        className='logos'
        onClick={() => setModalShow(true)}
        />
          {/* ^ opens edit modal */}
          {/* <Button variant="primary" onClick={() => setModalShow(true)}>Edit/Delete Album</Button> */}
        <AlbumEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        albumId={albumId}
        />

      <h3>
        (Album name)'s photos
      </h3>
      

      <Container className='photosContainer' onClick={photoViewerClick}>
        {photos.map((photo, i) => (
        <div key={i}>
          <PhotoViewer photo={photo} show={modalShow} onHide={() => setModalShow(false)} deletePhoto={deletePhoto}/>
            {/* <Card style={{ width: '18rem' }}>
              <Card.Body className='img-container'>
                <Card.Img variant='top' 
                  key={photo._id}
                  id={photo._id}
                  src={photo.url}
                  alt={photo.altText}
                  />
              </Card.Body>
            </Card> */}
        
        </div>
        ))}
      </Container>
      {/* <button>
        delete
      </button> */}
    </div>
  )
}

export default Photos