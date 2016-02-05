angular.module('webapp')
	.controller('NewsController',['$scope','NewsService',NewsController]);

function NewsController($scope,NewsService){
	$scope.list=[];

	$scope.loadNews=function(){
		NewsService.list().then(
			function(data){
				$scope.list=data;
			},
			function(err){}
		);
	}

	$scope.loadNews();

	
	$scope.newNews=function(){
		var newNews=$scope.news;
		newNews.createTime=NewsService.getNow();
		NewsService.save(newNews).then(
			function(data){
				console.log(55555555555555555);
				console.log(data);

				$scope.list.push(newNews);
			},
			function(err){}

		);
	}

}