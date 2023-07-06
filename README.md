# Recipe Box Single Page Application

The Recipe Box Single Page Application is a web application built with React and json-server that allows users to manage and view recipes. It provides features such as creating new recipes, editing existing recipes, and displaying a list of all recipes.

## Features

- Display a list of all recipes
- View details of a specific recipe
- Create a new recipe
- Edit an existing recipe
- Delete a recipe

## Technologies Used

- React: JavaScript library for building user interfaces
- json-server: Simple RESTful API using a JSON file as a database
- React Router: Library for handling client-side routing in React
- Bootstrap and React Bootstrap: CSS framework for styling the application

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/recipe-box.git
   ```

2. Install the dependencies:

   cd recipe-box
   npm install

3. Start the frontend development server:

   npm start
   
4. Open another terminal window, navigate to the backend folder, and start the json-server:

   cd backend
   json-server --watch db.json --port 3001

The application should now be running on http://localhost:3000.

### Usage

Navigate to http://localhost:3000 in your web browser to access the Recipe Box application. Use the navigation bar to switch between different views:

- **Recipes**: Displays a list of all recipes.
- **New Recipe**: Allows you to create a new recipe by providing a title and description.
- **Recipe Details**: Shows the details of a specific recipe, including its title and description.
- **Edit Recipe**: Enables you to edit the title and description of an existing recipe.

### Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.

Feel free to customize the content based on your specific project details. Include any additional sections or instructions that are relevant to your application.
