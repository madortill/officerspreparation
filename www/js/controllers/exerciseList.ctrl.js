angular
  .module("officerspreparation")
  .controller("exerciseListController", exerciseListController);

exerciseListController.$inject = ["$scope", "$state", "TrainingService"];

function exerciseListController($scope, $state, TrainingService) {
  $scope.training = TrainingService.currentTraining.training;

  $scope.goExerciseDescription = function(exercise) {
    console.log(exercise);
    TrainingService.currentExercise.exercise = exercise;
    $state.go("exerciseDescription");
  };

  $scope.goBack = function() {
    window.history.back();
  };
}
