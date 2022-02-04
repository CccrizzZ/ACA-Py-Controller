var express = require('express');
var router = express.Router();
const axios = require('axios')

var endPoint = 'http://13.92.243.46:8080/'

router.get('/', async (req, res, next) => {
    console.log("Requested control")
    
    // request infos
    Url = endPoint + '/connections'
    Data = {}    
    Headers = {headers:{}}

    // connect to cloud virtual machine
    conns = await axios.get(Url, Data, Headers)
    console.log("Connections=", conn.data)
    res.status(200).send(conns.data)
})