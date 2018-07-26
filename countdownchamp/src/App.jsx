import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018',
            newDeadLine: ''
        }
    }

    changeDeadline() {
        this.setState({ deadline: this.state.newDeadLine });
        this.setState({newDeadLine: ""});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl className="Deadline-input" placeholder='new date' onChange={event => this.setState({ newDeadLine: event.target.value })} value={this.state.newDeadLine}/>
                    <Button onClick={() => this.changeDeadline()} >Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;