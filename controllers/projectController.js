const Response = require('../utils/http-utils');
const mongoose = require('mongoose');
const ProjectSchema = require('../models/projectModel');

exports.Show = (req,res) => {
    ProjectSchema.find().then(result=>{
        res.status(200).json(result);
    }).catch(e=>{
        res.status(401).json({Error: e});
    })
};
