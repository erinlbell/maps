
angular.module('App')
.controller('settingsController', function ($scope, $state,$cordovaOauth, $localStorage,$ionicNavBarDelegate, $location,$ionicSideMenuDelegate, $http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

console.log('settingsController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');
 $scope.settings = {
    enableFriends: true
  };


  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  


});
