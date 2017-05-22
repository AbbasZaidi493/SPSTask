'use strict';

agGrid.initialiseAgGridWithAngular1(angular);

angular
  .module('spsTaskApp', [
    'ngAnimate',
    'ngAria',
     'agGrid',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/comment/:id', {
        templateUrl: 'views/comment.html',
        controller: 'CommentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
