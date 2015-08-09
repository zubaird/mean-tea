angular.module('teaApp',['myRoutes','ngAnimate', 'bagService']).controller('teasController',['$http','Bag',function($http,Bag){
  var vm = this;

  $http.get('/api/teas')
  .then(function(response){
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

  vm.userBag = []

  vm.addToBag = function(tea, qty){
    if (qty == undefined) {
      qty = 1;
    }
    tea.quantity = qty
    vm.userBag.push(tea)
    console.log(vm.userBag, qty)
  }

  Bag.addToBag(vm.userBag);

}])
.controller('pagesController',[function(){
  var vm = this;
}])
.controller('bagController',['Bag',function(Bag,$scope){
  var vm = this;

  vm.editing = false;

  vm.items = Bag.getBag()

  var runningTotal = 0;
  vm.items.forEach(function(item){
    runningTotal += (item.price/100) * item.quantity
    vm.orderTotal = runningTotal;
  })

  function isEditing(editing){
    vm.editing = vm.editing || editing
    console.log(vm.editing, "editing");
  }

}])
