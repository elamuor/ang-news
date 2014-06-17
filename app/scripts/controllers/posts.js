'use strict';

/**
* @ngdoc function
* @name angNewsApp.controller:PostsCtrl
* @description
* # PostsCtrl
* Controller of the angNewsApp
*/
app.controller('PostsCtrl', function ($scope, $routeParams, $location, Post) {
  if ($location.path() === '/') {
    $scope.posts = Post.all;
  }
  $scope.post = {url: 'http://', title: ''};

  $scope.deletePost = function (postId) {
    Post.delete(postId);
  };
});