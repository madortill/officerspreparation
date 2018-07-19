angular
  .module("officerspreparation")
  .controller("exerciseDescriptionController", exerciseDescriptionController);

exerciseDescriptionController.$inject = ["$scope", "$state", "TrainingService"];

function exerciseDescriptionController($scope, $state, TrainingService) {
  $scope.exercise = TrainingService.currentExercise.exercise;
  //TrainingService.currentexercise.exercise = exercise;

  $scope.goBack = function() {
    window.history.back();
  };
}
