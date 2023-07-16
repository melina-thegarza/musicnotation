import React from 'react';
import {Link} from "react-router-dom";
import Button from './Button';

export default class Home extends React.Component{
    


    render(){
        return(
            <div className="App">
            <h1>Music Notation</h1>
            <Button/>
            <div className='ScoresList'>
            <Link to="/scores"> <button  class="btn btn-dark">View Scores</button></Link>
             

            </div>
          </div>
      
        )
    }


}