var express=require('express');
    bodyparser=require('body-parser'),
    methodOverirde=require('method-override'),
    mongoose=require('mongoose'),
    expressSession=require('express-session'),
    flash=require('connect-flash'),
    passport=require('passport'),
    LocalStrategy=require('passport-local'),
    User=require('./models/user'),
    Recipe=require('./models/recipe'),
    Comment=require('./models/comment'),
    seedDB=require('./seed');
var app=express();

seedDB();


var indexRoutes=require('./routes/index');
var recipeRoutes=require('./routes/recipes');
var commentRoutes=require('./routes/comments');


mongoose.connect('mongodb://localhost/recipemanager');


app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverirde('_method'));
app.use(flash());



app.use(require('express-session')({
    secret:'bhavna',
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser=req.User;
    next();
});



app.use(indexRoutes);
app.use(recipeRoutes);
app.use(commentRoutes);


app.listen(3005,function(req,res){
    console.log('server started on 3005');
});

