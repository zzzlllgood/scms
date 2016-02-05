angular.module('sportsStoreApp')
	.constant('productActiveCls','btn-primary')
	.constant('productPagecount',3)
	//.constant('dataUrl','http://node:7101/products')
	.controller('ProductsController',['$scope','$http','$filter','productActiveCls','productPagecount','cart',ProductsController]);

function ProductsController($scope,$http,$filter,productActiveCls,productPagecount,cart){
	// $scope.data={
	// 	products:[
	// 		{"id":0,"name":"Products #1","description":"a product","category":"Category #1","price":100},
	// 		{"id":1,"name":"Products #2","description":"a product","category":"Category #2","price":110},
	// 		{"id":2,"name":"Products #3","description":"a product","category":"Category #3","price":120},
	// 		{"id":3,"name":"Products #4","description":"a product","category":"Category #4","price":130},
	// 		{"id":4,"name":"Products #5","description":"a product","category":"Category #4","price":130},
	// 		{"id":5,"name":"Products #6","description":"a product","category":"Category #4","price":230},
	// 		{"id":6,"name":"Products #7","description":"a product","category":"Category #4","price":230},
	// 		{"id":7,"name":"Products #8","description":"a product","category":"Category #4","price":230},
	// 		{"id":8,"name":"Products #9","description":"a product","category":"Category #4","price":230},
	// 		{"id":9,"name":"Products #10","description":"a product","category":"Category #4","price":230},
	// 		{"id":10,"name":"Products #11","description":"a product","category":"Category #4","price":230},
	// 		{"id":11,"name":"Products #12","description":"a product","category":"Category #4","price":230},
	// 		{"id":12,"name":"Products #13","description":"a product","category":"Category #4","price":230},
	// 		{"id":13,"name":"Products #14","description":"a product","category":"Category #4","price":230},
	// 		{"id":14,"name":"Products #15","description":"a product","category":"Category #4","price":230},
	// 		{"id":15,"name":"Products #16","description":"a product","category":"Category #4","price":230},
	// 		{"id":16,"name":"Products #17","description":"a product","category":"Category #4","price":230},
	// 		{"id":17,"name":"Products #18","description":"a product","category":"Category #4","price":230},
	// 		{"id":18,"name":"Products #19","description":"a product","category":"Category #4","price":230},
	// 		{"id":19,"name":"Products #20","description":"a product","category":"Category #4","price":230},
	// 		{"id":20,"name":"Products #21","description":"a product","category":"Category #4","price":230},
	// 		{"id":21,"name":"Products #22","description":"a product","category":"Category #4","price":230}
	// 	]
	// };

	// $scope.data={};
	// $http.get(dataUrl)
	// 		.success(function(data){
	// 			console.log('data');
	// 			console.log(data);
	// 			$scope.data.products=data;
	// 		})
	// 		.error(function(error){
	// 			$scope.data.error=error;
	// 		});



	var selectedCategory=null;

	$scope.selectedPage=1;
	$scope.pageSize=productPagecount;

	$scope.selectCategory=function(newCategory){
		selectedCategory=newCategory;
		$scope.selectedPage=1;
	};

	$scope.selectPage=function(newPage){
		$scope.selectedPage=newPage;
	}

	$scope.categoryFilterFn=function(product){
		return selectedCategory==null||product.category==selectedCategory;
	}

	$scope.getCategoryClass=function(category){
		return selectedCategory==category?productActiveCls:'';
	}

	$scope.getPageClass=function(page){
		return $scope.selectedPage==page?productActiveCls:'';
	}

	$scope.addProductToCart=function(product){
		cart.addProduct(product.id,product.name,product.price);
	}




	

}

