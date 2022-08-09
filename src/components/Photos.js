import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import PhotoViewer from './photoComponent/PhotoViewer'
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';


const Photos = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [modalShow, setModalShow] = React.useState(false)


    let { albumId } = useParams()
    const [photos, setPhotos] = useState([])
    const [deleted, setDeleted] = useState('')

    // handle click to get all images from db
    const handleClick = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:8000//${albumId}/photos`)
            .then(res => setPhotos(res.data))
        console.log(photos)
    }

    useEffect(() => {
        // useParams of album id to retrieve images associated to the specific album
        axios.get(`http://localhost:8000/${albumId}/photos`)
            .then(res => setPhotos(res.data))
    }, [])
    // console.log(photos)

    const handleDelete = (event) => {
        const id = event.target.id
        // prevents multiple selection of same id
        // setState callback creates a persistent value in the state, or else it would update everytime to 
        // the new item we added. 
        setDeleted((prev) => !deleted.includes(id) ? [...prev, id] : deleted)
    }
    // console.log(deleted)

    // useEffect(() => {
    // }, [photos])

    // const handleShow = (event) =>{
    //     event.preventDefault()
    //     console.log(event.target.id)

    // }

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <div>
            <h3>
                (Album name)'s photos
            </h3>
            <Container className='photosContainer'>
                {photos.map((photo, i) => (
                    <div key={i}>
                        <PhotoViewer photo={photo} show={modalShow} onHide={() => setModalShow(false)} />
                        {/* <Card className='img-container' style={{ width: '18rem' }}>
                            <Card.Body className='img-container' >
                        
                                        <Card.Img variant='top' className='imagos' onClick={() => setModalShow(true)}
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
            <button>
                delete
            </button>
        </div>
    )
}

export default Photos

