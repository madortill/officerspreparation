angular
  .module("officerspreparation")
  .controller("BookController", BookController);

BookController.$inject = ["$scope", "$state", "DataService"];

// $scope.menu = true;

function BookController($scope, $state, DataService) {
  $scope.menu = true;
  console.log("xyz");
  $scope.topics = DataService.book.topics;
  console.log($scope.topics);

  $scope.goToTopic = function (topic) {
    DataService.currentBook.topic = topic;
    console.log(DataService.currentBook.topic);
    $state.go("topic");
  };
  $scope.openmenu = function () {
    $scope.menu = false;
    console.log($scope.menu);
  };

  $scope.closemenu = function () {
    $scope.menu = true;
    console.log($scope.menu);
  };

}
