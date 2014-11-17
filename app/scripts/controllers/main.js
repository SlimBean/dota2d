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
      for(var i=0; i<$scope.heroes.length; i++) {
        switch ($scope.heroes[i].PrimaryStat) {
          // strength
          case 0:
            $scope.heroes[i].PrimaryStatGain = $scope.heroes[i].StrGain;
            break;
          // agility
          case 1:
            $scope.heroes[i].PrimaryStatGain = $scope.heroes[i].AgiGain;
            break;
          // intelligence
          case 2:
            $scope.heroes[i].PrimaryStatGain = $scope.heroes[i].IntGain;
            break;
        }
      }
    });
    $scope.order = 'Name';
    $scope.level = 1;
    $scope.attributeBonus = 0;
  });


