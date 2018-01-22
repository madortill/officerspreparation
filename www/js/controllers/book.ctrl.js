angular.module('starter').controller('bookcontroller', bookcontroller);

bookcontroller.$inject = ['$scope', '$state', 'DataService'];


function bookcontroller($scope, $state, DataService) {
  var i = 0;
  $scope.book = DataService.data.book[i].value;
  //   console.log($scope.book);

  $scope.touchnext = function () {
    i++;
    if (i == 9) {
      i = 0;
    }
    if (i < 9) {
      //  for(var i=0;i<9;i++){
      $scope.book = DataService.data.book[i].value;
      console.log($scope.book);
      // }
    }

  }
  $scope.touchback = function () {
    i--;
    if (i == -1) {
      i = 8;
    }
    if (i > -1) {
      $scope.book = DataService.data.book[i].value;
      console.log($scope.book);
    }

  }
}
