const express = require('express');
const router = express.Router();

router.get('/getCust',(req,res)=>{
    res.json("Hello");
})

module.exports = router;