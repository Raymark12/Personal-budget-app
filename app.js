const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Personal Budget')
})

app.listen(port, () => {
  console.log(`Personal Budget app listening at http://localhost:${port}`)
})
