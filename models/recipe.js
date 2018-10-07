var mongoose=require('mongoose');

var recipeSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String,
});
var Recipe=module.exports=mongoose.model('Recipe',recipeSchema);
