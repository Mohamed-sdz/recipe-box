import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const SocialShareButtons = ({ recipeUrl }) => {
  return (
    <div className="social-share-buttons">
      <button className="btn btn-primary">
        <i className="fab fa-facebook-f"></i> Share on Facebook
      </button>
      <button className="btn btn-info">
        <i className="fab fa-twitter"></i> Share on Twitter
      </button>
      <button className="btn btn-danger">
        <i className="fab fa-pinterest"></i> Pin it
      </button>
    </div>
  );
};

export default SocialShareButtons;
