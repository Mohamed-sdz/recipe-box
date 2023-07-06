import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const RecipeReviews = ({ reviews }) => {
  return (
    <div className="recipe-reviews">
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul className="list-group">
          {reviews.map((review, index) => (
            <li key={index} className="list-group-item">
              {review}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default RecipeReviews;

