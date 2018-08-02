angular
  .module("officerspreparation")
  .controller("chooseDifficultyController", chooseDifficultyController);

chooseDifficultyController.$inject = ["$scope", "$state", "TrainingService"];

function chooseDifficultyController($scope, $state, TrainingService) {
  $scope.difficultylevels = TrainingService.strengthProgram.difficultylevels;
  console.log($scope.difficultylevels);

  $scope.goTraining = function(difficultylevel) {
    TrainingService.currentDifficulty.difficultylevel = difficultylevel;
    console.log(TrainingService.currentDifficulty.difficultylevel);
    $state.go("training");
  };
}
