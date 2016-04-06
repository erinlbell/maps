angular.module('geomapapp.controllers', [])

.controller('AppCtrl', function($scope) {

})



.controller('VenueCtrl', function($scope) {
  //map with venue position
  $scope.position = {
    lat: 	34.052235,
    lng: -118.243683
  };

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });
})

