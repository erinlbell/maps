
angular.module('App')
.controller('resultsController', function ($scope, $state,$cordovaOauth, $localStorage,$ionicNavBarDelegate, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

console.log('resultsController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');


 $scope.results = [
    { name: 'Order Received' },
    { name: 'Order Failed'},
    { name: 'Waiting for Results'},
    { name: 'Re-propose'}
  ];
  
 
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  
 $scope.activity = [];
  $scope.ordersChange = function(appointment) {
    var msg = appointment.name;
    msg += (!appointment.received ? ' Successfully changed results, ' : ' Results successfully documented, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 10) {
      $scope.activity.splice(0, 1);
    }
  };
  



});
