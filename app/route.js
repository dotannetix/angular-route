(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider.when('/about', {
			templateUrl : 'app/views/about.html',
			//template:"<h1>this is about page</h1>"

		}).when('/contactus', {
			templateUrl : 'app/views/contactus.html',
			//template:"<h1>this is about page</h1>"

		}).otherwise({
			redirectTo : '/home'
		});

	}

})();
