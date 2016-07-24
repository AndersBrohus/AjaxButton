angular.module("umbraco").controller("Brohus.AjaxButtonController", function ($scope, $http) {
	$scope.loading = false;
	$scope.buttonText = $scope.model.config.buttonText;

	$scope.cyCallUrl = function () {
		$scope.loading = true;
		$http.get($scope.model.config.ajaxUrl).then(function (response) {
			$scope.return = "The URL was called successfully."
			$scope.loading = false;
		}, function (response) {
			$scope.return = "An error occurred."; 
			$scope.loading = false;
		});
	};
});