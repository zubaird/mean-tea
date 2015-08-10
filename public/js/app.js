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
    var duplicateTeas = 0;

    if (qty == undefined) {
      qty = 1;
    }

    vm.userBag.forEach(function(eachTea){
      if (eachTea._id == tea._id) {
        duplicateTeas += 1
      }
    })

    tea.quantity = qty

    if (duplicateTeas == 0) {
      vm.userBag.push(tea)
    }
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

  vm.isEditing = function(editing){
    if (vm.editing == false) {
      vm.editing = true
    } else {
      vm.editing = false
    }

    runningTotal = 0;
    vm.items.forEach(function(item){
      runningTotal += (item.price/100) * item.quantity
      vm.orderTotal = runningTotal;
    })

  }

  vm.removeItem = function(item){
    _items = vm.items
    vm.items = []
    _items.forEach(function(eachItem){
      if (eachItem._id != item._id) {
        vm.items.push(eachItem)
      }
    })

    runningTotal = 0;
    vm.items.forEach(function(item){
      runningTotal += (item.price/100) * item.quantity
      vm.orderTotal = runningTotal;
    })

    if (vm.items.length == 0) {
      vm.orderTotal = 0
    }

  }

}])
