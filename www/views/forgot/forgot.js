'Use Strict';
angular.module('App').controller('forgotController', function ($scope, $state,$cordovaOauth,$ionicNavBarDelegate, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
console.log('forgotController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');

  var ref = new Firebase(FURL);
  $scope.resetpassword = function(user) {
      if(angular.isDefined(user)){
      Auth.resetpassword(user)
        .then(function() {
          //console.log("Password reset email sent successfully!");
          $location.path('/login');
        }, function(err) {
           //console.error("Error: ", err);
        });
      }
    };
}
);
