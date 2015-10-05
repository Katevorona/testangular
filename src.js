var mainApp = angular.module("my-app", []);

mainApp.controller('studentController', function($scope){
	 $scope.student = {
       firstName: "Kate",
       lastName: "Vorona",       
       fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
       }
   };
});