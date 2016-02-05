angular.module('sportsStoreApp')
	.controller('OrderController',['$scope','OrderService',OrderController]);

function OrderController($scope,OrderController){
	$scope.list=[];

	// $scope.loadOrder=function(){
	// 	OrderService.list().then(
	// 		function(data){
	// 			$scope.list=data;
	// 		},
	// 		function(err){}
	// 	);
	// }

	// $scope.loadOrder();

	
	// $scope.=function(){
	// 	var newNews=$scope.news;
	// 	newNews.createTime=NewsService.getNow();
	// 	OrderController.save(newNews).then(
	// 		function(data){
	// 			console.log(55555555555555555);
	// 			console.log(data);

	// 			$scope.list.push(newNews);
	// 		},
	// 		function(err){}

	// 	);
	// }

}