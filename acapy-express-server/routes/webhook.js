var express = require('express')
var router = express.Router()



router.post('/connections', function(req, res, next) {
  console.log(req.body)

  
  state = req.body?.rfc23_state


  switch(state) {
    case "invitation-sent":
      console.log("invitation-sent")
      console.log("Connection ID=", req.body?.connection_id)
      break
    case "request-received":
      console.log("request-received")
      console.log("Connection ID=", req.body?.connection_id)
      console.log("Send Accept-Requst to invitee")
      break
    case "response-sent":
      console.log("response-sent");
      console.log("Connection ID=", req.body?.connection_id)
      break
    case "completed":
      console.log("connection completed")
      console.log("Connection ID=", req.body?.connection_id)
      break
    case "undefined":
      console.log("undefined state")
      console.log("Connection ID=", req.body?.connection_id)

  }
  res.status(200).send("OK")
})

module.exports = router
