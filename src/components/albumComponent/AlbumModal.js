import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Form from 'react-bootstrap/Form';

<<<<<<< HEAD
const AlbumModal = ({ handleSubmit, handleChange, createAlbum, show, handleClose, handleShow }) => {
=======
const AlbumModal = ({ handleSubmit, handleChange, createAlbum, show, handleClose, handleShow  }) => {


>>>>>>> Integrated Steven's fixes to create album modal bug, and updated README
    return (
        <>
            <label>
                <FontAwesomeIcon icon={faPlus} className='logos' onClick={handleShow} />
            </label>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Album</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                        <Form.Label>Enter Album Name</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder='enter name of album'
                                onChange={handleChange}
                                id='albumName'
                                value={createAlbum.albumName}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                        <Form.Label>Add a Description (optional)</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder='Description'
                                onChange={handleChange}
                                id='description'
                                value={createAlbum.description}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
<<<<<<< HEAD
                    <Button type="submit"       onClick={handleSubmit}
>
=======
                    <Button type="submit"
                            onClick={handleSubmit}>
>>>>>>> Bug fixes to album edit modal
                        Submit
                    </Button>
                    <Button 
                        variant="secondary" 
                        onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AlbumModal;