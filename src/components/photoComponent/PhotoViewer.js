import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons"
import PhotoCarousel from './PhotoCarousel'





const PhotoViewer = ({ photo }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Card className='img-container' style={{ width: '18rem' }} onClick={handleShow}>
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
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton >
                    <FontAwesomeIcon icon={faPencil} className='logosModal' />
                    <FontAwesomeIcon icon={faLink} className='logosModal' />
                </Modal.Header>

                <Modal.Body >
                    <img src={photo.url} alt={photo.altText} className='modal-content' />
                    {/* <PhotoCarousel /> */}
                    <p className='caption'> Caption </p>
                </Modal.Body>
                <Modal.Footer>
                    <PhotoCarousel />
                    Carousel ?
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PhotoViewer;



