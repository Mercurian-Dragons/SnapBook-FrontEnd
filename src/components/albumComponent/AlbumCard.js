import { useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

// each individual album
const AlbumCard = ({ id, albumName}) => {
  const navigate = useNavigate()
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
