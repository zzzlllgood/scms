angular.module('sportsStoreApp')
	.config(function($routeProvider){
		$routeProvider.when('/checkout',{templateUrl:'checkoutSummary.html'});
		$routeProvider.when('/products',{templateUrl:'products.html'});
		$routeProvider.when('/complete',{templateUrl:'complete.html'});
		$routeProvider.when('/placeorder',{templateUrl:'placeorder.html'});
		$routeProvider.otherwise({templateUrl:'products.html'});
	})