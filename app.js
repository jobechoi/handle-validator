'use strict'

var myModule = angular.module('forms', []);

myModule.controller('handleController', function ($scope, $http, $templateCache) {
  
});

myModule.directive('githubhandle', function($http, $q){
	
	var processResponse = function(response){
		if(response.status == 200){
			return $q.when(true);
		}
		else{
			return $q.reject(false);
		}
	};

	var validateHandle = function(value){
		return $http.get("https://api.github.com/users/" + encodeURI(value))
			.then(processResponse);
	};

	return {
		restrict: "A",
		require: "ngModel",
		link: function(scope, element, attributes, ngModel){
			ngModel.$asyncValidators.githubhandle = validateHandle;
		}
	};
});
