import {  useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faStar, faSquareShareNodes, faPencil, faLock, faLink, faArrowLeft, faHouse } from "@fontawesome/free-solid-svg-icons"



const Albums = () => {
 
  const navigate = useNavigate()
  // const [albumPhotos, setAlbumPhotos] = useState([])

    // handle click to get all images from db
    const handleClick = (event) => {
      event.preventDefault();
  
      navigate("/photos")
      // change to album 
    }
    

  // useEffect(() => {
  // }, [albumPhotos])

  return (
    <>
      <div className='albumTopContainer'>
        {/* <FontAwesomeIcon icon={faHouse} className='logos' /> */}
        <div>
          <div className='logosContainer'>
            <h1>
              {/* <FontAwesomeIcon icon={faArrowLeft} className='logos' /> */}
              Album's info here
            </h1>
            {/* <button className='logosBtn'> */}
            {/* <FontAwesomeIcon icon={faStar} className='logos' /> */}
            {/* </button> */}
            {/* <FontAwesomeIcon icon={faPencil} className='logos' />
            <FontAwesomeIcon icon={faSquareShareNodes} className='logos' />
            <FontAwesomeIcon icon={faLock} className='logos' />
            <FontAwesomeIcon icon={faLink} className='logos' /> */}
          </div>

        </div>

        <Container className='albumContainer'>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title1</Card.Title>
              <Button  onClick={handleClick} variant="primary"> View Album</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title2</Card.Title>
              <Button  onClick={handleClick} variant="primary"> View Album</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title3</Card.Title>
              <Button  onClick={handleClick} variant="primary"> View Album</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title4</Card.Title>
              <Button  onClick={handleClick} variant="primary"> View Album</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title5</Card.Title>
              <Button  onClick={handleClick} variant="primary"> View Album</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body className='album-img-container'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Card Title6</Card.Title>
              <Button  onClick={handleClick} variant="primary">  View Album</Button>
            </Card.Body>
          </Card>

        </Container>
       
      
      </div>
    </>

  )
}



export default Albums


