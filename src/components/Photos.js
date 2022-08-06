import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Photos = () => {
  let { photoId } = useParams()
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(photoId)

  useEffect(() => {
    axios.get(`http://localhost:8000/photo/${photoId}`)
    .then(res => setPhotos(res.data))
  },[])
 
console.log(photos)

  return (
    <div>
      <h3>
        Photos
      </h3>
      <div className='image-container'>
        {photos.map((photo) => (
          <img 
          key={photo._id}
          id={photo._id}
          src={photo.url}
          />
        ))}
      </div>
      <button>
        delete
      </button>
    </div>
  )
}

export default Photos