import { useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons"
import AlbumChange from "./AlbumChange";
// each individual album
const AlbumCard = ({ id, albumName }) => {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  
  const handleClick = (event) => {
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
          <Card.Title >{ albumName }</Card.Title>
          <p id={id}>edit</p>
          <AlbumChange id={id} />
          <Button onClick={handleClick} id={id} variant='primary'>View</Button>
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
