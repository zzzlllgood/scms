var ProdcuctsController=require('../controllers/products.server.controller');

module.exports=function(app){
	app.route('/products')
		.get(ProdcuctsController.list)
		.post(ProdcuctsController.create);

	app.route('/products/:nid')
		.get(ProdcuctsController.get);

	app.param('nid',ProdcuctsController.getById);
};