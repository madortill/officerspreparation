angular
  .module("officerspreparation")
  .controller("sportProgramFrontPgController", sportProgramFrontPgController);

sportProgramFrontPgController.$inject = [
  "$scope",
  "$state",
  "$timeout",
  "DataService"
];

function sportProgramFrontPgController($scope, $state, $timeout, DataService) {
  $scope.goBack = function() {
    window.history.back();
  };

  $scope.explenation = function() {
    alert("fdsrpoijfhjkljhvajlgh");
  };
}
