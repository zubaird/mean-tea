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
      controllerAs: 'pages'
    })
    .when('/checkout',{
      templateUrl: 'views/pages/checkout.html',
      controller: 'bagController',
      controllerAs: 'bag'
    })
    .otherwise({
      templateUrl: 'views/teas/index.html',
      controller: 'teasController',
      controllerAs: 'teas'
    })
})
