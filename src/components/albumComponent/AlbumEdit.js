import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import AlbumChange from './AlbumChange'
import Form from 'react-bootstrap/Form';

const AlbumEdit = (props, {show}) => {
    const initialFormState = {
        albumName: '',
        description: '',
        creator: ''
    }
    let { albumId } = useParams()
    let { albumName } = useParams()
    const navigate = useNavigate();
    const [album, setAlbum] = useState([])
    const [reload, setReload] = useState(false)
    const [albumChange, setAlbumChange] = useState(initialFormState);

        // const [album, setAlbum] = useState([])
    // const [editAlbum, setEditAlbum] = useState(initialFormState)
    // const [deleted, setDeleted] = useState(false)
    // const [edited, setEdited] = useState(false)
    
    useEffect(() => {
        axios.get(`http://localhost:8000/album/${albumId}`)
            .then(res =>
                setAlbum(res.data))
                console.log(album)
                // console.log(editAlbum)
    }, [])

    const handleChange = (event) => {
        setAlbumChange({ ...albumChange, [event.target.id]: event.target.value });
        // console.log(event.target.value)
    }


//     const handleChange = (event) => {
//         setEditAlbum({ ...editAlbum, [event.target.id]: event.target.value });
//         // console.log(event.target.value)
//         // console.log(createAlbum)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.patch(`http://localhost:8000/album/edit/${albumId}`)
//         .then (() => {
//             navigate(`/${albumId}/${albumName}/photos`)
//             // setShow(false)
//         })
//     setEditAlbum(initialFormState)
// }

const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:8000/album/edit/${albumId}`, albumChange)
        .then(() => {
        navigate('/albums')
        })

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
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit or Delete Album
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Album Settings</h4>
                    <Form
                        onSubmit={handleSubmit}
                    >

                        <Form.Group className="mb-3">
                        <Form.Label>Edit Album Name</Form.Label>
                            <Form.Control placeholder="Name" 
                            id="albumName"
                            value={albumChange.albumName}
                            onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Edit Description</Form.Label>
                            <Form.Control           placeholder="Description"
                                type="text"
                                onChange={handleChange}
                                id='description'
                                value={albumChange.description} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Edit Owner</Form.Label>
                            <Form.Control               placeholder="Name"
                                type="text"
                                onChange={handleChange}
                                id='creator'
                                value={albumChange.creator} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <span onClick={props.onHide}>
                <Button type="submit"
                            onClick={handleSubmit}>
                        Submit Changes
                </Button>
                </span>

                    <Button 
                    variant="danger"
                        onClick={handleDelete}>
                        Delete Album
                    </Button>
                    <Button onClick={props.onHide}>
                        Nevermind</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
}
export default AlbumEdit