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
      return moment(item.date).isAfter(dateAfter);
    })
  }
})
.value('DateRanges', [
  {name:'Past 7 Days', date:moment().subtract(7, 'day')},
  {name:'Past 30 Days', date:moment().subtract(30, 'day')},
  {name:'All items', date:moment().subtract(10, 'year')}
 ])
.factory('ItemsModel', function(){
  var items = [
        {id: 1, date:'01/22/2016', portletName:'portlet 1', rating:1, user_name:'brucephillips', review:'portlet 1 review'},
        {id: 2, date:'01/21/2016', portletName:'portlet 2', rating:2, user_name:'amarker', review:'portlet 2 review'}, 
        {id: 3, date:'01/05/2016', portletName:'portlet 3', rating:3, user_name:'ghosler', review:'portlet 3 review'},
        {id: 4, date:'12/29/2015', portletName:'portlet 4', rating:4, user_name:'brucephillips', review:'portlet 4 review'},
        {id: 5, date:'11/01/2015', portletName:'portlet 5', rating:5, user_name:'cbays', review:'portlet 5 review'},

    ];
  
  var getItems = function() {
    return items;
  }

  return {
    getItems: getItems,
  }
})
;