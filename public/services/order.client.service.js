angular.module('sportsStoreApp')
	.factory('OrderService',['$http','$q',OrderService]);

function OrderService($http,$q){
	function handleRequest(method,url,data){
		var defered=$q.defer();
		var config={
			method:method,
			url:url
		};
		if('POST'===method){console.log(333333333);
			config.data=data;
		}else if('GET'===method){
			config.params=data;
		}

		$http(config).success(function(data){
			defered.resolve(data);
		}).error(function(err){
			defered.reject(err);
		});

		return defered.promise;
	}

	return {
		list:function(params){
			return handleRequest('GET','/order',params);
		},
		save:function(data){
			return handleRequest('POST','/order',data);
		},
		detail:function(id){
			return handleRequest('GET','/order/'+id);
		},
		getNow:function() {
		    var date = new Date();
		    var seperator1 = "-";
		    var seperator2 = ":";
		    var month = date.getMonth() + 1;
		    var strDate = date.getDate();
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
		    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
		            + " " + date.getHours() + seperator2 + date.getMinutes()
		            + seperator2 + date.getSeconds();
		    return currentdate;
		} 
	}
}



