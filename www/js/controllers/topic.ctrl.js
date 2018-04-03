angular.module('officerspreparation').controller('TopicController', TopicController);

TopicController.$inject = ['$scope', '$state', 'DataService'];


function TopicController($scope, $state, DataService) {
  $scope.topic = DataService.currentBook.topic;
  console.log($scope.topic);


  $scope.goToTopicContent = function (subject) {
    console.log(subject);
    DataService.currentTopic.subject = subject;
    $state.go('topiccontent')

  }
}
