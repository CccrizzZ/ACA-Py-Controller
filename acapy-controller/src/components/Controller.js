import React, { Component } from 'react';
import { ListGroup, Button, Form, Navbar, Container, Nav } from 'react-bootstrap'
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
        axios.get('http://20.120.3.144:3001/control').then((res) => {
            console.log(res.data.results)
            this.setState({ 
                connections: res.data.results
            })
        })
    }


    acceptRequest = (e) => {
        e.preventDefault();

        let targetID = e.target.id
        let targetContex = this.state[targetID]
        
        if (targetID == null || "") return
        if (targetContex == null || "") return


        axios.post('20.120.3.144/control/acceptrequest', {"id": targetContex})
        .then((res) => {
            console.log(res.data.results)
            alert(res.data.results)
        })
        .catch(error => {
          console.error(error);
        })
    }



    handleInput = (e) => {
        e.preventDefault();

        let elementID = e.target.id
        let elementValue = e.target.value

        this.setState({ 
            [elementID]: elementValue
        })
    }

    render() {
        return( 
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" style={{ "margin": "auto" }}>ACA-Py Controller</Navbar.Brand>
                    </Container>
                </Navbar>
                <ListGroup style={{ "marginTop": "100px" }}>
                    <ListGroup.Item variant="success" >
                        <h4>loadConnections</h4>
                        <Button onClick={this.loadConnections} variant="success">
                            Go
                        </Button>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success" >
                        <h4>acceptRequest</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Request ID" onChange={this.handleInput}/>
                            </Form.Group>
                            <Button variant="success" type="submit" id="formBasicEmail" onClick={this.acceptRequest}>
                                Go
                            </Button>
                        </Form>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
