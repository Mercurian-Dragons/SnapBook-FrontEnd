import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const Photos = () => {
    const navigate = useNavigate()
    const [photos, setPhotos] = useState([])
    const [deleted, setDeleted] = useState('')


    // handle click to get all images from db
    const handleClick = (event) => {
        event.preventDefault();
        axios.get('http://localhost:4000/photo')
            .then(res => setPhotos(res.data))
        console.log(photos)
    }

    const handleDelete = (event) => {
        const id = event.target.id
        // prevents multiple selection of same id
        // setState callback creates a persistent value in the state, or else it would update everytime to 
        // the new item we added. 
        setDeleted((prev) => !deleted.includes(id) ? [...prev, id] : deleted)

    }

    console.log(deleted)
    useEffect(() => {
    }, [photos])

    return (
        <>

            <Container className='albumContainer'>
                <div>
                    <div className='img-container'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='img-container'>
                                {photos.map((photos) => (
                                    <Card.Img variant="top" onClick={handleDelete}
                                        src={photos.url}
                                        key={photos._id}
                                        id={photos._id}
                                        alt={photos.caption}
                                    />
                                ))}
                            </Card.Body>
                        </Card>
                    </div>
                    <button onClick={handleClick} >
                        get image/album
                    </button>
                </div>
            </Container>
        </>

    )
};

export default Photos;