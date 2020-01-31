const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
    Name : String,
    Url: String
});

const ProjectSchema = mongoose.model('Project', Project);
module.exports = ProjectSchema;
