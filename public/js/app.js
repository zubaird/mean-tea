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
.directive('caffeineMeter',function(){
  return {
    restrict: 'E',
    templateUrl: "../views/teas/templates/caffeine-meter.html",
    scope: {
      caffeinemg: '=',
      id: '='
    },
    link: function(scope,element,attributes){

      if (scope.caffeinemg > 180) {
        scope.rating = "HIGH"
      }
      if (scope.caffeinemg < 180 && scope.caffeinemg > 80) {
        scope.rating = "MEDIUM"

      }
      if (scope.caffeinemg < 80) {
        scope.rating = "LOW"

      }

      var gaugeReading = Math.floor((scope.caffeinemg)/1.6)
      var gaugeElements = '<div id="' +scope.id+ '" class="gauge">\
                            <div class="mask">\
                              <div class="semi-circle"></div>\
                              <div class="semi-circle--mask"></div>\
                            </div>\
                          </div>'

      var lastGaugeSectionIndex = $(".gauge-section").length -1
      var selectedGaugeSection = $(".gauge-section")[lastGaugeSectionIndex]
      $(selectedGaugeSection).append(gaugeElements);

      var selectedMeter = $("#"+scope.id + " .semi-circle--mask")

      // selectedMeter.css({
      //   '-webkit-transform': 'rotate('+ gaugeReading +'deg)',
      //   '-moz-transform': 'rotate('+ gaugeReading +'deg)',
      //   '-ms-transform': 'rotate('+ gaugeReading +'deg)',
      //   'transform': 'rotate('+ gaugeReading +'deg)'
      // })

      selectedMeter.animate({ textIndent: gaugeReading },
        {
          step: function(now,fx){
            $(this).css({
              '-webkit-transform': 'rotate('+ now +'deg)',
              '-moz-transform': 'rotate('+ now +'deg)',
              '-ms-transform': 'rotate('+ now +'deg)',
              'transform': 'rotate('+ now +'deg)'
            });
          },
          duration: 1000
        })
    }
  }
})
