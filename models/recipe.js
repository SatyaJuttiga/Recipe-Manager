var mongoose=require('mongoose');

var recipeSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String,
});
var Recipe=module.exports=mongoose.model('Recipe',recipeSchema);

Recipe.create({
    name:'Pepper Poppers',
    image:'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pepper-Poppers_exps8981_RCCF143496D04_16_5bC_RMS-3-1024x1024.jpg',
    description:'These creamy stuffed jalapenos have some bite. They may be the most popular treats I make! My husband is always hinting that I should make a batch. —Lisa Byington, Johnson City, New York',
});
