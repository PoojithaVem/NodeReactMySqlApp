const express = require('express');
const router = express.Router();

const{Posts} = require('../models');


router.get('/', async(req, res) =>{
    //res.json("Poojitha");
    const lisOfPosts= await Posts.findAll();
    console.log(lisOfPosts.length);
    res.json(lisOfPosts);
});

router.post("/", async(req, res) =>{
   const post = req.body;
   await Posts.create(post);
   res.json(post);

});


module.exports = router;