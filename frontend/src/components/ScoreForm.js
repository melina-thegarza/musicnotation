import React, { Component } from 'react';
import DropdownTemplate from './DropdownTemplate';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class ScoreForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          composer: '',
          instrument: '',
          timeSignature: '',
          musicKey: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit(event) {
        event.preventDefault();
        const { title, composer, instrument, timeSignature, musicKey } = this.state;
        const scoreData = {
          title,
          composer,
          instrument,
          time_signature: timeSignature,
          musickey: musicKey,
        }
        
        axios
        .post('http://127.0.0.1:8000/api/scores/', scoreData)
        .then((response) => {
            // Handle success
            console.log('Score created:', response.data);
            alert("Score successfully created.");
            return response;
        })
        .catch((error) => {
            // Handle error
            console.error('Error creating score:', error);
            alert("Error creating score.");
            return error;
        });
    };
        

    render() {
        const { title, composer, instrument, timeSignature, musicKey } = this.state;

        return (
            <>

                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input id="title" name="title" value={title} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="composer">Composer</Label>
                        <Input id="composer" name="composer" value={composer} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <div className="row">
                        <FormGroup>
                            <DropdownTemplate
                                id="instrument"
                                title = "Instrument"
                                items = {["Piano", "Violin", "Flute", "Cello"]}
                                name="instrument"
                                value = {instrument}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <DropdownTemplate
                                id="timesignature"
                                title = "Time Signature"
                                items = {["4/4", "3/4", "2/4", "6/8"]}
                                name="timeSignature"
                                value = {timeSignature}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <DropdownTemplate
                                id="musickey"
                                title = "Key"
                                items = {["CM / Am", "GM / Em", "DM / Bm", "AM / F#m", 
                                        "EM / C#m", "BM / G#m", "FM / Dm", "BbM / Gm",
                                        "EbM / Cm", "AbM / Fm", "DbM / Bbm", "GbM / Ebm",
                                        "CbM / Abm"]}
                                name="musicKey"
                                value = {musicKey}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </div>
                    <Button color="primary">Create</Button>
                </Form>

            </>

        );
    }
}

export default ScoreForm;