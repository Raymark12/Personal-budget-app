const express = require('express');
const app = express();
const port = 3000;

const operationRoutes = require('./routes/operation');

app.get('/', (req, res) => {
  res.send('Personal Budget');
});

app.use('/operation', operationRoutes);

app.listen(port, () => {
  console.log(`Personal Budget app listening at http://localhost:${port}`);
});
