const express = require('express');
const helmet = require('helmet');

const zooRouter = require('../zoo/zoo-router.js');
const bearsRouter = require('../zoo/bears-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/zoo', zooRouter);
server.use('/api/bears', bearsRouter);

module.exports = server;
