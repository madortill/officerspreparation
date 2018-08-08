angular
  .module("officerspreparation")
  .controller("runChooseDifficultyController", runChooseDifficultyController);

runChooseDifficultyController.$inject = ["$scope", "$state", "TrainingService"];

function runChooseDifficultyController($scope, $state, TrainingService) {
  $scope.difficultyRunlevels = TrainingService.runProgram.difficultyRunlevels;
  console.log($scope.difficultyRunlevels);

  $scope.goWeekList = function(difficultyRunlevel) {
    TrainingService.currentRunLevel.difficultylevel = difficultyRunlevel;
    console.log(TrainingService.currentRunLevel.difficultylevel);
    $state.go("weeklyRunList");
  };

  $scope.goBack = function() {
    window.history.back();
  };
}
