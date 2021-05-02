

const express = require("express");
const app = express();
const path = require('path');

const publicPath     = express.static(path.join(__dirname, 'public'), { redirect : false });

const indexPath  = path.join(__dirname, 'public/index.html');
app.use(publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) });
app.get('*', function (_, res) { res.sendFile(indexPath) });

// use the express-static middleware
//app.use(express.static("public"))
// define the first route
/*
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err);
      }
    })
  });
*/
// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

    