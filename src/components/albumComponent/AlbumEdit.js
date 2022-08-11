import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import AlbumChange from './AlbumChange'



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
        // size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
        >
        
        <Modal.Header closeButton>
            <Modal.Title>
                Edit or Delete Album
            </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <AlbumChange 
                handleDelete={handleDelete}/>
        </Modal.Body>

        <Modal.Footer>
            {/* <Button onClick={props.onHide}>
            Close</Button> */}
        </Modal.Footer>
        
    </Modal>
    </>
)}


export default AlbumEdit