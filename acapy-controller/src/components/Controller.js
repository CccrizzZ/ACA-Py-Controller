import React, { Component } from 'react';
import { ListGroup, Button, Form, Navbar, Container, Nav } from 'react-bootstrap'
import axios from 'axios';

export default class Controller extends Component {

    constructor(props) {
        super(props)

        this.state = {
            connections: undefined,
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


        axios.post('http://20.120.3.144:3001/control/acceptrequest', {"id": targetContex})
        .then((res) => {
            console.log(res.data.results)
            alert(res.data.results)
        })
        .catch(error => {
          console.error(error);
        })
    }


    createInvitaion = (e) => {
        e.preventDefault();

        axios.post('http://20.120.3.144:3001/control/createinvitation')
        .then((res) => {
            console.log(res.data)

            this.setState({
                newInvitation: res.data
            })
        })
        .catch(error => {
          console.error(error);
        })
    }

    receiveInvitation = (e) => {
        e.preventDefault();

        axios.post('http://20.120.3.144:3001/control/receiveinvitation')
        .then((res) => {
            console.log(res.data)

            this.setState({
                receivedInvitaion: res.data
            })
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
                        <div>
                            <p style={{"wordBreak": "break-all"}}>{JSON.stringify(this.state.connections == null ? undefined : this.state.connections)}</p>
                        </div>
                    </ListGroup.Item>

                    <ListGroup.Item variant="success" >
                        <h4>acceptRequest</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicAcceptRequest">
                                <Form.Control type="text" placeholder="Request ID" onChange={this.handleInput}/>
                            </Form.Group>
                            <Button variant="success" type="submit" id="formBasicAcceptRequest" onClick={this.acceptRequest}>
                                Go
                            </Button>
                        </Form>
                    </ListGroup.Item>

                    <ListGroup.Item variant="success" >
                        <h4>createInvitaion</h4>
                        <Form>
                            <Button variant="success" type="submit" id="formBasiccreateInvitaion" onClick={this.createInvitaion}>
                                Go
                            </Button>
                        </Form>
                        <div>
                            <p style={{"wordBreak": "break-all"}}>{JSON.stringify(this.state.newInvitation == null ? undefined : this.state.newInvitation)}</p>
                        </div>
                    </ListGroup.Item>

                    <ListGroup.Item variant="success" >
                        <h4>receiveInvitaion</h4>
                        <Form>
                            <Button variant="success" type="submit" id="formBasiccreceiveInvitaion" onClick={this.receiveInvitation}>
                                Go
                            </Button>
                        </Form>
                        <div>
                            <p style={{"wordBreak": "break-all"}}>{JSON.stringify(this.state.receivedInvitaion == null ? undefined : this.state.receivedInvitaion)}</p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
