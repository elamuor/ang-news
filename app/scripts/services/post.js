'use strict';

/**
 * @ngdoc service
 * @name angNewsApp.Post
 * @description
 * # Post
 * Factory in the angNewsApp.
 */
app.factory('Post', function ($resource) {
  return $resource('https://ang-news-fiesh.firebaseio.com/posts/:id.json');
});
