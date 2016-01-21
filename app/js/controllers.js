'use strict';

/* Controllers */

var ratingControllers = angular.module('ratingControllers', []);

ratingControllers.controller('RatingListCtrl',
  function($scope, $http) {
    $http.get('ratings/ratings2.json').success(function(data, status, headers, config) {
      $scope.ratings = data;
    }).error(function(data, status, headers, config){
		alert("error: " + status);
	});
   
   $scope.progress = 75;

  });

