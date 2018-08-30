angular
  .module("officerspreparation")
  .controller("exerciseController", exerciseController);

exerciseController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function exerciseController($scope, $state, DataService) {
  $scope.menu = true;

  $scope.openmenu = function () {
    $scope.menu = false;
    console.log($scope.menu);
  };

  $scope.goto = function (name) {
    $scope.menu = true;
    $state.go(name);
  };

  $scope.closemenu = function () {
    $scope.menu = true;
    console.log($scope.menu);
  };

}
