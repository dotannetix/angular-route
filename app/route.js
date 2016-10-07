(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider.when('/about', {
			templateUrl : 'app/views/about.html',
			//template:"<h1>this is about page</h1>"

		}).when('/contactus', {
			templateUrl : 'app/views/contactus.html',
			controller : "contactUs"
			//template:"<h1>this is about page</h1>"

		}).when('/contactus/:name/:age', {
			templateUrl : 'app/views/contactus.html',
			controller : "contactUs"

		}).when('/home', {
			templateUrl : 'app/views/home.html',
			controller : "home"
			//template:"<h1>this is about page</h1>"

		}).otherwise({
			redirectTo : '/'
		});

	}

})();
