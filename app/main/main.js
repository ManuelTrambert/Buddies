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
    $urlRouterProvider.otherwise('/main/chat');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/tabs.html',
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
    });
  });

/*'use strict';
 angular.module('main', [
 'ionic',
 'ngCordova',
 'ui.router',
 'main.constant',
 // TODO: load other modules selected during generation
 ])
 .config(function ($stateProvider, $urlRouterProvider) {

 // ROUTING with ui.router
 $urlRouterProvider.otherwise(function ($injector) {
 var $state = $injector.get('$state');
 $state.go('dashboard');
 });
 $stateProvider
 // this state is placed in the <ion-nav-view> in the index.html
 .state('main', {
 url: '/main',
 abstract: true,
 templateUrl: 'main/templates/tabs.html',
 })
 .state('main.dashboard', {
 url: '/list',
 views: {
 'tab-list': {
 templateUrl: 'main/templates/dashboard/dashboard.html',
 controller: 'DashboardCtrl'
 }
 }
 })
 .state('chat', {
 url: '/chat',
 views: {
 'tab-chat': {
 templateUrl: 'main/templates/chat/chat.html',
 controller: 'ChatCtrl'
 }
 }
 })
 .state('settings', {
 url: '/settings',
 views: {
 'tab-settings': {
 templateUrl: 'main/templates/settings/settings.html',
 controller: 'SettingsCtrl'
 }
 }
 })
 .state('events', {
 url: '/events',
 views: {
 'tab-events': {
 templateUrl: 'main/templates/events/events.html',
 controller: 'EventCtrl'
 }
 }
 });

 });*/
