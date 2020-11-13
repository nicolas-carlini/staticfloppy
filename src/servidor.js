const express = require("express");
const server = express();
server.use("/", express.static(__dirname + "/arquivosDoSite"));
server.listen(80);
