angular.module('officerspreparation').controller('TopicContentController', TopicContentController);

TopicContentController.$inject = ['$scope', '$state', 'DataService'];


function TopicContentController($scope, $state, DataService) {

  $scope.subject = DataService.currentTopic.subject;

  console.log($scope.topic)


}
