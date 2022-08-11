import React from "react";
import axios from "axios";
import { useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import AlbumModal from "./AlbumModal";

const CreateAlbum = () => {
  const navigate = useNavigate()
  const initialFormState = {
    albumName: '',
    description: ''
  }
  const [createAlbum, setCreateAlbum] = useState(initialFormState);

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
      setCreateAlbum(initialFormState)
    }

  return (

      <AlbumModal handleSubmit={handleSubmit} handleChange={handleChange} createAlbum={createAlbum} />

  )
}

export default CreateAlbum;
