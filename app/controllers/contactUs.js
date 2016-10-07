(function(){
	
	angular.module("app").controller("contactUs",contactUs)
	
	function contactUs($scope,$routeParams)
	{
		console.log("$routeParams",$routeParams)
		$scope.title="Contact Page"
		$scope.name=$routeParams.name;
		$scope.age=$routeParams.age;
	}
})();
