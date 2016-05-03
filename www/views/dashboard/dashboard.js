
angular.module('App')
.controller('dashboardController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $ionicNavBarDelegate,$firebaseObject, Auth, FURL, Utils) {
  console.log('dashboardController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');
});
