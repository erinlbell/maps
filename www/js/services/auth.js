angular.module('App')


.service('$cordovaLaunchNavigator', ['$q', function ($q) {
    "use strict";

    var $cordovaLaunchNavigator = {};
    $cordovaLaunchNavigator.navigate = function (destination, options) {
      var q = $q.defer(),
        isRealDevice = ionic.Platform.isWebView();

      if (!isRealDevice) {
        q.reject("launchnavigator will only work on a real mobile device! It is a NATIVE app launcher.");
      } else {
        try {

          var successFn = options.successCallBack || function () {
              },
            errorFn = options.errorCallback || function () {
              },
            _successFn = function () {
              successFn();
              q.resolve();
            },
            _errorFn = function (err) {
              errorFn(err);
              q.reject(err);
            };

          options.successCallBack = _successFn;
          options.errorCallback = _errorFn;

          launchnavigator.navigate(destination, options);
        } catch (e) {
          q.reject("Exception: " + e.message);
        }
      }
      return q.promise;
    };

    return $cordovaLaunchNavigator;
  }])

.factory('Auth', function(FURL, $firebaseAuth, $state, $firebaseArray, $firebaseObject, Utils) {

	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	var Auth = {
		user: {},

    createProfile: function(uid, user) {
      var profile = {
				id: uid,
		username: user.username,
        email: user.email,
      registered_in: Date()
      };
	  Utils.alertshow("Account successfully created");
	  $state.go('home.appointments');

      var profileRef = $firebaseArray(ref.child('profile'));
      return profileRef.$add(profile).then(function(ref) {
			  var id = ref.key();
			  //console.log("added record with id " + id);
			  profileRef.$indexFor(id); // returns location in the array
			});
    },

   login: function(user) {
      return auth.$authWithPassword(
        {email: user.email, password: user.password}
      );
    },


    register: function(user) {
      return auth.$createUser({username: user.username, email: user.email, password: user.password})
        .then(function() {
          // authenticate so we have permission to write to Firebase
          return Auth.login(user);
        })
        .then(function(data) {
          // store user data in Firebase after creating account
					//console.log("datos del usuario:" + JSON.stringify(data));
          return Auth.createProfile(data.uid, user);
        });
    },

    logout: function() {
      auth.$unauth();
			console.log("");
    },

		resetpassword: function(user) {
			return auth.$resetPassword({
				  email: user.email
				}).then(function() {
					Utils.alertshow("Password reset sent to email successfully");
				  //console.log("Password reset email sent successfully!");
				}).catch(function(error) {
					Utils.errMessage(error);
				  //console.error("Error: ", error.message);
				});
    },

		changePassword: function(user) {
			return auth.$changePassword({email: user.email, oldPassword: user.oldPass, newPassword: user.newPass});
		},

    signedIn: function() {
		
      return !!Auth.user.provider;
	  
	  //using !! means (0, undefined, null, etc) = false | otherwise = true

    }
	
	};
	auth.$onAuth(function(authData) {
		if(authData) {
      angular.copy(authData, Auth.user);
	  
      Auth.user.profile = $firebaseObject(ref.child('profile').child(authData.uid));
	
		} else {
      if(Auth.user && Auth.user.profile) {
        Auth.user.profile.$destroy();

      }
      
      angular.copy({}, Auth.user);
		}
	});



	return Auth;

});




