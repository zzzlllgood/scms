angular.module('sportsStoreApp')
	.controller('CheckoutController',['$scope','cart',CheckoutController]);

function CheckoutController($scope,cart){
	$scope.cartData=cart.getProducts();

	$scope.total=function(){
		var total=0;
		for(var i=0;i<$scope.cartData.length;i++){
			total+=($scope.cartData[i].price*$scope.cartData[i].count);
		}
		return total;
	}

	$scope.remove=function(id){
		cart.removeProduct(id);
	}
}