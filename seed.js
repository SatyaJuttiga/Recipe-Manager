var mongoose=require('mongoose');
var Recipe=require('./models/recipe');
var Comment=require('./models/comment');


var data=[
    {
        name:'Pasta',
        image:'https://images.media-allrecipes.com/images/56589.png',
        description:'Pasta is among the most popular Italian pastas. This easy-to-make recipe can be quickly prepared at home using some simple ingredients',
    },
    {
        name:'Grilled Chicken with Tomato-Avocado Salad',
        image:'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/grilled-chicken-tomato-avocado-salad-crop-ck.jpg?itok=POurfhYN',
        description:'Most people say that healthy food is not tasty but Chicken salad serves both the purposes. It is extremely tasty and healthy as well'
    },
    {
        name:'Hashanah Chicken',
        image:'http://s345780157.onlinehome.us/wp-content/uploads/2011/03/Rosh-Hashanah-chicken-with-apples.jpg',
        description:'A popular Asian starter, satay is a variation of the Indian kebab and is amazingly delicious and best enjoyed with a peanut sauce'
    },
    {
        name:'Stir-fried Exotic Oriental Vegetables',
        image:'https://recipes.timesofindia.com/photo/65532077.cms?imgsize=71616',
        description:'Stir-fried Exotic Oriental Vegetables is an easy and healthy recipe for your day-to-day nutrition needs. Stir-fry can be your favourite pick when it comes to quick yet healthy dinners'
    },
    

        
]


function seedDB(){
    //remove all campgrounds
    Recipe.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log('removed Recipes!!');
            //add few campgrounds
           data.forEach(function(seed){
            Recipe.create(seed,function(err,recipe){
                if(err){
                    console.log(err)
                }else{
                    console.log('added a recipe');
                    //create a comment
                    Comment.create(
                        {
                        text:'Yummy..!!!!!',
                        author:'Mera'
                    },function(err,comment){
                        if(err){
                            console.log(err);
                        }else{
                            Recipe.comments.push(comment);
                            Recipe.save();
                            console.log('created new comment');
                        }
                    });
                }
            });
        });
    });
}
    

module.exports=seedDB;