var express = require('express');
const axios = require('axios')


// the cloud virtual machine address
var endPoint = 'http://20.120.3.144:8080/'

var router = express.Router();
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

module.exports = router