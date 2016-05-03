'Use Strict';
angular.module('App').controller('registerController', function ($scope, $ionicNavBarDelegate,$state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
console.log('registerController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');
  $scope.register = function(user) {
    if(angular.isDefined(user)){
    Utils.show();
    Auth.register(user)
      .then(function() {
         Utils.hide();
         console.log("Antes de loguear:" + JSON.stringify(user));
         Utils.alertshow("Successfully","The User was Successfully Created.");
         $location.path('/');
      }, function(err) {
         Utils.hide();
         Utils.errMessage(err);
      });
    }
  };

}
);
