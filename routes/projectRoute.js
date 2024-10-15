const express = require('express');
const route = express();
const controller = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

route.use(authMiddleware);

route.post('/', controller.createProject);
route.get('/', controller.getProjects);
route.put('/:id', controller.updateProject);
route.delete('/:id', controller.deleteProject);
route.get('/export', controller.exportProjectsToCSV);
route.post('/import', controller.uploadCSV, controller.importProjectsFromCSV);

module.exports = route;
