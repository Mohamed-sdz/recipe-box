import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeRating = ({ rating }) => {
  return (
    <div className="recipe-rating">
      <span className="rating">{rating.toFixed(1)}</span>
      <span className="stars">
        {getStars(rating)}
      </span>
    </div>
  );
};

const getStars = rating => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star text-warning"></i>);
  }

  if (hasHalfStar) {
    stars.push(<i key="half" className="fas fa-star-half-alt text-warning"></i>);
  }

  return stars;
};

export default RecipeRating;