import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
    </div>
  );
}

export default App;
