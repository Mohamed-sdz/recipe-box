import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <Card>
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <Button as={Link} to={`/edit/${recipe.id}`} variant="primary">
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeDetails;
