import React, {  useState } from 'react';
// import {  useEffect, useContext } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoDelete = (props, {handleDeleteClose} ) => {
    const [deleteImage, setDeleteImage] = useState(props.deletePhoto)
    let { albumId } = useParams()
    let { albumName } = useParams()
    let { id } = useParams()
    const navigate = useNavigate();

// button to delete the photo
const handleDelete = () => {
    axios.delete(`http://localhost:8000/${albumId}/${props.id}`)
    // handleDeleteClose()
    navigate(`/${albumId}/${albumName}/photos`);
};

return (
    <>
    <Modal
        {...props}
        // size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Delete Photo
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Warning, this can't be undone!</h5>
                <Button variant="danger"
                onClick={handleDelete}
                >
                    Delete Photo
                </Button>
                <Button variant="primary" 
                onClick={props.onHide}>
                Nevermind</Button>
            </Modal.Body>
        
    </Modal>
    </>
)}

export default PhotoDelete