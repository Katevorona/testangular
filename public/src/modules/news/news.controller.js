angular
  .module('app.news')
  .controller('newsInnerController', newsInnerController);

function newsInnerController($scope, $stateParams, newsFactory){
	var ctrl = this;
	ctrl.newsId = $stateParams.newsId;
  ctrl.news = newsFactory.getNews();
	ctrl.newsArr =  ctrl.news.filter(function(item) {
		return item.id == ctrl.newsId;
	});
	$scope.news  =  ctrl.newsArr[0];

	$scope.showComments = showComments;
	function showComments(){
    ctrl.comments = newsFactory.getComents();
		$scope.comments =  ctrl.comments.filter(function(item) {
			return item.newsId == ctrl.newsId;
		});
	}
};
