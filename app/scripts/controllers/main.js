'use strict';

/**
 * @ngdoc function
 * @name dota2heroesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dota2heroesApp
 */
angular.module('dota2heroesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('models/heroes.json').success(function(data){
    	$scope.heroes = data;
    });
    $scope.order = 'Name';
    $scope.level = 1;
    $scope.attributeBonus = 0;
  });


