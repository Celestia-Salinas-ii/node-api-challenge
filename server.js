const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');

const server = express();

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(logger)
server.use("/api/projects", projectRouter)
server.use("/api/actions", actionRouter)

server.get("/", (req, res) => {
    db.get('/', (req, res) => {
        res.send("Working~")
    })

})

function logger(req, res, next) {
    const { method, originalUrl } = req;
    console.log(`${method} to ${originalUrl} at ${Date.now()}`);
  
    next();
    }
  
module.exports = server;