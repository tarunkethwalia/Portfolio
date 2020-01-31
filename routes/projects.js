var projectController = require('../controllers/projectController');
var Router = require('express').Router();
const ProjectSchema = require('../models/projectModel');
const multer = require('multer');

//Used Multer to store files
const storage = multer.diskStorage({
    destination: (req, file, call) => {
        call(null, './uploads/');
    },
    filename: (req, file, call) => {
        call(null, file.originalname);
    }
});
const upload = multer({storage: storage});

//For Getting Projects
Router.get('/show', projectController.Show);

//For Creating Project
Router.post('/create', upload.fields([{name: 'Url', maxCount: 1}]) , (req,res) => {
    const Project = new ProjectSchema({
        Name : req.body.Name,
        Url : req.files['Url'][0].path
    });

    Project.save().then(result=>{
        res.status(200).json(result);
    }).catch(e=>{
        res.status(401).json({Error : e});
    })
});

module.exports = Router;
