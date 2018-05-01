angular.module('officerspreparation').controller('TopicContentController', TopicContentController);

TopicContentController.$inject = ['$scope', '$state', 'DataService'];


function TopicContentController($scope, $state, DataService) {

  $scope.subject = DataService.currentTopic.subject;

  $scope.goBack = function () {
    window.history.back();
  }

  // // this function take the selected text andmark it
  function markTextSelected(range) {
    var newNode = document.createElement("div");
    newNode.setAttribute(
      "style",
      "background-color: yellow; display: inline;"
    );
    range.surroundContents(newNode);
  }
  $scope.markText = function () {
    var userSelection = window.getSelection().getRangeAt(0);
    console.log(userSelection);

    markTextSelected(userSelection);
    localStorage.setItem('testObject', window.getSelection().getRangeAt(0));
    console.log(localStorage.getItem('testObject'))

  }

}
