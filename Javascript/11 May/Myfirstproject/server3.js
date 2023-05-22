import express from 'express';
import productrouter from "./productrouter.js";
let app = express()
app.use("/",productrouter)
app.use("/product",productrouter)

app.listen(5000, () => {
    console.log('App is listening on port 5000');
  });