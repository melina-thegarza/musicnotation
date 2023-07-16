import React from 'react';
import {Link,useParams,useSearchParams} from "react-router-dom";
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default function UpdateScore() {
    const params = useParams();
    const {id} = params;
    console.log(id)
    const score = []
    axios.get("http://127.0.0.1:8000/api/scores/4",{
        header:{'Access-Control-Allow-Origin': '*',}
    },)
    .then((res) => this.setState({score: res.data }));
    
   
    return (
      <div>
        <h1>id: {id}</h1>
       
      </div>
    );
  }


/*export default class UpdateScore extends React.Component{
   
   

    constructor(props){ 
      
        super(props);
        this.state = {
            score: [],
            

        };
    
       
    }
    


    componentDidMount(){
       
        //get the score
        this.retrieveScore();
        
    }
    
    retrieveScore = () => {
   
        axios.get("/api/scores/"+this.state.id)
       .then((res) => this.setState({score: res.data }));
        
    };



    render(){
        console.log('Props:', this.props)
  
        return(
            <div>
                <h1>Edit Score</h1>
                
                
                 
            </div>
      
        )
    }


}*/