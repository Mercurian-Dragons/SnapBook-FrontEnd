import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PhotoCarousel({photo, photos}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} className="carouselContainer">
      <Carousel.Item className='mySlides'>
      
        <img className='modal-content'
         key={photo._id}    
            id={photo._id}
            src={photo.url}
            alt={photo.altText}
            />
      </Carousel.Item>
    </Carousel>
      <div className="row">
    <div className="column">
      {/* <img className='demo' src={photo.url} alt={photo.altText}/> */}
      {photos.map((photo) => (
        <img className='demo'
            key={photo._id}
            id={photo._id}
            src={photo.url}
            alt={photo.altText}
        />
        ))}
    </div>
    </div>
    </>
  );
}

export default PhotoCarousel ;