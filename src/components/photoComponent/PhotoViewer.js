import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons"
import PhotoEdit from '../photoComponent/PhotoEdit'



const PhotoViewer = ({ photo, deletePhoto }) => {
    let { albumId } = useParams()
    let { photoId } = useParams()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);
console.log(deletePhoto)
    return (
        <>
            <Card className='img-container' style={{ width: '18rem' }} onClick={handleShow}>
                <Card.Body className='img-container' >
                    <Card.Img variant='top' className='imagos'
                        key={photo._id}
                        id={photo._id}
                        src={photo.url}
                        alt={photo.altText}
                    />
                </Card.Body>
            </Card>

            <Modal className='modal'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton >
                <FontAwesomeIcon 
                    icon={faPencil} 
                    className='logos'
                    onClick={() => setModalShow(true)}
                    albumId={albumId}
                    photoId={photoId}
                />

                <PhotoEdit
                deletePhoto={deletePhoto}
                show={modalShow}
                onHide={() => setModalShow(false)}
                albumId={albumId}
                photoId={photoId}
                />



                    <FontAwesomeIcon icon={faLink} className='logosModal' />
                </Modal.Header>

                <Modal.Body >
                    <img src={photo.url}
                    id={photo._id} 
                    alt={photo.altText} className='modal-content' />
                    <p className='caption'> Caption </p>
                </Modal.Body>
                <Modal.Footer>
                    {/* <PhotoCarousel /> */}
                    Carousel ?
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PhotoViewer;


