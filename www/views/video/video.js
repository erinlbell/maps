
angular.module('App')
.controller('videoController', function ($scope, $state,$cordovaOauth, $localStorage,$cordovaCapture,VideoService, $location,$http,$ionicPopup, $ionicNavBarDelegate,$firebaseObject, Auth, FURL, Utils) {
  console.log('videoController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');
  
  
  $scope.clip = '';
 
$scope.captureVideo = function() {
	$cordovaCapture.captureVideo().then(function(videoData) {
		VideoService.saveVideo(videoData).success(function(data) {
			$scope.clip = data;
			$scope.$apply();
		}).error(function(data) {
			console.log('ERROR: ' + data);
		});
	});
};
$scope.urlForClipThumb = function(clipUrl) {
	var name = clipUrl.substr(clipUrl.lastIndexOf('/') + 1);
	var trueOrigin = cordova.file.dataDirectory + name;
	var sliced = trueOrigin.slice(0, -4);
	return sliced + '.png';
}
 
$scope.showClip = function(clip) {
	console.log('show clip: ' + clip);
}
});
