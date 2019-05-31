const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Prints all requests to the server
app.use((req, res, next) => {
  console.log(new Date(), req.method, req.path);
  next();
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${ PORT }!`);
});
