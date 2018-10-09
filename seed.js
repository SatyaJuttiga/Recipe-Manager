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
    {
        name:'Fried Rice',
        image:'https://desieat.com/__recipes-images__/egg-fried-rice.jpg',
        description:'Fried rice is a dish of cooked rice that has been stir-fried in a wok  and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat'
    }, 
    {
        name:'Chicken Tikka Masala',
        image:'https://40aprons.com/wp-content/uploads/2017/02/paleo-restaurant-style-chicken-tikka-masala-7-300x300.jpg',
        description:'Chicken tikka prepared in tomato cream sauce.Pieces of chicken tikka cooked in a creamy sauce with fresh tomato and exotic spices'
    },      
    {
        name:'Veg Cutlet',
        image:'http://www.erumelynews.in/wp-content/uploads/2016/12/download.jpg',
        description:'Vegetable cutlet is a crisp and absolutely delicious easy Indian  snack recipe of veggie mixes, paneer and spices'
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