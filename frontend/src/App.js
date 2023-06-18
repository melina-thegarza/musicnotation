import './App.css';
import React from "react";
import ScoreList from './components/ScoreList';

function App() {
  return (
    <div className="App">
      <h1>MusicNotation</h1>
      <button>New Score</button>
      <div className='ScoresList'>
        <h2>ScoresList</h2>
        <ScoreList/>
      </div>
    </div>
  );
}

export default App;
