const express = require('express');
const Model = require('../models/extensionmodel');
const fs = require('fs');
const zipDirectory = require('./utils');

const router = express.Router();

router.post('/add', (req, res) => {
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/generate', (req, res) => {
    const { theme, name } = req.body;
    const themeFilePath = './sampleExtension/themes/themefile.json';
    fs.writeFile(themeFilePath, JSON.stringify(theme), (err) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        } else {
            zipDirectory('./sampleExtension', `./static/zipfiles/${name}.zip`)
                .then(() => {
                    console.log('Folder successfully zipped!');
                    res.status(200).json({ message: 'Folder successfully zipped!', downloadPath: `http://localhost:5000/zipfiles/${name}.zip` });
                })
                .catch(console.error);
        }
    });

});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

//: denotes url parameter

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
})

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(400).json({ message: 'User not found' });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;