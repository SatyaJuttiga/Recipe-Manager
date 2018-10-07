var express=require('express');
var router=express.Router();
var Recipe=require('../models/recipe');

router.get('/recipes',function(req,res){
    console.log(req.user);
    Recipe.find({},function(err,allrecipes){
        if(err){
            console.log(err);
        }else{
            res.render('recipes/index',{allrecipes:allrecipes,currentUser: req.user});
        }
    });
});

router.get('/recipes/new',isLoggedin,function(req,res){
    res.render('recipes/new');
});

module.exports=router;
