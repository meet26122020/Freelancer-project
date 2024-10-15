const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Active', 'Completed', 'Pending'],
        default: 'Pending',
        required: true 
    },
    startDate: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;

