var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/views/templates/home.html',
        controller: 'homeController',
        animation: 'third'
      }).
      when('/photography', {
        templateUrl: '/views/templates/photography.html',
        controller: 'photoController',
        animation: 'third'
      }).
      when('/work', {
        templateUrl: '/views/templates/work.html',
        controller: 'workController',
        animation: 'third'
      }).
      when('/education', {
        templateUrl: '/views/templates/education.html',
        controller: 'eduController',
        animation: 'third'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }]);


mainApp.controller('workController', function($scope){

      $('.topBanner').css('background', 'linear-gradient(-45deg, #0d47a1, #7e57c2)');


});

mainApp.controller('eduController', function($scope){

      $('.topBanner').css('background', 'linear-gradient(-45deg,  #673ab7, #e53935)');


});

mainApp.controller('homeController', function($scope){

      $('.topBanner').css('background', 'linear-gradient(-45deg, #5c6bc0, #009688)');


});

mainApp.controller('photoController', function($scope) {
  $('.topBanner').css('background', 'linear-gradient(-45deg, #00695c, #9ccc65)');
  $(window).scroll(function () {
    var st = $(window).scrollTop();
    var width = $(window).width();
    console.log(width);
    if(st > 400 && st < 850 && width > 1200){
      $('#nature').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 150) + 'px' })
    } else if(st > 850 && st < 1200 && width > 1200){
      st -= 500;
      $('#cars').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 150) + 'px' })
    } else if(st > 1500 && st < 1750 && width > 1200){
      st -= 1135;
      $('#industrial').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 150) + 'px' })
    } else if(st > 1950 && st < 2200 && width > 1200){
      st -= 1550;
      $('#portrait').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 150) + 'px' })
    } else if(st > 2400 && st < 2650 && width > 1200){
      st -= 2000;
      $('#digital').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 150) + 'px' })
    } else if(st > 300 && st < 650 && width > 990 && width < 1200){
      $('#nature').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 100) + 'px' })
    } else if(st > 700 && st < 1100 && width > 990 && width < 1200){
      st -= 470;
      $('#cars').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 100) + 'px' })
    } else if(st > 1200 && st < 1450 && width > 990 && width < 1200){
      st -= 950;
      $('#industrial').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 100) + 'px' })
    } else if(st > 1500 && st < 1700 && width > 990 && width < 1200){
      st -= 1200;
      $('#portrait').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 100) + 'px' })
    } else if(st > 1750 && st < 2000 && width > 990 && width < 1200){
      st -= 1500;
      $('#digital').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 100) + 'px' })
    } else if(st > 100 && st < 350 && width > 760 && width < 990){
      $('#nature').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 25) + 'px' })
    } else if(st > 500 && st < 750 && width > 760 && width < 990){
      st -= 400;
      $('#cars').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 25) + 'px' })
    } else if(st > 900 && st < 1150 && width > 760 && width < 990){
      st -= 825;
      $('#industrial').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 25) + 'px' })
    } else if(st > 1300 && st < 1500 && width > 760 && width < 990){
      st -= 1250;
      $('#portrait').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 25) + 'px' })
    } else if(st > 1300 && st < 1500 && width > 760 && width < 990){
      st -= 1250;
      $('#digital').stop().css({ backgroundPosition: 'center ' + (Math.floor(st*.4*-1) + 25) + 'px' })
    }
  });

});
