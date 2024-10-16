import React from 'react';
// import './DisplayCard.css'; // Assuming you create a CSS file for styling
import FeatureButton from './FeatureButton';

const DisplayCard = ({ image, name, country, weight, age, breed, onBanClick }) => {
  return (
    <div className="display-card">
      {/* Name */}
      <h3 className="display-card__name">{name}</h3>

      {/* Features */}
      <div className="features">
        <FeatureButton title={weight} onClick={() => onBanClick(weight)} />
        <FeatureButton title={age} onClick={() => onBanClick(age)} />
        <FeatureButton title={breed} onClick={() => onBanClick(breed)} />
        <FeatureButton title={country} onClick={() => onBanClick(country)} />
      </div>

      {/* Image */}
      <img src={image} alt={name} className="display-card__image" width="300" />
      
     
      
    </div>
  );
};

export default DisplayCard;
