import React from 'react';

const Card = ({ imgSrc, altText, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgSrc} alt={altText} style={{ width: '100%' }} className="card-image" />
      <div className="container">
        <h4><b>{title}</b></h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
