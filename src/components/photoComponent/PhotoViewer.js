import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import PhotoEdit from './PhotoEdit'
import PhotoDelete from './PhotoDelete';
import PhotoCarousel from './PhotoCarousel'


const PhotoViewer = ({ photo, photos, deletePhoto }) => {
    let { albumId } = useParams()
    let { photoId } = useParams()
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ^photo viewer modal
    const [modalShow, setModalShow] = React.useState(false);
    // ^ edit modal
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const handleDeleteClose = () => setDeleteModalShow(false);
    const handleDeleteShow = () => setDeleteModalShow(true);
    //  ^delete modal
    
    

    return (
    <>
        <Card 
        className='img-container' 
        style={{ width: '18rem' }} 
        onClick={handleShow}>
            <Card.Body className='imgBody' >
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
            onHide={handleClose}>

            <Modal.Header closeButton >

            <FontAwesomeIcon icon={faLink} className='logosModal' />
                {/* ^ needs to have link to photo and copy it */}

            {/* Pencil icon, open edit modal */}
            <FontAwesomeIcon 
            icon={faPencil} 
            className='logos'
            onClick={() => setModalShow(true)}
            albumId={albumId}
            photoId={photoId}
            />

            <PhotoEdit
            show={modalShow}
            onHide={() => setModalShow(false)}
            albumId={albumId}
            photoId={photoId}
            />

        {/* Trash icon, open delete modal */}
            <FontAwesomeIcon 
            icon={ faTrashCan }
            className='logosModal'
            onClick={handleDeleteShow}
            onHide={handleDeleteClose} />

            <PhotoDelete 
            show={deleteModalShow}
            deletePhoto={deletePhoto}
            deleteModalShow={deleteModalShow}
            onHide={handleDeleteClose}

            albumId={albumId}
            photoId={photoId}/>

            </Modal.Header>

            <Modal.Body>
                <PhotoCarousel photo={photo} photos= {photos} />
                <p className='caption-container'> Caption </p>
            </Modal.Body>
            {/* ^Photo viewing modal */}
        </Modal>
    </>
    );
};

export default PhotoViewer;


