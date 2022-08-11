// import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PhotoCarousel({photo, photos}) {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleClick = ( item  ) => {
    const find = photos.find((element) => {
        return element._id === item  
    })

    setIndex(photos.indexOf(find))
        console.log(find)
    }

return (
    <>
        <Carousel activeIndex={index} onSelect={handleSelect} >
            {photos.map((photo) => (
            <Carousel.Item className='mySlides' key={photo._id} >
            <img className='demo'
                id={photo._id}
                src={photo.url}
                alt={photo.altText}
            />
            </Carousel.Item>
            ))}
        </Carousel>

        <div className="row" >
        {photos.map((photo) => (
        // thumbnail images 
        <div className="column" key={photo._id}>
            <img className='demo' onClick={ ( )=> handleClick(photo._id)}
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