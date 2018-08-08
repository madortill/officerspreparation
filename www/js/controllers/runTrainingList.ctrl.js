angular
  .module("officerspreparation")
  .controller("runTrainingListController", runTrainingListController);

runTrainingListController.$inject = ["$scope", "$state", "TrainingService"];

function runTrainingListController($scope, $state, TrainingService) {
  $scope.week = TrainingService.currentWeek.training;
  console.log($scope.week);

  // $scope.openTrainingProprtise = function(training) {
  //   TrainingService.currentTraining.training = training;
  //   $state.go("exerciseList");
  // };

  $scope.goBack = function() {
    window.history.back();
  };
}
