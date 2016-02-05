var mongoose=require('mongoose');

var OrderSchema=new mongoose.Schema({
	name:String,
	street:String,
	city:String,
	state:String,
	zip:String,
	country:String,
	giftwrap:{type:Boolean,default:false},
	products:[],
	createTime:{type:Date,default:Date.now}
});

var Order=mongoose.model('Order',OrderSchema);