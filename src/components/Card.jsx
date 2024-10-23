import React, { useState } from 'react';
import './Card.css'

function Card({ title, image, description }) {
  const [showTitle, setShowTitle] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleClick = () => {
    setButtonVisible(false);
    setShowTitle(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      {buttonVisible ? (
        <button onClick={handleClick}>Click me</button>
      ) : (
        <p>Title: {title}</p>
      )}
    </div>
  );
}

export default Card;
