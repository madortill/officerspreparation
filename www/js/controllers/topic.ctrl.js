angular.module('officerspreparation').controller('TopicController', TopicController);

TopicController.$inject = ['$scope', '$state', 'DataService'];


function TopicController($scope, $state, DataService) {
  $scope.topic = DataService.currentBook.topic;
  console.log($scope.topic);
  $scope.menu = true;
  $scope.goBack = function () {
    console.log("poel");
    window.history.back();
  }


  $scope.goToTopicContent = function (subject) {
    DataService.currentTopic.subject = subject;
    // let numOfTheTOpic = subject.number;
    // console.log(subject);
    let test = subject.topicName;
    console.log(test);

    $state.go(test);

  }
}
