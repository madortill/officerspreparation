angular.module('officerspreparation').controller('TopicContentController', TopicContentController);

TopicContentController.$inject = ['$scope', '$state', 'DataService'];


function TopicContentController($scope, $state, DataService) {

  $scope.subject = DataService.currentTopic.subject;

  $scope.goBack = function () {
    window.history.back();
  }
  console.log($scope.topic)


}
