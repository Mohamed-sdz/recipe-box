import React from 'react';
import { Card, Button } from 'react-bootstrap';
const RecipeCard = ({ title, ingredients, instructions }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Ingredients:</strong> {ingredients}
        </Card.Text>
        <Card.Text>
          <strong>Instructions:</strong> {instructions}
        </Card.Text>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;

