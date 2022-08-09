import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AlbumEdit = (props) => {
    
    const [album, setAlbum] = useState(null)
    // const [deleted, setDeleted] = useState(false)
    // const [edited, setEdited] = useState(false)
    let { albumId } = useParams()
    const navigate = useNavigate();

useEffect(() => {
    axios.get(`http://localhost:8000/album/${albumId}`)
    .then(res => 
        setAlbum(res.data))
    }, [albumId])

    // const handleChange = (event) => {
    // 	setAlbum({ ...album, [event.target.id]: event.target.value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.patch(`http://localhost:8000/album/edit/${id}`, album)
    //         .then(res => {
    //             navigate(`/albums`);
    //         })
    // };
// ^ for editing

// button to delete the album
const handleDelete = () => {
    axios.delete(`http://localhost:8000/album/edit/${albumId}`)
        .then(res => {
    // put some message here to display that it's been deleted?
            navigate('/albums');
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
            <h4>Album Settings</h4>
            <p>
            (Here will be a form with edit options)
                <Button variant="danger"
                onClick={handleDelete}>
                    Delete Album
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

export default AlbumEdit