import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PhotoCarousel({photos}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      {photos.map((photo) => (
        <img
            key={photo._id}
            id={photo._id}
            src={photo.url}
            alt={photo.altText}
        />
        ))}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default PhotoCarousel ;