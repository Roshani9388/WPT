import express from 'express';

let app = express()

app.get('/', (request, response) => {
    return response.send('HI From roshanis SERVER ');
  });

  
app.listen(2000, () => {
    console.log('App is listening on port 2000');
  });