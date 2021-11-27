const express = require('express');

const app = express();
const port = 4000;

const operationRoutes = require('./routes/operation');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Personal Budget');
});

app.use('/operation', operationRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(port, () => {
  console.log(`Personal Budget app listening at http://localhost:${port}`);
});
