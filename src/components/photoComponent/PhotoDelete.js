import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoDelete = (props) => {
    console.log(props)
    const [deleteImage, setDeleteImage] = useState(props.deletePhoto)
    let { albumId } = useParams()
    const navigate = useNavigate();

// button to delete the photo
const handleDelete = () => {
    axios.delete(`http://localhost:8000/${albumId}/${props.id}`)
};
useEffect(() => {
},[props.show])
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
                <Button variant="primary" 
                onClick={props.onHide}>
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