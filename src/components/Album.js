
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons"



const Album = () => {

  return (
    <>
      <div className='albumTopContainer'>
        <FontAwesomeIcon icon={faHouse} className='logos' />
        <div>
          <div className='logosContainer'>
            <h1>
              <FontAwesomeIcon icon={faArrowLeft} className='logos' />
              Album's info here
            </h1>
            <FontAwesomeIcon icon={faStar} className='logos' />
            <FontAwesomeIcon icon={faPencil} className='logos' />
            <FontAwesomeIcon icon={faSquareShareNodes} className='logos' />
            <FontAwesomeIcon icon={faLock} className='logos' />
            <FontAwesomeIcon icon={faLink} className='logos' />

          </div>

        </div>

        <Container className='albumContainer'>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title1</Card.Title>
              <Button variant="primary"> <a href="/photos">View Album </a></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title2</Card.Title>
              <Button variant="primary"> <a href="/photos">View Album </a></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title3</Card.Title>
              <Button variant="primary"> <a href="/photos">View Album </a></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title4</Card.Title>
              <Button variant="primary"> <a href="/photos">View Album </a></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title5</Card.Title>
              <Button variant="primary"> <a href="/photos">View Album </a></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title6</Card.Title>
              <Button variant="primary"> <a href="/photos">View Album </a></Button>
            </Card.Body>
          </Card>

        </Container>
        
         
      
      </div>
    </>

  )
}

export default Album


