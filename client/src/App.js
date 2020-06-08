import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Feed from './components/Feed.js'

function App() {
  return (
    <div className="App">
      <h1>Kreyol Recipe</h1>
      <Router>
        <Switch>
          <Route exact path = '/' component = {Feed}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
