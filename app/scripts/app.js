'use strict';

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular;
app.module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
    ])
.constant('FIREBASE_URL', 'https://ang-news-fiesh.firebaseio.com')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/posts.html',
    controller: 'PostsCtrl'
  })
  .when('/posts/:postId', {
    templateUrl: 'views/post-view.html',
    controller: 'PostViewCtrl'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'AuthCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'AuthCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
