var todoApp = angular.module('todoApp', []);

todoApp.controller('AddItemContr', function($scope){
	$scope.todoArray = [];
	
	$scope.addItemToList = function(str){
		if(str !== ''){
			$scope.todoArray.push(str);
			$scope.toBeAdded = '';
		}
	};
});