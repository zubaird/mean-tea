app.controller('teasController',['$http','Bag',function($http,Bag){
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
