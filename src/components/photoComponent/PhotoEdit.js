import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoEdit = (props) => {
    const [photo, setPhoto] = useState(null)
    const [deleteImage, setDeleteImage] = useState(props.deletePhoto)
    // const [deleted, setDeleted] = useState(false)
    // const [edited, setEdited] = useState(false)
    let { albumId } = useParams()
    const navigate = useNavigate();
    console.log(deleteImage)


    // const handleChange = (event) => {
    // 	setPhoto({ ...photo, [event.target.id]: event.target.value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.patch(`http://localhost:8000/${photoId}/edit`, photo)
    //         .then(res => {
    //             navigate(`/${albumId}/${photoId}`);
    //         })
    // };
// ^ for editing

// button to delete the photo
const handleDelete = () => {
    axios.delete(`http://localhost:8000/${albumId}/${deleteImage}/edit`)
    .then(res => {
        // put some message here to display that it's been deleted?
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
            (Here will be a form with edit options)
                <Button variant="danger"
                onClick={handleDelete}>
                    Delete Photo
                    (Warning, this can't be undone!)
                </Button>
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