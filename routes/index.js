const express = require('express');
const router = express.Router();

router.get('/getData',(req,res)=>{
    res.json("Hello");
})

module.exports = router;