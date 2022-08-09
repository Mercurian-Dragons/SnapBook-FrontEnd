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
    console.log(deleteImage)
    const [modalShow, setModalShow] = React.useState(false);

    // const handleChange = (event) => {
    // 	setPhoto({ ...photo, [event.target.id]: event.target.value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.patch(`http://localhost:8000/${photoId}/`, photo)
    //         .then(res => {
    //             navigate(`/${albumId}/${photoId}`);
    //         })
    // };
// ^ for editing

// button to delete the photo
const handleDelete = () => {
    axios.delete(`http://localhost:8000/${albumId}/${deleteImage}`)
    .then(res => {
        // put some message here to display that it's been deleted?
        // Deleting works, but it does not navigate away after clicking button. It needs to close modal(s) and navigate back to the album
        navigate(`/${albumId}/photos`);
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
                Edit or Delete
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Photo Settings</h4>
            <p>
                <Button variant="danger"
                onClick={props.onHide}
                >
                    Delete Photo
                    (Warning, this can't be undone!)
                </Button>
            </p>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
    </Modal>
    </>
)}

export default PhotoDelete