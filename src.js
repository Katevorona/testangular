var mainApp = angular.module("my-app", []);

//mainApp.controller('studentController', function($scope){
//	 $scope.student = {
//       firstName: "Kate",
//       lastName: "Vorona",
//       fullName: function() {
//          var studentObject;
//          studentObject = $scope.student;
//          return studentObject.firstName + " " + studentObject.lastName;
//       }
//   };
//});

//mainApp.controller('MyController', function($scope) {
//    $scope.person = {
//        name: 'Kate'
//    }
//});

mainApp.controller('ParentController', function($scope) {
    $scope.person = {greeted: false};
});

mainApp.controller('ChildController', function($scope) {
    $scope.sayHello = function() {
        $scope.person.greeted = true;
    }
});