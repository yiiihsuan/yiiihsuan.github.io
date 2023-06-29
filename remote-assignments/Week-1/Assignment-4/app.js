const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
  res.send("<html><body><h1>Hello, My Server!</h1></body></html>");
});

app.listen(port, ()=> {
  console.log(`Server on http://localhost:${port}/`);
});