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
  $scope.menu = true;

  $scope.goBack = function() {
    window.history.back();
  };

  // $scope.explenation = function() {
  //   alert(
  //     "הפוגות ריצה – רצים הכי מהר שאפשר למרחק מוגבל, נחים עד שהדופק יורד ל120 או דקה וחצי ויוצאים לעוד חזרה.\n ריצת שינויי קצב – 10 שניות מהיר ו50 שניות לאט."
  //   );
  // };

  $scope.openmenu = function() {
    $scope.menu = false;
    console.log($scope.menu);
  };

  $scope.closemenu = function() {
    $scope.menu = true;
    console.log($scope.menu);
  };
}
