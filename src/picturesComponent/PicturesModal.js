import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const PicturesModal = ({ name, url}) => {
  const navigate = useNavigate()
  let { albumId } = useParams()
  let { albumName } = useParams()
  const initialInputState = {
    name: '',
    url: ''
  }
  const [input, setInput] = useState(initialInputState);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8000/${albumId}/upload`, input)
      .then(res => {
      
      })
      setShow(false)
      navigate(`/${albumId}/${albumName}/photos`);
      setInput(initialInputState)
  }

  const handleChange = (event) => {
    setInput({ ...input, [event.target.id]: event.target.value });
    console.log(event.target.id)
    console.log(event.target.value)
  }
  
    return (
      <>
      <FontAwesomeIcon icon={faPlus}  className='logos' onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Upload Picture</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <label htmlFor="name">Enter a name for the image</label>
              <Form.Control 
                type="text" 
                id="name"
                // placeholder='Enter a name for the image' 
                onChange={handleChange} 
                value={input.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
            <label htmlFor="url">Enter your image URL</label>
              <Form.Control 
                  type="url" 
                  id="url"
                  // placeholder='Enter your image URL' 
                  onChange={handleChange} 
                  value={input.url}
                />
            </Form.Group>
          </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" onClick={handleSubmit}>
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