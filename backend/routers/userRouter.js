const express = require('express');
const Model = require('../models/usermodel');

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

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
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

router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            if (result) res.status(200).json(result);
            else res.status(404).json({ message: 'not found' })
        }).catch((err) => {
            console.log(err);
            res.status(err);
        });
})

module.exports = router;