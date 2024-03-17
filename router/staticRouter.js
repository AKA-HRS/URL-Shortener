const express = require("express");
const URL = require('../models/url');
const User = require("../models/user");
const router = express.Router();
const {ristrictTo} = require('../middleware/userauth')

router.get('/',ristrictTo(['NORMAL']),async(req,res)=>{
    const allurls= await URL.find({createdBy:req.user._id})
    return res.render('home',{
        urls:allurls,
    });
});

router.get('/signup',(req,res)=>{
    return res.render('signup');
})

router.get('/login',(req,res)=>{
    return res.render('login');
})

module.exports = router;
