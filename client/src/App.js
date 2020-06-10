import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Feed from './components/Feed.js'
import Recipe from './components/Recipe.js'


function App() {
  return (
    <div className="App">
      <h1>Kreyol Recipe</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route exact path="/recipe/:recipeId/" component={Recipe} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
