angular.module('officerspreparation').controller('billionairecontroller', billionairecontroller);

billionairecontroller.$inject = ['$scope', '$state', '$timeout', 'DataService'];


function billionairecontroller($scope, $state, $timeout, DataService) {
  var i = 0;
  $scope.theAnswers = [true, true, true, true];
  var gameLevel = 0;
  $scope.levelPoints = DataService.billionaireGame[gameLevel].points; //the points in the current level
  $scope.life = [true, true, true];
  var lifeCount = 3; // count the life in the game
  // console.log($scope.life);
  $scope.firstHelpShow = true;
  $scope.secondHelpShow = true;
  $scope.firstHelpTouch = true;
  $scope.finishGame = false;
  $scope.winFullGame = false; // show the screen if win full game
  $scope.secondHelpTouch = true;
  $scope.inCorrectAnswer = [false, false, false, false];
  $scope.correctAnswer = [false, false, false, false];

  $scope.nextQuestion1 = true;
  // get the random number to random a question in the level
  function randomNumber() {
    var x;
    x = (Math.floor((Math.random() * 4) + 0))
    // console.log(x);
    return x;
  }

  $scope.questions = DataService.billionaireGame[gameLevel].level[randomNumber()]; //the question
  // console.log(DataService.billionaireGame[3].level[randomNumber()]) //the question

  // function checktime() {
  //   alert("oran the king");
  // }

  $scope.goBack = function () {
    window.history.back();
  }

  // the first help
  // clear 50 percentage of the answer
  $scope.firstHelp = function () {
    alert("first help clicked");
    var firstHelpHide = firstHelpHide = [(Math.floor((Math.random() * 4) + 0)), (Math.floor((Math.random() * 4) + 0))];;
    while (firstHelpHide[0] == firstHelpHide[1] || $scope.questions.answers[firstHelpHide[0]].type == true || $scope.questions.answers[firstHelpHide[1]].type == true) {
      firstHelpHide = [(Math.floor((Math.random() * 4) + 0)), (Math.floor((Math.random() * 4) + 0))];
      console.log("the first" + firstHelpHide[1] + "the second" + firstHelpHide[0])
      firstHelpHide[1] = (Math.floor((Math.random() * 4) + 0));

    }

    $scope.theAnswers[firstHelpHide[1]] = false;
    $scope.theAnswers[firstHelpHide[0]] = false;
    for (var i = 0; i < 2; i++) {
      console.log(firstHelpHide[i]);
    }
    $scope.firstHelpShow = false;
    $scope.firstHelpTouch = false;
  }
  $scope.secondHelp = function () {
    alert("second help clicked");
    var firstHelpHide = firstHelpHide = [(Math.floor((Math.random() * 4) + 0)), (Math.floor((Math.random() * 4) + 0))];;
    while (firstHelpHide[0] == firstHelpHide[1] || $scope.questions.answers[firstHelpHide[0]].type == true || $scope.questions.answers[firstHelpHide[1]].type == true) {
      firstHelpHide = [(Math.floor((Math.random() * 4) + 0)), (Math.floor((Math.random() * 4) + 0))];
      console.log("the first" + firstHelpHide[1] + "the second" + firstHelpHide[0])
      firstHelpHide[1] = (Math.floor((Math.random() * 4) + 0));
    }

    $scope.theAnswers[firstHelpHide[1]] = false;
    $scope.theAnswers[firstHelpHide[0]] = false;
    for (var i = 0; i < 2; i++) {
      console.log(firstHelpHide[i]);
    }
    $scope.secondHelpShow = false;
    $scope.secondHelpTouch = false;

  }

  // function shuffle(array) {
  //   var m = array.length,
  //     t, i;
  //   while (m) {
  //     i = Math.floor(Math.random() * m--);
  //     t = array[m];
  //     array[m] = array[i];
  //     array[i] = t;
  //   }
  //   return array;
  // }

  // shuffle($scope.questions.answers);
  // console.log($scope.questions.answers);

  $scope.userAnswer = (index) => {

    $scope.nextQuestion1 = false;
    /*
    after all tha game when the user win & finish the game he will see the win screen
    */
    if (gameLevel == 14) {
      $scope.winFullGame = true; // show the screen if win full game
    }



    function paintAnswers() {
      $timeout(function () {

        for (var i = 0; i < 4; i++) {
          // console.log($scope.questions.answers[i].type);
          if ($scope.questions.answers[i].type == true) {
            $scope.correctAnswer[i] = true;

          }
        }
        // if (correctAnswerIndex != index) {
        if ($scope.questions.answers[index].type != true) {
          $scope.inCorrectAnswer[index] = true;
        }
        // }
        // unPaintAnswers();
      }, 1000);
    }


    paintAnswers();


    console.log($scope.questions.answers[index].type);
    if ($scope.questions.answers[index].type == false) {
      lifeCount--;
    }
    $scope.life[lifeCount] = false;





    function resetQuestionTemplate() {
      $scope.theAnswers = [true, true, true, true];
      // $scope.firstHelpShow = true;
      // $scope.secondHelpShow = true;
    }
    // resetQuestionTemplate();

    if (lifeCount == 0) {
      $scope.finishGame = true; // show the screen if win full game
    }
    $scope.winMoney = DataService.billionaireGame[gameLevel].points
    // console.log();
  }


  // $scope.try = () => {
  //   if (i % 2 == 0) {
  //     $scope.correctAnswer[0] = true;
  //     $scope.inCorrectAnswer[1] = true;
  //   } else {
  //     $scope.correctAnswer[0] = false;
  //     $scope.inCorrectAnswer[1] = false;
  //   }
  //   i++;
  // }
  function unPaintAnswers() {
    // for (var i = 0; i < 4; i++) {
    $scope.correctAnswer = [false, false, false, false];
    $scope.inCorrectAnswer = [false, false, false, false];
    console.log($scope.correctAnswer);
    console.log($scope.inCorrectAnswer);
    console.log("work in the seocnd time");



    // }
  }
  $scope.nextQuestion = function () {
    $scope.nextQuestion1 = true;

    unPaintAnswers();
    gameLevel++;
    $scope.questions = DataService.billionaireGame[gameLevel].level[randomNumber()];
    $scope.levelPoints = DataService.billionaireGame[gameLevel].points;
    if ($scope.firstHelpShow == true) {
      $scope.secondHelpTouch;
    }
    if ($scope.secondHelpShow == true) {
      $scope.firstHelpTouch = true;
    }

    $scope.theAnswers = [true, true, true, true];

  }
  $scope.resetGame = function () {
    // alert("dfdf");
    $scope.theAnswers = [true, true, true, true];
    gameLevel = 0;
    $scope.levelPoints = DataService.billionaireGame[gameLevel].points; //the points in the current level
    $scope.life = [true, true, true];
    lifeCount = 3; // count the life in the game
    // console.log($scope.life);
    $scope.firstHelpShow = true;
    $scope.secondHelpShow = true;
    $scope.firstHelpTouch = true;
    $scope.winFullGame = false; // show the screen if win full game
    $scope.finishGame = false;

    $scope.secondHelpTouch = true;
    $scope.inCorrectAnswer = [false, false, false, false];
    $scope.correctAnswer = [false, false, false, false];

  }


}
