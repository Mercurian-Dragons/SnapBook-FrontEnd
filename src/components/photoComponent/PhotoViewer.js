import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faLink,faTrashCan } from "@fortawesome/free-solid-svg-icons"
// import { faStar,  faArrowLeft, faSquareShareNodes, faLock, faHouse } from "@fortawesome/free-solid-svg-icons"
import PhotoEdit from './PhotoEdit'
import PhotoDelete from './PhotoDelete';
import PhotoCarousel from './PhotoCarousel'

const PhotoViewer = ({ photo, photos, deletePhoto }) => {

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

        {/* Trash icon, open delete modal */}
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


