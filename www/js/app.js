'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngMap','ngCordova','firebase','ngMessages'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

.state('splash', {
      url: '/splash',
      templateUrl: 'views/splash/splash.html',
      controller:'splashController'
    })
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
	.state('home.video', {
      url: '/video',
	  views: {
      'menuContent': {
      templateUrl: 'views/video/video.html',
      controller:'videoController'
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
	.state('home.chats', {
      url: '/chats',
	  views: {
      'menuContent': {
      templateUrl: 'views/chats/chats.html',
      controller:'chatsController'
	    }
    }
    })
	.state('home.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'menuContent': {
          templateUrl: 'views/chat-detail/chat-detail.html',
          controller: 'chat-detailController'
        }
      }
    })
	.state('home.appointments', {
      url: '/appointments',
	  views: {
      'menuContent': {
      templateUrl: 'views/appointments/appointments.html',
      controller:'appointmentsController'
	    }
    }
    })
	.state('home.results', {
      url: '/results',
	  views: {
      'menuContent': {
      templateUrl: 'views/results/results.html',
      controller:'resultsController'
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
	
	
	
$urlRouterProvider.otherwise("/splash");
})
// Changue this for your Firebase App URL.
.constant('FURL', 'https://geomapapp.firebaseio.com/')

 $rootScope.global = {
        theme: {
          
          splash: $localstorage.get('last_logo') || 'img/sky.png'
        }
      }
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
