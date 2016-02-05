var mongoose=require('mongoose');
var User=mongoose.model('User');

module.exports={
	create:function(req,res,next){
		var user=new User(req.body);
		user.save(function(err){

			if(err)return next(err);
			return res.json(user);
		});
	},
	list:function(req,res,next){
		var pagesize=parseInt(req.query.pagesize,10)||100;
		var pagestart=parseInt(req.query.pagestart)||1;


		User
		.find()
		.skip((pagestart-1)*pagesize)
		.limit(pagesize)
		.exec(function(err,docs){
			if(err)return next(err);
			return res.json(docs);
		});
	},
	getById:function(req,res,next,id){
		if(!id) return next(new Error('User not found'));

		User
		.findOne({_id:id})
		.exec(function(err,doc){
			if(err) return next(err);
			if(!doc) return next(new Error('User not found'));

			req.user=doc;
			return next();
		});
	},
	get:function(req,res,next){
		return res.json(req.user);
	}
};