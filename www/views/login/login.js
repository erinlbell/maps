'Use Strict';
angular.module('App').controller('loginController', function ($scope, $state,$ionicNavBarDelegate,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
 console.log('loginController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');

 var ref = new Firebase(FURL);
  var userkey = "";
  $scope.signIn = function (user) {
    console.log("Enviado");
    if(angular.isDefined(user)){
    Utils.show();
    Auth.login(user)
     .then(function() {
         Utils.hide();
         console.log("Antes de loguear:" + JSON.stringify(user));
         Utils.alertshow("Login Successful");
         $location.path('/home/dashboard');
      }, function(err) {
         Utils.hide();
		 Utils.alertshow("Login unsuccesful. please use correct credentials");
         Utils.errMessage(err);
      });
    }
  };

}
);
  
