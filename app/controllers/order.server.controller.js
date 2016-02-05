var mongoose=require('mongoose');
var Order=mongoose.model('Order');

module.exports={
	create:function(req,res,next){console.log(3333333);console.log(req);
		var order=new Order(req.body);
		order.save(function(err){
			if(err)return next(err);
			return res.json(order);
		});
	},
	list:function(req,res,next){
		var pagesize=parseInt(req.query.pagesize,10)||100;
		var pagestart=parseInt(req.query.pagestart)||1;

		Order
		.find()
		.skip((pagestart-1)*pagesize)
		.limit(pagesize)
		.exec(function(err,docs){
			if(err)return next(err);
			return res.json(docs);
		});
	},
	getById:function(req,res,next,id){
		if(!id) return next(new Error('Order not found'));

		Order
		.findOne({_id:id})
		.exec(function(err,doc){
			if(err) return next(err);
			if(!doc) return next(new Error('Order not found'));

			req.order=doc;
			return next();
		});
	},
	get:function(req,res,next){
		return res.json(req.order);
	}
};