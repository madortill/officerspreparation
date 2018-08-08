angular
  .module("officerspreparation")
  .controller("weeklyRunListController", weeklyRunListController);

weeklyRunListController.$inject = ["$scope", "$state", "TrainingService"];

function weeklyRunListController($scope, $state, TrainingService) {
  $scope.difficultyRunlevel = TrainingService.currentRunLevel.difficultylevel;
  console.log($scope.difficultyRunlevel);

  $scope.goRuningExercise = function(week) {
    TrainingService.currentWeek.training = week;
    console.log(TrainingService.currentWeek.training);
    $state.go("runTrainingList");
  };

  $scope.goBack = function() {
    window.history.back();
  };
}
