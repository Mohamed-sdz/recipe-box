import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'; // Import Card and Button from React Bootstrap

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="mb-3">
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>{recipe.description}</Card.Text>
              <Button as={Link} to={`/recipes/${recipe.id}`} variant="primary">
                View Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;