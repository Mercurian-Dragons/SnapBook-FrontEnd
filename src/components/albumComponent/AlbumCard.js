
import { useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

// each individual album
const AlbumCard = ({ id, album, albumName }) => {
  
  const navigate = useNavigate()
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
        <Card.Header class="card-header">
          <Card.Title  as="h4" >{ albumName }</Card.Title>
        </Card.Header>

          <Card.Body className='album-img-container img-container'>
          <Card.Subtitle >{album.description}</Card.Subtitle>
            <br />
          
          <Button 
            onClick={handleClick} 
            id={id} 
            variant='primary'
            className="viewAlbumBtn">
            Open
          </Button>
            <br />
          <Card.Text className="albumCardDetails">
            {
              album.creator ? (<Card.Subtitle>Created by {album.creator}</Card.Subtitle>):null
            }
            Created on <span>{event.toLocaleDateString(undefined, options)}</span>
            {/* Shared with (names) */}
            {/* stretch functionality to show who(users) it's shared with/the group */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default AlbumCard
