import express from 'express';

let app = express()

app.get('/', (request, response) => {
    return response.send('HI From SERVER ');
  });

  
  
app.listen(5000, () => {
    console.log('App is listening on port 5000');
  });