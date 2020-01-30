import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Home></Home>
    </div>
  );
}

export default App;
