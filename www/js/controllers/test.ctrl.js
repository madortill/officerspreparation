angular
  .module("officerspreparation")
  .controller("testcontroller", testcontroller);

testcontroller.$inject = [
  "$scope",
  "$state",
  "$timeout",
  "TestService",
  "$interval"
];

function testcontroller($scope, $state, $timeout, TestService, $interval) {
  $scope.questionNumber = 1; //count the question num
  var questionIndex = []; //the array to to index
  var randomNum;
  var rightAnswer = 0;
  var wrongAnswer = 0;
  var countDown = 59;
  $scope.minute = 29;
  $scope.inCorrectAnswer = [false, false, false, false];
  $scope.correctAnswer = [false, false, false, false];
  $scope.unClickAnswer = [false, false, false, false];
  $scope.hideNextQuestion = false;
  $scope.startScreen = true;
  $scope.wrongAnswer = 0;
  $scope.rightAnswer = 0;
  $scope.questionCounter = 0;
  $scope.finishGame = false;
  $scope.pass = false;
  $scope.failed = false;
  $scope.timeoutScreen = false;

  function resetgame() {
    $scope.questionNumber = 1; //count the question num
    questionIndex = []; //the array to the index
    randomNum;
    rightAnswer = 0;
    countDown = 59;
    $scope.minute = 29;
    $scope.inCorrectAnswer = [false, false, false, false];
    $scope.correctAnswer = [false, false, false, false];
    $scope.unClickAnswer = [false, false, false, false];
    $scope.hideNextQuestion = false;
    $scope.startScreen = true;
    $scope.wrongAnswer = 0;
    $scope.rightAnswer = 0;
    $scope.questionCounter = 0;
    $scope.finishGame = false;
    $scope.pass = false;
    $scope.failed = false;
    $scope.timeoutScreen = false;
    
  }
  $scope.goBack = function () {
    window.history.back();
    resetgame();
  };
  /*Start the test and start the countdowner*/ 
  $scope.startTest = function () {
    $scope.startScreen = false;
    $scope.countDowner();
  };



  function unPaintaAnswer() {
    $scope.inCorrectAnswer = [false, false, false, false];
    $scope.correctAnswer = [false, false, false, false];
  }
  /*Put random numbers that decide the questions to the test */
  function randomNumbers() {
    questionIndex[0] = Math.floor(Math.random() * 500 + 0);
    randomNum = Math.floor(Math.random() * 500 + 0);
    for (var i = 1; i < 25; i++) {
      while (ifNumberExist(questionIndex, randomNum)) {
        randomNum = Math.floor(Math.random() * 500 + 0);
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

  /* The countdown function*/ 
  $scope.countDowner = function () {
    $scope.countDown_text = countDown;
    $scope.minute_text = $scope.minute; // update scope
    countDown--; // -1
    if (countDown < 10) {
      countDown = "0" + countDown;
    }
    if (countDown > -1) {
      $timeout($scope.countDowner, 10); // loop it again
    }
    if (countDown == 0) {
      $scope.minute--;
      countDown = 60;
    }
    if ($scope.minute < 0) {
      $scope.timeoutScreen = true;

      countDown = 60;
      $scope.minute = 2;
    }
  };

  function testcontent() {
    $scope.question = TestService.test[questionIndex[$scope.questionNumber - 1]];
    $scope.answers = TestService.test[questionIndex[$scope.questionNumber - 1]].answers;
    shuffle($scope.answers);
  }

  testcontent();
  console.log($scope.question);

  $scope.userAnswer = index => {
    $scope.questionCounter++;
    if ($scope.answers[index].type == false) {
      console.log($scope.unClickAnswer);

      $timeout(function () {
        console.log("false answer");
        $scope.inCorrectAnswer[index] = true;
        for (var i = 0; i < 4; i++) {
          if ($scope.answers[i].type == true) {
            console.log(i);
            $scope.correctAnswer[i] = true;
          }
        }

        $scope.wrongAnswer++;
      }, 100);
    }
    if ($scope.answers[index].type == true) {
      console.log("true answer");
      $scope.correctAnswer[index] = true;
      $scope.rightAnswer++;
    }
    $scope.hideNextQuestion = true;

    $scope.unClickAnswer = [true, true, true, true];
    $scope.hideNextQuestion = true;

    if ($scope.questionCounter == 25) {
      if ($scope.rightAnswer > 19) {
        $timeout(function () {

        $scope.pass = true;
      }, 3000);

      }
      if ($scope.rightAnswer < 20) {
        $timeout(function () {

          $scope.failed = true;
        }, 3000);
        console.log("failed");
      }
    }

    if ($scope.answers[index].type == false) {
      $timeout(function () {
        $scope.questionNumber++;
        $scope.hideNextQuestion = false;
        $scope.unClickAnswer = [false, false, false, false];
        console.log($scope.unClickAnswer);

        testcontent();
        unPaintaAnswer();
      }, 3000);
    }
    if ($scope.answers[index].type == true) {
      $timeout(function () {
        $scope.questionNumber++;
        $scope.hideNextQuestion = false;
        $scope.unClickAnswer = [false, false, false, false];
        console.log($scope.unClickAnswer);

        testcontent();
        unPaintaAnswer();
      }, 1000);
    }
  };

    $scope.backToHome = () => {
    resetgame();

    $scope.finishGame = true;
    $state.go("home");
  };
// Array shuffle
  function shuffle(array) {
    var m = array.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}
