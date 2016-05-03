
angular.module('App')
.controller('mapsController', function($scope,$ionicNavBarDelegate,$cordovaLaunchNavigator) {
 console.log('mapsController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');

 //map with venue position
  $scope.position = {
    lat: 	33.7701,
    lng: -118.1937
  };

  
  
  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });
   
   
    $scope.formData = {
      dest: "Japan"
    };

    $scope.$watch('formData', function (formData) {
      if(formData.start != "custom" || formData.custom_start){
        $('#start .custom input').removeClass('error');
      }
      if(formData.dest != "custom" || formData.custom_dest){
        $('#dest .custom input').removeClass('error');
      }
    }, true);

    $scope.navigate = function () {

      // Validate
      if($scope.formData.start == "custom" && !$scope.formData.custom_start){
        $('#start .custom input').addClass('error');
        return;
      }

      if($scope.formData.dest == "custom" && !$scope.formData.custom_dest){
        $('#dest .custom input').addClass('error');
        return;
      }

      var start = $scope.formData.start == "custom" ? $scope.formData.custom_start : $scope.formData.start,
        dest = $scope.formData.dest == "custom" ? $scope.formData.custom_dest : $scope.formData.dest;

      $cordovaLaunchNavigator.navigate(dest, {
        start: start,
        enableDebug: true
      }).then(function () {
        alert("Navigator launched");
      }, function (err) {
        alert(err);
      });
    };

  
});


