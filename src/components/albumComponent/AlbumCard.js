import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons"

// each individual album
const AlbumCard = ({ id, albumName}) => {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  let { albumId } = useParams()

  const handleClick = (event) => {
    // will set the parameter to the id associated with the album card
    navigate(`/${event.target.id}/photos`)
  }


  return (
    <>
    {/* <Container className='albumContainer'> */}
    <div>
      <Card style={{ width: '18rem' }}>
        <div className='logosContainer'>
      
        </div>
        <Card.Body className='album-img-container img-container'>
        <Card.Title>{ albumName }</Card.Title>
        <Button onClick={handleClick} id={id} variant='primary'>View { albumName }</Button>
      <p>
        Created by (creatorName) on (date)

        {/* Shared with (names) */}
        {/* stretch functionality to show who(users) it's shared with/the group */}
      </p>
        </Card.Body>
      </Card>
    </div>
    {/* </Container> */}
    </>
  )
}

export default AlbumCard
