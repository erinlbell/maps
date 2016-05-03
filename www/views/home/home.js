'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state,$cordovaOauth,$ionicNavBarDelegate, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = new Firebase(FURL);
console.log('homeController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');
  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }

}
);
