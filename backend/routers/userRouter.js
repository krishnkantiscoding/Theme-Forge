const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add ppost response');

});

router.get ('/getall', (req,res) => {
    res.send('add post response');
});

module.exports = router;