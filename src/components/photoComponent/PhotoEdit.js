import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoEdit = (props) => {
    // const [photo, setPhoto] = useState(null)
    // const [deleteImage, setDeleteImage] = useState(props.deletePhoto)
    // const [deleted, setDeleted] = useState(false)
    // const [edited, setEdited] = useState(false)

   const [modalShow, setModalShow] = React.useState(false);
    
// const navigate = useNavigate();


return (
    <>
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Edit Image
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Photo Settings</h4>
            <p>
            (Here will be a form with edit options)
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>
            Close</Button>
        </Modal.Footer>
    </Modal>
    </>
)}

export default PhotoEdit