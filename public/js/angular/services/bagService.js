angular.module('bagService',[])
.service('Bag',function(){
  var bag = []

  var addToBag = function(arr){
    bag = arr;
  }

  var getBag = function() {
    return bag;
  }

  return {
    addToBag: addToBag,
    getBag: getBag
  };
})
