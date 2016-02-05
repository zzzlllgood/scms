var mongoose=require('mongoose');

var ProductsSchema=new mongoose.Schema({
	name:String,
	description:String,
	category:String,
	price:Number,
	createTime:{type:Date,default:Date.now}
});

var Products=mongoose.model('Products',ProductsSchema);