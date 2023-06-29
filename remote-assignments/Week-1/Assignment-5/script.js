const express = require('express');
const app = express();
const port = 3000;

app.get("/data", (req, res) => {
  const num = req.query.number;

  if (!num) {
    //Lack of Parameter
    res.send("<html><body><h1>Lack of Parameter</h1></body></html>");
  }
  else if (isNaN(num)){
    //Wrong Parameter
    res.send("<html><body><h1>Wrong Parameter</h1></body></html>");
  }
  else{
    //calculate sum
    const N = parseInt(num);
    let sum = 0;

    if (N > 0) {
    // N = positive integer
    sum = ( N * ( N + 1 )) / 2 ;
    }
    res.send(`<html><body><h1>${sum}</h1></body></html>`);
  }
});

  app.listen( port, () => {
    console.log(`Server on http://localhost:${port}`);
  });
