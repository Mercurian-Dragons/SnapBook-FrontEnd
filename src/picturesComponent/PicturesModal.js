import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Form from 'react-bootstrap/Form';




const PicturesModal = ({handleSubmit, handleChange, input}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
        <FontAwesomeIcon icon={faPlus}  className='logos' onClick={handleShow} />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload/Add Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
           type="text" 
           value={input.name}
           placeholder='enter name of image'
            onChange={handleChange} 
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Control
           type="url" 
          value={input.url}
          placeholder='upload your image url'
           onChange={handleChange}
            />
        </Form.Group>
      </Form>
          </Modal.Body>
          <Modal.Footer>
        <Button  type="submit">
          Submit 
        </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default PicturesModal;