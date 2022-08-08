import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

// each individual album
const AlbumCard = ({ id, albumName }) => {
  const navigate = useNavigate()

  const handleClick = (event) => {
    console.log(event.target.id)
    // will set the parameter to the id associated with the album card
    navigate(`photos/${event.target.id}`)
  }
  return (
    <>
    {/* <Container className='albumContainer'> */}
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body className='album-img-container'>
        <Card.Title>Card Title1</Card.Title>
        <Button onClick={handleClick} id={id} variant='primary'>View Album</Button>
      <p>
        {albumName}
      </p>
      <h3>
        album card
      </h3>
        </Card.Body>
      </Card>
    </div>
    {/* </Container> */}
    </>
  )
}

export default AlbumCard









{/* <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title1</Card.Title>
              <Button  onClick={handleClick} variant="primary"> View Album</Button>
            </Card.Body>
          </Card> */}