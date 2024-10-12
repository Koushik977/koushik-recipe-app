import React from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  { id: 1, name: 'Spaghetti Carbonara', ingredients: 'Pasta, Eggs, Cheese, Bacon', instructions: 'Boil pasta, fry bacon, mix everything' },
  { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk', instructions: 'Cook chicken, add spices, simmer' }
];

const RecipeList = () => {
  return (
    <div className="recipe-list">
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
