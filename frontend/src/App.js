// import './App.css';
// import React from "react";
// import ScoreList from './components/ScoreList';
// import Button from './components/Button';

// function App() {
//   return (
//     <div className="App container">
//       <h1>Music Notation</h1>
//       <Button/>
//       <div className='ScoresList'>
//         <h3>Scores List</h3>
//         <ScoreList/>
//       </div>

//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App container">
//       <h1>Music Notation</h1>
//       <Button/>
     
//     </div>
//   );
// }

// export default App;

import './App.css';
import React from "react";
import ScoreList from './components/ScoreList';
import Home from './components/Home';
import UpdateScore from './components/UpdateScore';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path="/scores" element={<ScoreList/>} />
        <Route path = "/update/:id" element={<UpdateScore />} />
    </Routes>
    </BrowserRouter>
  );
}


export default App; 

