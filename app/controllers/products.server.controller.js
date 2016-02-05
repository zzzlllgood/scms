var mongoose=require('mongoose');
var Products=mongoose.model('Products');

module.exports={
	create:function(req,res,next){
		var products=new Products(req.body);
		products.save(function(err){

			if(err)return next(err);
			return res.json(products);
		});
	},
	list:function(req,res,next){
		var pagesize=parseInt(req.query.pagesize,10)||100;
		var pagestart=parseInt(req.query.pagestart)||1;


		Products
		.find()
		.skip((pagestart-1)*pagesize)
		.limit(pagesize)
		.exec(function(err,docs){
			if(err)return next(err);
			return res.json(docs);
		});
	},
	getById:function(req,res,next,id){
		if(!id) return next(new Error('Products not found'));

		Products
		.findOne({_id:id})
		.exec(function(err,doc){
			if(err) return next(err);
			if(!doc) return next(new Error('Products not found'));

			req.products=doc;
			return next();
		});
	},
	get:function(req,res,next){
		return res.json(req.products);
	}
};