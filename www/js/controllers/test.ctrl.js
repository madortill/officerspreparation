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
  $scope.inCorrectAnswer = [false, false, false, false];
  $scope.correctAnswer = [false, false, false, false];
  $scope.unClickAnswer = [false, false, false, false];
  $scope.hideNextQuestion = false;
  $scope.startScreen = true;
  $scope.wrongAnswer = 0;
  $scope.rightAnswer = 0;
  $scope.questionCounter = 0;
  $scope.finishGame = false;
  var countDown = 59;
  $scope.minute = 29;

  // function that take all the variables and init them
  function resetgame() {
    $scope.questionNumber = 1; //count the question num
    questionIndex = []; //the array to to index
    randomNum;
    rightAnswer = 0;
    wrongAnswer = 0;
    $scope.inCorrectAnswer = [false, false, false, false];
    $scope.correctAnswer = [false, false, false, false];
    $scope.unClickAnswer = [false, false, false, false];
    $scope.hideNextQuestion = false;
    $scope.startScreen = true;
    $scope.wrongAnswer = 0;
    $scope.rightAnswer = 0;
    $scope.questionCounter = 0;
    $scope.finishGame = false;
    var countDown = 59; //the second in the countdown
    $scope.minute = 29; // the minute in the countdown
  }
  resetgame();
  $scope.goBack = function () {
    window.history.back();
  };

  $scope.startTest = function () {
    $scope.startScreen = false;
    $scope.countDowner();
    resetgame();
    $scope.startScreen = false;


  };

  $scope.backToHome = () => {
    resetgame();
    // $scope.finishGame = true;
    $state.go("home");

  };

  function unPaintaAnswer() {
    $scope.inCorrectAnswer = [false, false, false, false];
    $scope.correctAnswer = [false, false, false, false];
  }

  function randomNumbers() {
    questionIndex[0] = Math.floor(Math.random() * 30 + 0);
    randomNum = Math.floor(Math.random() * 30 + 0);
    for (var i = 1; i < 30; i++) {
      while (ifNumberExist(questionIndex, randomNum)) {
        randomNum = Math.floor(Math.random() * 30 + 0);
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


  $scope.countDowner = function () {
    // function stopcountdown() {
    $scope.countDown_text = countDown;
    $scope.minute_text = $scope.minute; // update scope
    countDown--; // -1
    if (countDown < 10) {
      countDown = "0" + countDown;
    }
    if (countDown > -1) {
      $timeout($scope.countDowner, 1000); // loop it again
    }
    if (countDown == 0) {
      $scope.minute--;
      countDown = 60;
    }
    if ($scope.minute < 0) {
      // alert("timeout");
      $scope.finishGame = true;

      countDown = 60;
      $scope.minute = 2;
    }
  };
  // }

  function testcontent() {
    $scope.question =
      TestService.test[questionIndex[$scope.questionNumber - 1]];
    $scope.answers =
      TestService.test[questionIndex[$scope.questionNumber - 1]].answers;
    shuffle($scope.answers);
  }

  testcontent();
  console.log($scope.question);

  $scope.userAnswer = index => {
    $scope.questionCounter++;
    // console.log($scope.answers[index].type);
    if ($scope.answers[index].type == false) {
      console.log($scope.unClickAnswer);

      $timeout(function () {
        console.log("false answer");
        $scope.inCorrectAnswer[index] = true;
        for (var i = 0; i < 4; i++) {
          if ($scope.answers[i].type == true) {
            // $scope.correctAnswer[index] = true;
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
      $scope.finishGame = true;
    }

    console.log($scope.unClickAnswer);
    $timeout(function () {
      $scope.questionNumber++;
      $scope.hideNextQuestion = false;

      $scope.unClickAnswer = [false, false, false, false];
      console.log($scope.unClickAnswer);

      // if ($scope.questionNumber == 20) {
      //   $scope.finishGame = true;
      // }
      testcontent();
      unPaintaAnswer();
    }, 3000);
  };

  //

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
