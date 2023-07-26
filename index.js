/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up of down time of user defined links
 * Author: Sakib Sarder
 * Date: 07/26/2023
 */

// Dependencies
const http = require("http");

// app object - module scaffolding
const app = {};

// Configuration
app.config = {
  port: 5000,
};

// Create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// Handle Request and Response
app.handleReqRes = (req, res) => {
  // response handle
  res.end("Hello programmer");
};

app.createServer();
