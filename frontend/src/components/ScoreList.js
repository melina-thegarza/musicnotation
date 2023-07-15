import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

export default class ScoreList extends Component{
    state = {
        scores: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/scores/').then(res=>{
            console.log(res.data)
            const scores = res.data;
            this.setState({scores});
        })
    }

    render() {
        return (

            <div className="container">
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
                                    <Button color="danger">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </Table>
            </div>

        )
    }

}