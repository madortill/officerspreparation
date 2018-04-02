angular.module('officerspreparation').controller('TopicContentController', TopicContentController);

TopicContentController.$inject = ['$scope', 'DataService', '$state'];


function TopicContentController($scope, $state, DataService) {

  $scope.subject = DataService.currentTopic.subject;
  console.log($scope.subject);




}
