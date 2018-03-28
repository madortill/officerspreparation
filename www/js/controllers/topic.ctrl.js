angular.module('officerspreparation').controller('TopicController', TopicController);

TopicController.$inject = ['$scope', 'DataService'];


function TopicController($scope, DataService) {
  $scope.topic = DataService.currentBook.topic;
}
