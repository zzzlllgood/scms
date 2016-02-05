var OrderController=require('../controllers/order.server.controller');

module.exports=function(app){
	app.route('/order')
		.get(OrderController.list)
		.post(OrderController.create);

	app.route('/order/:nid')
		.get(OrderController.get);

	app.param('nid',OrderController.getById);
};