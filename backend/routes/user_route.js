const express = require('express');
const routes = express.Router();
const user = require('../controller/user_controller');
const resume = require('../controller/user_controller');

routes.post('/',user.insertData);
routes.get('/',resume.Resume);

module.exports = routes;