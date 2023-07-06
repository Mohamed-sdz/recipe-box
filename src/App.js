import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import RecipeDetails from './pages/RecipeDetails';

import RecipeCreate from './pages/RecipeCreate';

import RecipeEdit from './pages/RecipeEdit';

import ShoppingList from './components/ShoppingList';

import SearchBar from './components/SearchBar';

import RecipeRating from './components/RecipeRating';

import RecipeReviews from './components/RecipeReviews';

import SocialShareButtons from './components/SocialShareButtons';

import IngredientConversion from './components/IngredientConversion';

import UserProfilePage from './pages/UserProfilePage';

import './App.css';

function App() {

  const handleSearch = searchTerm => {

    // Perform search logic here

    console.log('Search term:', searchTerm);

  };

  return (

    <Router>

      <div className="App">

        {/* Top Bar */}

        <div className="top-bar">

          <Navbar bg="light" expand="lg">

            <Navbar.Brand as={Link} to="/" className="navbar-brand">

              Recipe Box

            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="mr-auto">

                <Nav.Link as={Link} to="/recipes" className="nav-link">

                  All Recipes

                </Nav.Link>

                <Nav.Link as={Link} to="/create" className="nav-link">

                  Create Recipe

                </Nav.Link>

                <Nav.Link as={Link} to="/shopping-list" className="nav-link">

                  Shopping List

                </Nav.Link>

                <Nav.Link as={Link} to="/user-profile" className="nav-link">

                  User Profile

                </Nav.Link>

              </Nav>

            </Navbar.Collapse>

          </Navbar>

        </div>

        {/* Header */}

        <header className="header">

          <h1>Welcome to Recipe Box</h1>

        </header>

        {/* Routes */}

        <Routes>

          <Route path="/recipes" element={<div>RecipeList</div>} />

          <Route path="/recipes/:id" element={<RecipeDetails />} />

          <Route path="/create" element={<RecipeCreate />} />

          <Route path="/edit/:id" element={<RecipeEdit />} />

          <Route path="/shopping-list" element={<ShoppingList />} />

          <Route path="/user-profile" element={<UserProfilePage />} />

        </Routes>

        {/* Additional Components */}

        <SearchBar onSearch={handleSearch} />

        <RecipeRating rating={4.5} />

        <RecipeReviews reviews={['Delicious recipe!', 'Highly recommended']} />

        <SocialShareButtons recipeUrl="https://example.com/recipe" />

        <IngredientConversion />

      </div>

    </Router>

  );

}

export default App;

