import React from 'react';
import { Form, Button } from 'react-bootstrap';

const RecipeForm = () => {
  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group controlId="formIngredients">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter ingredients" />
      </Form.Group>

      <Form.Group controlId="formInstructions">
        <Form.Label>Instructions</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Enter instructions" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Recipe
      </Button>
    </Form>
  );
};

export default RecipeForm;


