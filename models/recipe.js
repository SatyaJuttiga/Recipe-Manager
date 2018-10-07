var mongoose=require('mongoose');

var recipeSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String,
});
var Recipe=module.exports=mongoose.model('Recipe',recipeSchema);
/*
Recipe.create({
    name:'Pasta',
    image:'https://images.media-allrecipes.com/images/56589.png',
    description:'Pasta is among the most popular Italian pastas. This easy-to-make recipe can be quickly prepared at home using some simple ingredients',
});
*/
