angular.module('App')


.controller('appointmentsController', function($scope, $rootScope, $firebase,$firebaseObject, $firebaseArray, $timeout, $ionicNavBarDelegate,$ionicScrollDelegate) {
console.log('appointmentsController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');
  $scope.hideTime = true;

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

	var ref = new Firebase("https://geomapapp.firebaseio.com/home/appointments");
	var obj=$firebaseObject(ref);
	
	obj=$scope.messages;


 $scope.sendMessage = function() {
    alternate = !alternate;

    var d = new Date();
	var c=new Date().toJSON().slice(0,10);
  d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
	   
	   $rootScope.counterValue = $rootScope.counterValue ? $rootScope.counterValue++ : 1;

    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      'name':$scope.data.name, 'apptname': $scope.data.apptname, 'apptdate':$scope.data.apptdate, 'appttime':$scope.data.appttime, 'apptlocation':$scope.data.apptlocation,
	  'status':$scope.data.staus,
	  time: d,
	  date: c
    });
	
	$scope.name='';
	$scope.apptname='';
	$scope.apptdate='';
	$scope.appttime='';
	$scope.apptlocation='';
	$scope.status='';
	

		
    delete $scope.data.name;
	  delete $scope.data.apptname;
	    delete $scope.data.apptdate;
		  delete $scope.data.appttime;
		  delete $scope.data.apptlocation;
		  
    $ionicScrollDelegate.scrollBottom(false);

  };
  
  
  
  
  


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];
  
  

})
