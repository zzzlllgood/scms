var mongoose=require('mongoose');
var config=require('./config');

module.exports=function(){
	var db=mongoose.connect(config.mongodb,function(){

	});

	require('../app/models/news.server.model');
	require('../app/models/products.server.model');
	require('../app/models/order.server.model');
	require('../app/models/user.server.model');

	return db;

};
