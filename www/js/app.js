'use strict';

var URL = 'https://app.konacloud.io/api/daniel/TestIonic/mr_User';

var app = angular.module('app', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('page4', {
      url: '/login',
      templateUrl: 'views/login.html'
    })
    .state('page5', {
      url: '/signup',
      templateUrl: 'views/singup.html'
    })
    .state('side-menu1', {
      url: '/menu',
      templateUrl: 'views/menu.html'
    })
    ;

  $urlRouterProvider.otherwise('/login');
});

app.controller('MainController', function ($rootScope, $scope, $http,$location) {
    $rootScope.user = {};
    $rootScope.loginData = {};

    $rootScope.addNewUser = function () {
      $http.post(URL, $scope.user).
          success(function (data, status, headers, config) {
              $scope.user = {};
              window.history.back();
          }).
          error(function (data, status, headers, config) {
              alert(status);
          });
    };

    $rootScope.login = function () {
      console.log($scope.loginData);
      $http.post(URL + "/login", $scope.loginData).
          success(function (data, status, headers, config) {
              $scope.login = {};
              console.log(data);
              if (!data.success) {
                alert(data.errorMsg);
                location.reload();
              }else if (!data.data.success) {
                alert('User or password incorrect');
                location.reload();
              }else {
                $location.path("/menu");
              }
              $scope.loginData = {};
          }).
          error(function (data, status, headers, config) {
              alert(status);
          });
    };

});
