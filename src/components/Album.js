import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Album = () => {
  const navigate = useNavigate()
  const [photos, setPhotos] = useState([])
  const [deleted, setDeleted] = useState('')

 
  // handle click to get all images from db
  const handleClick = (event) => {
    event.preventDefault();
    axios.get('http://localhost:4000/photo')
      .then(res => setPhotos(res.data))
  }

  const handleDelete = (event) => {
    const id = event.target.id
    // prevents multiple selection of same id
    // setState callback creates a persistent value in the state, or else it would update everytime to 
    // the new item we added. 
    setDeleted((prev) => !deleted.includes(id) ? [...prev, id] : deleted)
   
  }

console.log(deleted)
  useEffect(() => {
  },[photos])

console.log(photos)
return (
  <div>
    <h2>
      album
    </h2>
    <div className='img-container'>
    {photos.map((photos) => (
      <img onClick={handleDelete}
      src={photos.url}
      key={photos._id}
      id={photos._id}
      alt={photos.caption}
      />
    ))}
    </div>
    <button onClick={handleClick} >
      get image
    </button>
  </div>
)
}

export default Album


