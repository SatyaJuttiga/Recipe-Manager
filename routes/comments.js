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

router.post('/recipes/:id/comments',isLoggedin,function(req,res){
    Recipe.findById(req.params.id,function(err,recipe){
        if(err){
            console.log(err);
            res.redirect('/recipes');
        }else{
            Comment.create(req.body.comment,function(err,comment){
                if(err){
                    console.log(err);
                    res.redirect('/recipes');
                }else{
                    Comment.create(req.body.comment,function(err,comment){
                        if(err){
                            console.log(err);
                        }else{
                            recipe.comments.push(comment);
                            recipe.save();
                            res.redirect('/recipes/' + recipe._id);
                        }
                    })
                }
            });
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
