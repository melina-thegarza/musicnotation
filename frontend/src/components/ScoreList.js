import React from 'react';
import axios from 'axios';

export default class ScoreList extends React.Component{
    state = {
        scores: []
    }


    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/scores/').then(res=>{
            console.log(res.data)
            const scores = res.data;
            this.setState({scores});
        })
    }

    render(){
        return(
            <ul>
        {
          this.state.scores
            .map(score =>
                <li key={score.id}>
                    <strong>Title:</strong> {score.title} <strong>Composer:</strong> {score.composer}
                </li>
            )
        }
            </ul>
        )
    }


}