var UserController=require('../controllers/user.server.controller');

module.exports=function(app){
	app.route('/user')
		.get(UserController.list)
		.post(UserController.create);

	app.route('/order/:nid')
		.get(UserController.get);

	app.param('nid',UserController.getById);
};