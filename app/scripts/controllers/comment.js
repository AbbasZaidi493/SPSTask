'use strict';

/**
 * @ngdoc function
 * @name spsTaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spsTaskApp
 */
angular.module('spsTaskApp')
  .controller('CommentCtrl', function ($scope, $location, commentService) {
    $scope.init = function () {
      if (commentService.selectedComment.hasOwnProperty('id')){
        $scope.comment = commentService.selectedComment;
      }
      else {
        $scope.error = 'No record has been found for requested comment id';
      }
    }
    $scope.goBack = function () {
      $location.path('/');
    }
  });
