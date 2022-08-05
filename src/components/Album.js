import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Album = () => {
  const navigate = useNavigate()
  const [photos, setPhotos] = useState([])
  const [deleted, setDeleted] = useState('')
 
  const handleClick = (event) => {
    event.preventDefault();
    axios.get('http://localhost:4000/photo')
      .then(res => {
       setPhotos(res.data)
      })
  }
  const handleDelete = (event) => {
    const id = event.target.id
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
    <div>
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


{/* <div>
<h1>
  Album component
</h1>
<div>
  {photos.map((photo) => (
    <>
      <img 
      src={'https://i.gifer.com/Nutm.gif'} 
      key={photo.id} 
      alt={photo.filename}
      />
      <p>
        {photo.caption}
      </p>
    </>
  ))}
</div>
</div> */}