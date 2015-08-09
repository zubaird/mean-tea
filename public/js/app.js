angular.module('teaApp',['myRoutes','ngAnimate']).controller('teasController',['$http',function($http){
  var vm = this;

  $http.get('/api/teas')
  .then(function(response){
    console.log(response.data);
    vm.teas = response.data;

    vm.categories = []
    vm.teas.forEach(function(tea){
        if (tea != undefined) {
          tea.categories.forEach(function(category){
            if (vm.categories.indexOf(category) == -1) {
              vm.categories.push(category);
            }
          })
        }
      })
  });

  vm.things = [];

  vm.addTea = function(){
    vm.things.push({
      name: vm.teaData.name,
      ingredients: vm.teaData.ingredients,
      caffeineScale: vm.teaData.caffeineScale,
      price: vm.teaData.price,
      inStock: vm.teaData.inStock,
      categories: vm.teaData.categories,
      rating: vm.teaData.rating,
      imageUrl: vm.teaData.imageUrl
    })
    vm.teaData = {}
  }

}])
.controller('pagesController',[function(){
  var vm = this;
}])
