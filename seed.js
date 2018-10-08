var mongoose=require('mongoose');
var Recipe=require('./models/recipe');
//var Comment=require('./models/comment');


var data=[
    {
        name:'Pasta',
        image:'https://images.media-allrecipes.com/images/56589.png',
        description:'Pasta is among the most popular Italian pastas. This easy-to-make recipe can be quickly prepared at home using some simple ingredients',
    },
    {
        name:'Grilled Chicken',
        image:'http://www.recipesaresimple.com/wp-content/uploads/2015/02/wester-chicken-chops-with-mushroom-sauce-recipe-300x300.jpg',
        description:'Grilled Chicken is a very popular recipe made with chicken, hung curd and spices like cumin powder and black pepper'
    },
    {
        name:'Healthy Chicken Finger',
        image:'https://healyeatsreal.com/wp-content/uploads/2017/03/Chicken-Finger-Recipe-Paleo-300x300-1.jpg',
        description:'Chicken Fingers is an American snack recipe, which is perfect for mid meal munching and makes for a nice party dish'
    },       
]


function seedDB(){
    Recipe.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log('removed Recipes!!');
        data.forEach(function(seed){
            Recipe.create(seed,function(err,recipe){
              if(err){
                  console.log(err)
              }else{
                  console.log('added a recipe');
                  //create a comment
                  Comment.create(
                      {
                      text:'Yummy...!!!!!!',
                      author:'Bhanu'
                  },function(err,comment){
                      if(err){
                          console.log(err);
                      }else{
                        recipe.comments.push(comment);
                        recipe.save();
                          console.log('created new comment');
                      }
                  });
              }
          });
      });          
    });
}
    

module.exports=seedDB;