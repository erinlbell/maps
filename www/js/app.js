'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngMap','ngCordova','firebase','ngMessages'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider


    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })
	
	
    .state('home', {
      url: '/home',
	  abstract:true,
      templateUrl: 'views/home/home.html',
      controller:'homeController'
    })
	
	.state('home.dashboard', {
      url: '/dashboard',
	  views: {
      'menuContent': {
      templateUrl: 'views/dashboard/dashboard.html',
      controller:'dashboardController'
	    }
    }
    })
	.state('home.settings', {
      url: '/settings',
	  views: {
      'menuContent': {
      templateUrl: 'views/settings/settings.html',
      controller:'settingsController'
	    }
    }
    })
	.state('home.maps', {
      url: '/maps',
	  views: {
      'menuContent': {
      templateUrl: 'views/maps/maps.html',
      controller:'mapsController'
	    }
    }
    });
	
	
	
$urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', 'https://geomapapp.firebaseio.com/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
