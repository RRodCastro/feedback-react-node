const express = require('express')
const app = express()

// Node environment on deploy:
// engine property with specific version of node

// Dynamic port binding: Get port from runtime configuration 
const PORT = process.env.PORT || 5000

// app: express App to register route
// get/post: requests with this methids
// path: requests accesing path
// req: incoming request
// res: outgoing response
// () =>: callback
app.get('/', (req, res) => {
    console.log(req)
  res.send({hello : 'world'})
})

app.listen(PORT, () => { 
  console.log(`Example app listening on port ${PORT}`)
})