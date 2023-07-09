import axios from 'axios';
import React, { Component } from 'react';
import { flushSync } from 'react-dom';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Vary": "Accept",
    }
};

//get user input from the New Score pop-up form
class PostRequest extends Component {

    state = {
        score: null,
        error: null
    };

    componentDidMount(){
        const {steps} = this.props;
        const { title, composer, instrument, timesignature, musickey } = steps;
        const newScore = {
            title: title,
            composer: composer,
            instrument: instrument,
            time_signature: timesignature,
            musickey: musickey,
        };
        //send the HTTP POST, update the database
        axios.post('/api/scores/',newScore,axiosConfig)
        .then((res) => flushSync(() =>{
            this.setState({score: res.data}, this.createReceipt());
        }))

        .catch((error) => {
            console.error('Error creating score:', error);
            this.setState({ error });
        });
    }

    createReceipt=()=>{
        setTimeout(() => {
            console.log(this.state.score);
        }, 0);
    }
    
    render() {
        const { score, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
      
        if (!score) {
            return <div>Creating score...</div>;
        }
        return (
            <div>
                Thank you for submitting a request. Below is your receipt
                <ul className="receipt">
                    <li>Score ID: {score.id}</li>
                    <li>Title: {score.title}</li>
                    <li>Composer: {score.composer}</li>
                    <li>Instrument: {score.instrument}</li>
                    <li>Time Signature: {score.time_signature}</li>
                    <li>Key: {score.musickey}</li>
                </ul>
            </div>
        )
    }
    
};

export default PostRequest;