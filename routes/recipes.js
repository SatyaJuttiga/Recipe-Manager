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

module.exports=router;
