var express=require('express');
var router=express.Router();
var Recipe=require('../models/recipe');
var Comment=require('../models/comment');

/*
router.get('/recipes/:id/comments/new',isLoggedin,function(req,res){
    Recipe.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
        }else{
            res.render('comments/new',{campground:campground});
        }
    });
});
*/
module.exports=router;