import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// each individual album
const AlbumCard = ({ id, albumName }) => {
  const navigate = useNavigate()

  const handleClick = (event) => {
    console.log(event.target.id)
    // id of album
    navigate(`photos/${event.target.id}`)
  }
  return (
    <>
    <Container className='albumContainer'>
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body className='img-container'>
      <p onClick={handleClick} id={id}>
        {albumName}
      </p>
      <h3>
        album card
      </h3>

        </Card.Body>
      </Card>
    </div>
    </Container>
    </>
  )
}

export default AlbumCard