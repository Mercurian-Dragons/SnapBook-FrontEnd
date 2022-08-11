
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
      <Card 
      className="text-center"
      style={{ width: '18rem' }}>

          <Card.Body className='album-img-container img-container'>

          <Card.Title >{ albumName }</Card.Title>
          
        
        <span>{album.description}</span>
        <Card.Text>
        {
          album.creator ? (<Card.Subtitle>Created by {album.creator.username}</Card.Subtitle>):null
        }
        Created on <span>{event.toLocaleDateString(undefined, options)}</span>
        {/* Shared with (names) */}
        {/* stretch functionality to show who(users) it's shared with/the group */}
      </Card.Text>
      <Button onClick={handleClick} id={id} variant='primary'>Open</Button>
        </Card.Body>
      </Card>
    </div>
    {/* </Container> */}
    </>
  )
}

export default AlbumCard
