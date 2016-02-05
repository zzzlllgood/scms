var mongoose=require('mongoose');

var UserSchema=new mongoose.Schema({
	name:String,
	password:String,
	createTime:{type:Date,default:Date.now}
});

var User=mongoose.model('User',UserSchema);