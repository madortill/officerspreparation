angular.module('officerspreparation').controller('billionairecontroller', billionairecontroller);

billionairecontroller.$inject = ['$scope', '$state', 'DataService'];


function billionairecontroller($scope, $state, DataService) {
  $scope.goBack = function () {
    window.history.back();
  }
}
