'use strict';

/* Services */
var ratingServices = angular.module('ratingServices', ['ngResource']);

ratingServices.factory('Rating', ['$resource',
  function($resource){
    return $resource('ratings/:portletId.json', {}, {
      query: {method:'GET', params:{portletId:'ratings'}, isArray:true}
    });
  }]);