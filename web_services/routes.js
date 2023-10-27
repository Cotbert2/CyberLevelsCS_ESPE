const express = require('express');
const router = express.Router();
const funs = require('./funs');

//Api consuming

router.use((req,res,next) => {
    console.log(req.url, '@' , Date.now());
    next();
})

router.route('/api/getRandomNum')
    .get((req,res) => {
        res.send(funs.getRandomNum());
})



module.exports = router