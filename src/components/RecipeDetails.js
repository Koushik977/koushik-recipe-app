import React from 'react';
import { useParams, Link } from 'react-router-dom';

const recipes = [
  { id: 1, name: 'Spaghetti Carbonara', ingredients: 'Pasta, Eggs, Cheese, Bacon', instructions: 'Boil pasta, fry bacon, mix everything' },
  { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk', instructions: 'Cook chicken, add spices, simmer' }
];

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default RecipeDetails;
