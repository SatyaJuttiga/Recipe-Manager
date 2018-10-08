var express=require('express');
var router=express.Router();
var Recipe=require('../models/recipe');
var Comment=require('../models/comment');


router.get('/recipes/:id/comments/new',isLoggedin,function(req,res){
    Recipe.findById(req.params.id,function(err,recipe){
        if(err){
            console.log(err);
        }else{
            res.render('comments/new',{recipe:recipe});
        }
    });
});


function isLoggedin(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports=router;
