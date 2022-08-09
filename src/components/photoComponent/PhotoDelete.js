import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoDelete = (props) => {
    const [photo, setPhoto] = useState(null)
    const [deleteImage, setDeleteImage] = useState(props.deletePhoto)
    // const [deleted, setDeleted] = useState(false)
    // const [edited, setEdited] = useState(false)
    let { albumId } = useParams()
    const navigate = useNavigate();
 
    // const [deleteModalShow, setDeleteModalShow] = React.useState(true);
    // const handleDeleteClose = () => setDeleteModalShow(false);
    // const handleDeleteShow = () => setDeleteModalShow(true);
    // can delete three above if don't need to close 

// button to delete the photo
const handleDelete = () => {
    axios.delete(`http://localhost:8000/${albumId}/${deleteImage}`)
    .then(res => {
        console.log(deleteImage)
        navigate('/albums')
        // change this to navigate to album image was in
    })	
};


return (
    <>
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Delete Photo
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Warning, this can't be undone!</h5>
                <Button variant="danger"
                onClick={handleDelete}
                // onHide={handleDeleteClose}
                >
                    Delete Photo
                </Button>
                <Button variant="primary" onClick={props.onHide}>
            Nevermind</Button>
            </Modal.Body>
           
        
    </Modal>
    </>
)}

export default PhotoDelete

{/* <Button variant="danger"
onClick={props.onHide}
closeButton>
    Delete Photo
    (Warning, this can't be undone!)
</Button> */}