
(function(){
	angular.module("app").controller("home",home)
	
	function home($scope){
		$scope.persons=[{name:"dotan",age:33},{name:"ran",age:20}]
		
	}
})();
