var express = require('express');
const axios = require('axios')
var router = express.Router(); 



var EndPoint = 'http://20.120.3.144:8080'

router.get('/', async (req, res, next) => {
    console.log("Requested control")
    
    // request infos
    Url = EndPoint + '/connections'
    Data = {}
    Headers = {headers:{}}

    // connect to cloud virtual machine
    conns = await axios.get(Url, Data, Headers)
    console.log("Connections=", conns.data)
    res.status(200).send(conns.data)
})

router.post('/acceptrequest', async (req, res, next) => {
    console.log("Accepted Request")
    
    // request infos
    Url = EndPoint
    + '/connections/' 
    + req.body.connection_id
    +'/accept-request?my_endpoint=' 
    + encodeURI(EndPoint)

    Data = {}
    Headers = {headers:{}}

    // connect to cloud virtual machine
    conns = await axios.post(Url, Data, Headers)
    console.log("Status=", conns.data)
    res.status(200).send(conns.data)
})

router.post('/createinvitation', async (req, res, next) => {
    console.log("Create Invitation")
    
    // request infos
    Url = EndPoint + '/connections/create-invitation'
    Data = {}
    Headers = {headers:{}}

    // connect to cloud virtual machine
    conns = await axios.post(Url, Data, Headers)
    console.log("New Invitation=", conns.data)
    res.status(200).send(conns.data)
})

router.post('/receiveinvitation', async (req, res, next) => {
    console.log("Create Invitation")
    
    // request infos
    Url = EndPoint + '/connections/receive-invitation'
    Data = {}
    Headers = {headers:{}}

    // connect to cloud virtual machine
    conns = await axios.post(Url, Data, Headers)
    console.log("Invitation=", conns.data)
    res.status(200).send(conns.data)
})

module.exports = router