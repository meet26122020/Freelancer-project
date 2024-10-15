const Project = require('../models/projectModel');
const csv = require('csv-parser');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Create a new project
const createProject = async (req, res) => {
    const { name, description, status } = req.body;
    const newProject = new Project({ name, description, status });
    await newProject.save();
    res.status(201).json(newProject);
};

// Read all projects
const getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};

// Update a project
const updateProject = async (req, res) => {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedProject);
};

// Delete a project
const deleteProject = async (req, res) => {
    const { id } = req.params;
    const deleteProject = await Project.findByIdAndDelete(id);
    res.status(204).json({message:"Project deleted successfully"});
};

// Export projects to CSV
const exportProjectsToCSV = async (req, res) => {
    const projects = await Project.find();
    const csvString = projects.map(project => `${project.name},${project.description},${project.status}`).join('\n');
    res.header('Content-Type', 'text/csv');
    res.attachment('projects.csv');
    res.send(csvString);
};

// Import projects from CSV
const importProjectsFromCSV = (req, res) => {
    const results = [];
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            await Project.insertMany(results);
            res.send('Projects imported successfully');
        });
};

// Middleware for CSV upload
const uploadCSV = upload.single('file');

module.exports = {
    createProject,
    getProjects,
    updateProject,
    deleteProject,
    exportProjectsToCSV,
    importProjectsFromCSV,
    uploadCSV,
};
