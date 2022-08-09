import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PhotoCarousel({photo, photos}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }

    const handleClick = ( item  ) => {
    const find = photos.find((element) => {
        return element._id  === item
    })

    setIndex(photos.indexOf(find))
        // console.log(find)
    }

return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} >
        {photos.map((photo) => (
    <Carousel.Item className='mySlides' >
        <img className='demo'
            key={photo._id}
            id={photo._id}
            src={photo.url}
            alt={photo.altText}
        />
    </Carousel.Item>
        ))}
    </Carousel>
    <div className="row">
      {/* <img className='demo' src={photo.url} alt={photo.altText}/> */}
    {photos.map((photo) => (

    // thumbnail images 
    <div className="column" >
    <img className='demo' onClick={ () => handleClick(photo._id)}
            key={photo._id}
            id={photo._id}
            src={photo.url}
            alt={photo.altText}
        />
    </div>
            ))}
    </div>
    </>
    );
}

export default PhotoCarousel ;