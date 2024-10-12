import React from 'react';
import RecipeList from '../components/RecipeList';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Recipe App</h1>
      <RecipeList />
    </div>
  );
};

export default Home;
