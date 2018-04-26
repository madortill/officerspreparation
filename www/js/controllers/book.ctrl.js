angular.module('officerspreparation').controller('BookController', BookController);

BookController.$inject = ['$scope', '$state', 'DataService'];


function BookController($scope, $state, DataService) {
  $scope.topics = DataService.book.topics;
  // console.log($scope.topics);
  $scope.menu = true;

  $scope.goToTopic = function (topic) {
    DataService.currentBook.topic = topic;
    console.log(DataService.currentBook.topic);
    $state.go('topic');
  }
  $scope.openmenu = function () {
    $scope.menu = false;
    console.log($scope.menu);
  }

  $scope.closemenu = function () {
    $scope.menu = true;
    console.log($scope.menu);
  }


  // $scope.color = false;
  // var i = 0;
  // $scope.book = DataService.data.book[i].value;
  // //   console.log($scope.book);
  // $scope.touchnext = function () {
  //   i++;
  //   if (i == 9) {
  //     i = 0;
  //   }
  //   if (i < 9) {
  //     $scope.book = DataService.data.book[i].value;
  //     console.log($scope.book);
  //   }
  // }
  // $scope.touchback = function () {
  //   i--;
  //   if (i == -1) {
  //     i = 8;
  //   }
  //   if (i > -1) {
  //     $scope.book = DataService.data.book[i].value;
  //     console.log($scope.book);
  //   }
  // }
  // // this function take the selected text andmark it
  // function markTextSelected(range) {
  //   var newNode = document.createElement("div");
  //   newNode.setAttribute(
  //     "style",
  //     "background-color: yellow; display: inline;"
  //   );
  //   // console.log(newNode);
  //   range.surroundContents(newNode);
  //   // console.log("");
  // }



  // $scope.markText = function () {
  //   var userSelection = window.getSelection().getRangeAt(0);
  //   markTextSelected(userSelection);
  //   localStorage.setItem('testObject', JSON.stringify(userSelection));
  //   // console.log(localStorage.getItem("testObject"));

  // }
}
