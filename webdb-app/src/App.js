import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ProjectBoard from './components/ProjectBoard'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route to='/projects' component={ProjectBoard} />
    </div>
    </Router>
  );
}

export default App;
