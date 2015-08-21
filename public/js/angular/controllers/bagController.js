app.controller('bagController',['Bag',function(Bag,$scope){
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
