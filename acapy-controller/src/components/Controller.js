import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap'
import axios from 'axios';


export default class Controller extends Component {

    constructor(props) {
        super(props)

        this.state = {
            connections: [],
        }
    }


    loadConnections = () => {
        console.log("greenclick")

        // get all connection data
        axios.get('127.0.0.1:3001/control/').then((res) => {
            console.log(res.data.results)
            this.setState({ 
                connections: res.data.results
            })
        })
    }


    acceptRequest(id){
        axios.post('127.0.0.1:3001/control/acceptrequest', {"id": id})
        .then((res) => {
            console.log(res.data.results)
            alert(res.data.results)
        })
        .catch(error => {
          console.error(error);
        })
    }


    render() {
        return( 
            <div>
                <ListGroup>
                    <ListGroup.Item variant="success" >
                        <Button onClick={this.loadConnections} variant="success">loadConnections</Button>
                        <p>{this.state.connect==null ? null: this.state.connection}</p>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
