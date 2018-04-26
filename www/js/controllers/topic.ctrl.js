angular.module('officerspreparation').controller('TopicController', TopicController);

TopicController.$inject = ['$scope', '$state', 'DataService'];


function TopicController($scope, $state, DataService) {
  $scope.topic = DataService.currentBook.topic;
  console.log($scope.topic);
  $scope.menu = true;

  $scope.openmenu = function () {
    $scope.menu = false;
    console.log($scope.menu);
  }

  $scope.closemenu = function () {
    $scope.menu = true;
    console.log($scope.menu);
  }

  $scope.goToTopicContent = function (subject) {

    DataService.currentTopic.subject = subject;
    // let numOfTheTOpic = subject.number;
    // console.log(subject);
    let test = subject.topicName;
    console.log(test);


    $scope.goBack = function () {
      window.history.back();
    }

    $state.go(test);

  }
}
