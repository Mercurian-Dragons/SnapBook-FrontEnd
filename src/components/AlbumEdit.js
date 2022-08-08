import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AlbumEdit = (props) => {
    const [deleted, setDeleted] = useState(false)
    // const [edited, setEdited] = useState(false)
    let { id } = useParams()
    const navigate = useNavigate();

  useEffect(() => {
    axios.get(`localhost:8000/album/${id}`)
      .then(res => setDeleted(res.data))
    //   console.log(album)
    },[])
// const handleSubmit = (event) => {
//     event.preventDefault();
//     // Write your PUT fetch() or axios() request here
//     axios.patch(`localhost:8000/album/edit/${id}`, flavor)
//         .then(res => {
//             // navigate('/');
//         })
// };

const handleDelete = () => {
    axios.delete(`localhost:8000/album/edit/${id}`)
        .then(res => {
    // put some message here to display that it's been deleted!
            navigate(`/album/${id}`);
        })	
};

return (
    <>

    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Edit or Delete Album
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Album Settings</h4>
            <p>
            Here will be a form with edit options
            <Button 
            variant="primary"
            onClick={handleDelete}>Delete</Button>
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button 
            onClick={props.onHide}
            >Close</Button>
        </Modal.Footer>
    </Modal>
    </>
)}

export default AlbumEdit