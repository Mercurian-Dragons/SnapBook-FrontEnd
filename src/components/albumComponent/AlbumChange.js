import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'

const AlbumChange = ({ id }) => {
  let {albumId} = useParams()
  const navigate = useNavigate()
  const [reload, setReload] = useState(false)
  const [albumChange, setAlbumChange] = useState({
    albumName: '',
    description: ''
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
      <h2>
        Album Change Component
      </h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='enter name of album' 
          onChange={handleChange} 
          id='albumName'
          value={albumChange.albumName} 
          />
        <input 
          placeholder='enter description' 
          onChange={handleChange} 
          id='description'
          value={albumChange.description} 
          />
        <button type='submit'>Submit</button>
      </form>
    </div>
  ) 
}
 export default AlbumChange;