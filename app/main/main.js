'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'main.constant',
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/tabs.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'main/templates/login.html',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'main/templates/register.html',
        controller: 'RegisterCtrl'
      })
      .state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'main/templates/forgotPassword.html',
        controller: 'ForgotPasswordCtrl'
      })
      .state('main.dashboard', {
        url: '/dashboard',
        views: {
          'tab-dash': {
            templateUrl: 'main/templates/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('main.chat', {
        url: '/chat',
        views: {
          'tab-chats': {
            templateUrl: 'main/templates/chat/chat.html',
            controller: 'ChatCtrl'
          }
        }
      })
      .state('main.events', {
        url: '/events',
        views: {
          'tab-events': {
            templateUrl: 'main/templates/events/events.html',
            controller: 'EventCtrl'
          }
        }
      })
      .state('main.singleEvent', {
        url: '/singleEvent',
        templateUrl: 'main/templates/events/singleEvent.html',
        controller: 'SingleEventCtrl'
      });
  })
  .run(function ($ionicPlatform, $rootScope, $state, $window, $cordovaStatusbar) {
    $ionicPlatform.ready(function() {
      ionic.Platform.fullScreen();
      if (window.StatusBar) {
        return StatusBar.hide();
      }
    });
    /*if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      StatusBar.show();
      StatusBar.backgroundColorByName("red");
    }*/

  });
