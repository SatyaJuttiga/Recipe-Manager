var express=require('express');
var bodyparser=require('body-parser');
var app=express();

var methodOverirde=require('method-override');
var mongoose=require('mongoose');
var expressSession=require('express-session');
//var flash=require('connect-flash');
var passport=require('passport');
var LocalStrategy=require('passport-local');
var User=require('./models/user');



var indexRoutes=require('./routes/index');


mongoose.connect('mongodb://localhost/recipes');
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverirde('_method'));
//app.use(flash());



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


app.use(indexRoutes);



app.listen(3005,function(req,res){
    console.log('server started on 3005');
});