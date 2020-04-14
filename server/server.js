const next = require('next');
const express = require('express');

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
   .then(() => {
       const server = express();

       server.get('*', (req, res) => {
            return handle(req, res);
       });

       server.listen(port, err => {
           if (err) {
               throw err;
           }else{
               console.log(`Server started at ${port}`);
           }
       })
   });