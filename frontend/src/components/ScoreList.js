import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';


import {Link} from "react-router-dom";

export default class ScoreList extends Component{
    state = {
        scores: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/scores/').then(res=>{
            const scores = res.data;
            this.setState({scores});
        })
    }
    handleDelete = (id) => {
        axios.delete('http://localhost:8000/api/scores/'+id+'/')
        .then((res) => this.refreshRecords());
    }
    refreshRecords = () => {
        axios.get("http://localhost:8000/api/scores/")
        .then((res) => this.setState({scores: res.data }));
        
    };

    render() {
        return (
            
            <div className="container">
                 <Link to="/"> <button  class="btn btn-dark">Home</button></Link>
                <h1>Score List</h1>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Score ID</th>
                            <th>Title</th>
                            <th>Composer</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {this.state.scores.map(score =>
                        <tbody key={score.id}>
                            <tr>
                                <th scope="row">{score.id}</th>
                                <td>{score.title}</td>
                                <td>{score.composer}</td>
                                <td>
                                    <Button>Edit</Button>
                                    {' '}
                                    <Button color="danger" onClick={() => this.handleDelete(score.id)}>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </Table>
            </div>

        )
    }

}
// import React from 'react';
// import axios from 'axios';
// import {Link} from "react-router-dom";

// export default class ScoreList extends React.Component{
//     state = {
//         scores: []
//     }


//     componentDidMount(){
//         axios.get('http://127.0.0.1:8000/api/scores/').then(res=>{
//             console.log(res.data)
//             const scores = res.data;
//             this.setState({scores});
//         })
//     }

//     render(){
//         return(
//         <div>
//             <Link to="/"> <button  class="btn btn-dark">Home</button></Link>
//             <h1>ScoresList</h1>
//             <ul>
//         {
//           this.state.scores
//             .map(score =>
//               <li key={score.id}>  title: {score.title} composer: {score.composer}</li>
//             )
//         }
//             </ul>
//         </div>
//         )
//     }


// }