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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setCreateAlbum({ ...createAlbum, [event.target.id]: event.target.value });
    // console.log(event.target.value)
    // console.log(createAlbum)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(createAlbum.albumName === ''){
      alert('Please enter an Album name')
      setCreateAlbum(initialFormState)
    } else{ 
      axios.post(`https://snapbook-backend.herokuapp.com/album/create`, createAlbum)
      .then (() => {
        navigate('/albums')
        setShow(false)
      })
      setCreateAlbum(initialFormState)
    }
}

  return (

      <AlbumModal 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} createAlbum={createAlbum}  
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}/>
  )
}

export default CreateAlbum;
