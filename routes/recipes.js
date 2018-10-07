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

router.post('/recipes',isLoggedin,function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var desc=req.body.description;
    var newRecipe={name:name,image:image,description:desc}
    Recipe.create(newRecipe,function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect('/recipes');
        }
    });});

router.get('/recipes/new',isLoggedin,function(req,res){
    res.render('recipes/new');
});


router.get('/recipes/:id',function(req,res){
    Recipe.findById(req.params.id).populate('comments').exec(function(err,foundRecipe){
        if(err){
            console.log(err);
        }else{
            //console.log(foundRecipe);
            res.render('recipes/show',{recipe: foundRecipe});
        }
    });
});


router.get('/recipes/:id/edit',function(req,res){
    Recipe.findById(req.params.id,function(err,foundRecipe){
        if(err){
            res.redirect('/recipes');
        } else {
            res.render('recipes/edit',{recipe:foundRecipe});
        }
    });        
});

router.put('/recipes/:id',function(req,res){
    Recipe.findByIdAndUpdate(req.params.id,req.body.recipe,function(err,updatedRecipe){
        if(err){
            res.redirect('/recipes');
        } else {
            res.redirect('/recipes/' + req.params.id);
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
