'use strict';

/**
 * @ngdoc service
 * @name spsTaskApp.commentService
 * @description
 * # commentService
 * Service in the spsTaskApp.
 */
angular.module('spsTaskApp')
  .service('commentService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      selectedComment: {}
    }
  });
