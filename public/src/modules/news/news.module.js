angular
  .module("app.news", [])
  .config(function($stateProvider, $urlRouterProvider){
  	$stateProvider
  	.state('news-inner', {
  		url: "/news/:newsId",
  		templateUrl: '/public/partials/news-inner.html',
  		controller: 'newsInnerController'
  	})
  });
