'use strict';

/**
 * @ngdoc function
 * @name dota2heroesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dota2heroesApp
 */
angular.module('dota2heroesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
