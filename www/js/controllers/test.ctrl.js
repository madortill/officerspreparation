angular.module('officerspreparation').controller('testcontroller', testcontroller);

testcontroller.$inject = ['$scope', '$state', '$timeout', 'TestService', '$interval'];


function testcontroller($scope, $state, $timeout, TestService, $interval) {


  $scope.questionNumber = 1; //count the question num
  var questionIndex = []; //the array to to index
  var randomNum;
  var rightAnswer = 0;
  var wrongAnswer = 0;
  $scope.inCorrectAnswer = [false, false, false, false];
  $scope.correctAnswer = [false, false, false, false];



  $scope.goBack = function () {
    window.history.back();
  }

  $scope.nextQuestion = function () {
    $scope.questionNumber++;
    testcontent();



  }

  function randomNumbers() {
    questionIndex[0] = Math.floor((Math.random() * 7) + 0);
    randomNum = Math.floor((Math.random() * 7) + 0);
    for (var i = 1; i < 5; i++) {
      while (ifNumberExist(questionIndex, randomNum)) {
        randomNum = Math.floor((Math.random() * 7) + 0);
      }
      questionIndex[i] = randomNum;



    }
  }
  /* function that check if the number exist in the array*/
  function ifNumberExist(arr, num) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == num) {
        return true;

      }

    }
    return false;
  }
  randomNumbers();
  console.log(questionIndex);

  var countDown = 59;
  var minute = 2;
  $scope.countDowner = function () {

    $scope.countDown_text = countDown;
    $scope.minute_text = minute; // update scope
    countDown--; // -1
    if (countDown > -1) {
      $timeout($scope.countDowner, 100); // loop it again
    }
    if (countDown == 0) {
      minute--;
      countDown = 60;
    }
    if (minute < 0) {
      alert("timeout");
      countDown = 60;
      minute = 2;
    }
  };

  function testcontent() {
    $scope.question = TestService.test[questionIndex[$scope.questionNumber - 1]];
    $scope.answers = TestService.test[questionIndex[$scope.questionNumber - 1]].answers;

  }

  testcontent();
  console.log($scope.question);



  $scope.userAnswer = (index) => {
    // console.log($scope.answers[index].type);
    if ($scope.answers[index].type == false) {
      // $timeout(function () {
      console.log("false answer");
      wrongAnswer++;
      // }, 1000);
    }

    if ($scope.answers[index].type == true) {
      console.log("true answer");
      rightAnswer++;
    }
  }


}
