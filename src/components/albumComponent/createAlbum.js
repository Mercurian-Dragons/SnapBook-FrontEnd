import React from "react";
import axios from "axios";
import { useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'

const CreateAlbum = () => {
  const navigate = useNavigate()
  const [createAlbum, setCreateAlbum] = useState({
    albumName: '',
    description: ''
  });
  const handleChange = (event) => {
    setCreateAlbum({ ...createAlbum, [event.target.id]: event.target.value });
    // console.log(event.target.value)
    console.log(createAlbum)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
      axios.post(`http://localhost:8000/album/create`, createAlbum)
      .then(() => {
        navigate('/albums')
      })

    }
   
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input 
          placeholder='enter name of album' 
          onChange={handleChange} 
          id='albumName'
          value={createAlbum.albumName} 
          />
        <input 
          placeholder='enter description' 
          onChange={handleChange} 
          id='description'
          value={createAlbum.description} 
          />
      <button>Submit</button>
        </form>
        <button>
          create album
        </button>
    </div>
  )
}

export default CreateAlbum;
