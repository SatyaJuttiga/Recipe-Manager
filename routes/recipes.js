var express=require('express');
var router=express.Router();
var Recipe=require('../models/recipe');

router.get('/recipes',function(req,res){
    console.log(req.user);
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render('campgrounds/index',{campgrounds:allCampgrounds,currentUser: req.user});
        }
    });
});