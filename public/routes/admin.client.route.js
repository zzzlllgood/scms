angular.module('adminApp')
	.config(function($routeProvider){
		$routeProvider.when('/login',{templateUrl:'login.html'});
		$routeProvider.when('/main',{templateUrl:'adminMain.html'});
		$routeProvider.otherwise({redirectTo:'login.html'});
	})