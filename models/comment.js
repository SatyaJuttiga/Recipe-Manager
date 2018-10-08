var mongoose=require('mongoose');

var commentSchema=mongoose.Schema({
    text:String,
    author:String
});

var Comment=module.exports=mongoose.model('Comment',commentSchema);
