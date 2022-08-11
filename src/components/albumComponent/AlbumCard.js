
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons"
import AlbumChange from "./AlbumChange";

// each individual album
const AlbumCard = ({ id, album, albumName }) => {
  
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  const handleClick = (event) => {
    navigate(`/${event.target.id}/${albumName}/photos`)
  }

  const event = new Date(album.createdAt)

  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <>
    <div>
      <Card style={{ width: '18rem' }}>
        <div className='logosContainer'>
      
        </div>
          <Card.Body className='album-img-container img-container'>
          <Card.Title >{ albumName }</Card.Title>
          <Button onClick={handleClick} id={id} variant='primary'>View</Button>
        <span>{album.description}</span>
      <p>
        {
          album.creator ? (<p>Created by {album.creator.username}</p>):null
        }
        Created on <span>{event.toLocaleDateString(undefined, options)}</span>
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
