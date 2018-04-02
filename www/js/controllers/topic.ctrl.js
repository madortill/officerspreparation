angular.module('officerspreparation').controller('TopicController', TopicController);

TopicController.$inject = ['$scope', 'DataService', '$state'];


function TopicController($scope, DataService, $state) {
  $scope.topic = DataService.currentBook.topic;
  console.log($scope.topic);


  $scope.goToTopicContent = function (subject) {
    console.log(subject);
    DataService.currentTopic.subject = subject;
    $state.go('topiccontent')

  }
}
