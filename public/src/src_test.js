var mainApp = angular.module("my-app", ['ngRoute']);
//
// //mainApp.controller('studentController', function($scope){
// //	 $scope.student = {
// //       firstName: "Kate",
// //       lastName: "Vorona",
// //       fullName: function() {
// //          var studentObject;
// //          studentObject = $scope.student;
// //          return studentObject.firstName + " " + studentObject.lastName;
// //       }
// //   };
// //});
//
// //mainApp.controller('MyController', function($scope) {
// //    $scope.person = {
// //        name: 'Kate'
// //    }
// //});
//
// mainApp.controller('ParentController', function($scope) {
//     $scope.person = {greeted: false};
// });
//
// mainApp.controller('ChildController', function($scope) {
//     $scope.sayHello = function() {
//         $scope.person.greeted = true;
//     }
// });
//
// mainApp.controller('MyController', function($scope) {
//   $scope.person = { name: "Ari Lerner" };
//   var updateClock = function() {
//     $scope.clock = new Date();
//   };
//   var timer = setInterval(function() {
//     $scope.$apply(updateClock);
//   }, 1000);
//   updateClock();
// });
//
// mainApp.controller('RepeatController', function($scope){
//     $scope.roommates = [
//       { name: 'Ari'},
//       { name: 'Q'},
//       { name: 'Sean'},
//       { name: 'Anand'}
//     ];
//
//     $scope.people = {
//       'Ari': 'orange',
//       'Q': 'purple',
//       'Sean': 'green'
//     };
// });

// angular.module("MyApp")
//   .controller("MyCtrl", ["$scope", "$q", function($scope, $q) {
//   // your code
// }])
// mainApp.factory('githubService', ['$http', function($http) {
//     var githubUsername;
//     var doRequest = function(path) {
//       return $http({
//         method: 'JSONP',
//         url: 'https://api.github.com/users/' + githubUsername + '/' + path + '?callback=JSON_CALLBACK'
//       });
//     }
//     return {
//       events: function() { return doRequest('events'); },
//       setUsername: function(newUsername) { githubUsername = newUsername; }
//     };
//   }]);
//
// mainApp.controller('ServiceController', ['$scope', '$timeout', 'githubService',
//   function($scope, $timeout, githubService) {
//     // The same example as above, plus the $timeout service
//     var timeout;
//     $scope.$watch('username', function(newVal) {
//       if (newVal) {
//         if (timeout) $timeout.cancel(timeout);
//         timeout = $timeout(function() {
//           githubService.events(newVal)
//           .success(function(data, status) {
//             $scope.events = data.data;
//           });
//         }, 350);
//       }
//     });
//   }]);

mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    template: 'Hello'
  }).when('/pizza', {
    templateUrl: 'template0.html'
  })
}]);

mainApp.controller("HomeController", function($scope){
  $scope.model = {
    message : 'This is my app!'
  }
});
