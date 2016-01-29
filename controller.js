var app = angular.module('mainApp', []);

app.controller('app', function($scope, $http){
	$scope.counter = -1
	$scope.$watch('myText', function (newValue, oldValue){
		$scope.counter++;
		if($scope.counter == 100){
			alert('You hit 100!')
		}
	})
});