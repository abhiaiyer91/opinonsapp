var app = angular.module('Opinions', ['ngRoute', 'ngSanitize', 'ngResource']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/opinions',{
			templateUrl: 'templates/list.html',
			controller: PollListCtrl
		})
		.when('/poll/:pollId',{
			templateUrl: 'templates/item.html',
			controller: PollItemCtrl
		})
		.when('/new',{
			templateUrl: 'templates/new.html',
			controller: PollNewCtrl
		})	
		.otherwise({redirectTo: '/opinions'});			

}]);