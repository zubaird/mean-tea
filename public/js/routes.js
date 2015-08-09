angular.module('myRoutes',['ngRoute']).config(
  function($routeProvider, $locationProvider){
    $routeProvider
    .when('/#',{
      templateUrl: 'views/teas/index.html',
      controller: 'teasController',
      controllerAs: 'teas'
    })
    .when('/about',{
      templateUrl: 'views/pages/about.html',
      controller: 'pagesController',
      controllerAd: 'pages'
    })
    .otherwise({
      templateUrl: 'views/teas/index.html',
      controller: 'teasController',
      controllerAs: 'teas'
    })
})
