import './App.css';
import React from "react";
import ScoreList from './components/ScoreList';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Music Notation</h1>
      <Button/>
      <div className='ScoresList'>
        <h3>Scores List</h3>
        <ScoreList/>
      </div>
    </div>
  );
}

export default App;
