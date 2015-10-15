var mainApp = angular.module("app", [
	'ui.router',
	'app.news'
]);

mainApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/news-list");
	$stateProvider
	// .state('home', {
	// 	url: "",
	// 	abstract: true,
	// 	templateUrl: "/public/index.html",
	// })
	.state('news-list', {
		url: "",
		templateUrl: "/public/index.html",
	//	controller: 'homeController'
	})
});

mainApp.controller('homeController', function($scope, newsFactory){
	$scope.news = newsFactory.getNews();
	$scope.commentsList = newsFactory.getComents();
});
