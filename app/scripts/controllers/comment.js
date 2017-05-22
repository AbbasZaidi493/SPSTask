'use strict';

angular.module('spsTaskApp')
  .controller('CommentCtrl', function ($scope, $location, commentService) {
    $scope.init = function () {
      if (commentService.selectedComment.hasOwnProperty('id')){
        $scope.comment = commentService.selectedComment;
      }
      else {
        $scope.error = 'No record has been found for requested comment id';
      }
    };

    $scope.goBack = function () {
      $location.path('/');
    }
  });
