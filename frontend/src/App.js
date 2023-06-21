import './App.css';
import React from "react";
import ScoreList from './components/ScoreList';

function App() {
  return (
    <div className="App">
      <h1>Music Notation</h1>
      <button class="btn btn-dark" onClick={() => console.log("Clicked")}>New Score</button>
      <div className='ScoresList'>
        <h3>Scores List</h3>
        <ScoreList/>
      </div>
    </div>
  );
}

export default App;
