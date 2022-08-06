import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Album = () => {
  const navigate = useNavigate()
  const [photos, setPhotos] = useState([])
  const [deleted, setDeleted] = useState('')
  const [isDeleted, setIsDeleted] = useState(false)

  // handle click to get all images from db
  const handleClick = (event) => {
    event.preventDefault();
    axios.get('http://localhost:4000/photo')
      .then(res => setPhotos(res.data))
  }

  const handleSelectMultiple = (event) => {
    const id = event.target.id
    // prevents multiple selection of same id
    // setState callback creates a persistent value in the state, or else it would update everytime to 
    // the new item we added. Spread unpacks elements of existing array into new array
    setDeleted(!deleted.includes(id) ? id : deleted)
    // delete multiple
    // setDeleted((prev) => !deleted.includes(id) ? [...prev, id] : deleted)
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:4000/photo/${deleted}`)
      .then(() => {
        setIsDeleted(true)
        // navigate('/album')
      })
    }
    if(isDeleted === true){
      axios.get('http://localhost:4000/photo')
      .then(res => setPhotos(res.data))
      .then(setIsDeleted(false))
    }
    
console.log(deleted)
  useEffect(() => {
    console.log('you uploaded')
  },[photos, isDeleted])


console.log(photos)
return (
  <div>
    <h2>
      album
    </h2>
    <div className='img-container'>
    {photos.map((photos) => (
      <img onClick={handleSelectMultiple}
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
    <button onClick={handleDelete} >
      delete
    </button>
  </div>
)
}

export default Album


