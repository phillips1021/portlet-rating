// JavaScript Document
// Inspired by the incredible article by Todd Motto on custom filters
// http://toddmotto.com/everything-about-custom-filters-in-angular-js/

angular.module('myApp', [
  'ngAnimate'
])
.controller('MainCtrl', function(ItemsModel,DateRanges){
  var main = this;

  main.dateRanges = DateRanges;
  main.dateAfter = main.dateRanges[0];
  main.items = ItemsModel.getItems();
})
.filter('isAfter', function() {
  return function(items, dateAfter) {
    // Using ES6 filter method
    return items.filter(function(item){
      return moment(item.ratings.rating.ratingDate).isAfter(dateAfter);
    })
  }
})
.value('DateRanges', [
  {name:'Past 7 Days', date:moment().subtract(7, 'day')},
  {name:'Past 30 Days', date:moment().subtract(30, 'day')},
  {name:'All items', date:moment().subtract(10, 'year')}
 ])
.factory('ItemsModel', function(){
  var items = [{
        "portletName": "portlet1",
        "ratings": [
		  {"rating": 4,"review":"review 1 for portlet1","user_name":"brucephillips","ratingDate":"01/22/2016"},
		  {"rating":2,"review":"review 2 for portlet1","user_name":"amarker","ratingDate":"01/21/2016"}
		] 
 },
 {
        "portletName":"portlet2",
        "ratings":[
		  {"rating":1,"review":"review 1 for portlet2","user_name":"brucephillips","ratingDate":"01/10/2016"},
		  {"rating":5,"review":"review 2 for portlet2","user_name":"amarker","ratingDate":"11/22/2015"}
		 ]
 }
]
  
  var getItems = function() {
    return items;
  }

  return {
    getItems: getItems,
  }
})
;