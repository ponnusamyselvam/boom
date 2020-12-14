import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />
      <HomePage />
    </Router>
  </React.Fragment>

    
  );
}

export default App;
