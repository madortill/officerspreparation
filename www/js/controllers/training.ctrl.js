angular
  .module("officerspreparation")
  .controller("trainingController", trainingController);

trainingController.$inject = ["$scope", "$state", "TrainingService"];

function trainingController($scope, $state, TrainingService) {
  $scope.difficultylevel = TrainingService.currentDifficulty.difficultylevel;
  console.log($scope.difficultylevel);

  $scope.goExercise = function(training) {
    TrainingService.currentTraining.training = training;
    $state.go("exerciseList");
  };

  $scope.goBack = function() {
    window.history.back();
  };
}
