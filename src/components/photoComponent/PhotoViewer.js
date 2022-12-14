import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
// import { faStar, faPencil, faLink, faArrowLeft, faSquareShareNodes, faLock, faHouse } from "@fortawesome/free-solid-svg-icons"
import PhotoDelete from './PhotoDelete';
import PhotoCarousel from './PhotoCarousel'

const PhotoViewer = ({ photo, photos, deletePhoto }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ^photo viewer modal
    
    // const [modalShow, setModalShow] = React.useState(false);
    // ^ edit modal
    
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const handleDeleteClose = () => setDeleteModalShow(false);
    const handleDeleteShow = () => setDeleteModalShow(true);
    //  ^delete modal
    return (
    <>
        <Card 
        className='img-container carousel-modal' 
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

            {/* Pencil icon, open edit modal */}
            {/* <FontAwesomeIcon 
            icon={faPencil} 
            className='logos'
            onClick={() => setModalShow(true)}
            id={photo._id}
            />

            <PhotoEdit
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={photo._id}
            /> */}

        
            <span className='deleteIcon'>
                <FontAwesomeIcon 
                icon={ faTrashCan }
                className='logosModal'
                onClick={handleDeleteShow}
                onHide={handleDeleteClose} 
                id={photo._id}
                />
                <PhotoDelete 
                show={deleteModalShow}
                onHide={handleDeleteClose}
                id={photo._id}
                /> 
            </span>
        </Modal.Header>

            <Modal.Body >
                <PhotoCarousel photo={photo} photos={photos} />
            </Modal.Body>
            {/* ^Photo viewing modal */}
        </Modal>
    </>
    );
};

export default PhotoViewer;


