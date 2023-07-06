import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function RecipeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        setTitle(data.title);
        setDescription(data.description);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: recipe.id,
      title,
      description,
    };

    fetch(`http://localhost:3000/recipes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRecipe),
    })
      .then((response) => response.json())
      .then(() => {
        setTitle('');
        setDescription('');
        // Redirect to RecipeDetails page after editing
        navigate(`/recipes/${id}`);
      });
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Recipe</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default RecipeEdit;
