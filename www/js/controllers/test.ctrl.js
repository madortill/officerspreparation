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
  $scope.unClickAnswer = [false, false, false, false];
  $scope.startScreen = true;
  $scope.wrongAnswer = 0;
  $scope.rightAnswer = 0;
  $scope.questionCounter = 0;
  $scope.finishGame = false;


  $scope.goBack = function () {
    window.history.back();
  }



  $scope.startTest = function () {
    $scope.startScreen = false;
    $scope.countDowner();

  }

  $scope.nextQuestion = function () {
    $scope.questionNumber++;
    $scope.unClickAnswer = [false, false, false, false];
    console.log($scope.unClickAnswer);


    testcontent();
    unPaintaAnswer();


  }

  function unPaintaAnswer() {
    $scope.inCorrectAnswer = [false, false, false, false];
    $scope.correctAnswer = [false, false, false, false];
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
      // alert("timeout");
      $scope.finishGame = true;

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
      console.log($scope.unClickAnswer);

      // $timeout(function () {
      console.log("false answer");
      $scope.inCorrectAnswer[index] = true;
      $scope.wrongAnswer++;
      // }, 1000);
    }
    if ($scope.answers[index].type == true) {
      console.log("true answer");
      $scope.correctAnswer[index] = true;
      $scope.rightAnswer++;
    }
    $scope.unClickAnswer = [true, true, true, true];
    if ($scope.questionCounter == 5) {
      $scope.finishGame = true;
    }
    console.log($scope.unClickAnswer);

  }
}
