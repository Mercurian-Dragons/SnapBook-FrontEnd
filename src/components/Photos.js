import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


const Photos = () => {
  let { photoId } = useParams()
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8000/photo/${photoId}`)
    .then(res => setPhotos(res.data))
  },[])
 console.log(photos)
console.log(photos)

  return (
    <div>
      <h3>
        Photos
      </h3>
      <Container className='photosContainer'>
        {photos.map((photo) => (
      <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='img-container'>
              <Card.Img variant='top' 
                key={photo._id}
                id={photo._id}
                src={photo.url}
                alt={photo.altText}
                />
            </Card.Body>
          </Card>
      </div>
        ))}
      </Container>
      <button>
        delete
      </button>
    </div>
  )
}

export default Photos

{/* <Container className='photosContainer'>
              {photos.map((photos) => (
                    <div >
                        <Card
                            style={{ width: '18rem'}}
                        >
                             <Card.Body className='img-container'>
                                <Card.Img variant="top" onClick={handleDelete}

                                    src={photos.photos[0]}
                                    key={photos._id}
                                    id={photos._id}
                                    alt={photos.caption}
                                 />
                            </Card.Body>
                         </Card>
                    </div>
                 ))}
                <button onClick={handleClick} >
                     get image/album
                 </button>

             </Container> */}