angular.module('officerspreparation').controller('SubjectController', SubjectController);

SubjectController.$inject = ['$scope', '$state', 'DataService'];

function SubjectController($scope, $state, DataService) {
  //   $scope.subjects = DataService.book.topics.subjects;
  //   console.log($scope.subjects);

  //   $scope.goToTopicContent = function (subject) {
  //     DataService.currentTopic.subject = subject;
  //     $state.go('topiccontent')
  //   }

  $scope.goToTopicContent = function () {

    $state.go('topiccontent')

  }
}
