import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const AlbumChange = ({ id, handleDelete}) => {
  let {albumId} = useParams()
  const navigate = useNavigate()
  const [reload, setReload] = useState(false)
  const [albumChange, setAlbumChange] = useState({
    albumName: 'My Album',
    description: '',
    creator: ''
  });

  const handleChange = (event) => {
    setAlbumChange({ ...albumChange, [event.target.id]: event.target.value });
    console.log(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
      axios.patch(`http://localhost:8000/album/edit/${albumId}`, albumChange)
      .then(() => {
        navigate('/albums')
      })

    }
    useEffect(() => {
      if(albumChange){
        setReload(true)
      }
    },[reload])

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <label htmlFor="albumName">Change Album Name</label>
            <Form.Control 
              placeholder="Name" 
              onChange={handleChange} 
              id='albumName'
              required="true"
              value={albumChange.albumName} 
              />
        </Form.Group>

        <Form.Group className="mb-3">
        <label htmlFor="description">Change Album Description</label>
            <Form.Control 
              placeholder="Description" 
              onChange={handleChange} 
              id='description'
              value={albumChange.description} 
              />
        </Form.Group>

        <Form.Group className="mb-3">
        <label htmlFor="creator">Change Album Owner</label>
            <Form.Control 
              placeholder="Owner" 
              onChange={handleChange} 
              id='creator'
              value={albumChange.creator} 
              />
        </Form.Group>

        <Modal.Footer>
          <Button type='submit'>Submit Changes</Button>
          <Button 
              variant="danger"
              onClick={handleDelete}>
              Delete Album
          </Button>
        </Modal.Footer>
            

      </Form>
    </div>
  ) 
}
 export default AlbumChange;