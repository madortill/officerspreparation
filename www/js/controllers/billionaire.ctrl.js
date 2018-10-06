angular
  .module("officerspreparation")
  .controller("billionairecontroller", billionairecontroller);

billionairecontroller.$inject = ["$scope", "$state", "$timeout", "DataService"];

function billionairecontroller($scope, $state, $timeout, DataService) {
  var i = 0;
  var gameLevel = 0;
  var lifeCount = 3; // count the life in the game  
  $scope.theAnswers = [true, true, true, true];
  $scope.levelPoints = DataService.billionaireGame[gameLevel].points; //the points in the current level
  $scope.life = [true, true, true];
  $scope.firstHelpShow = true;
  $scope.secondHelpShow = true;
  $scope.firstHelpTouch = true;
  $scope.finishGame = false;
  $scope.winFullGame = false; // show the screen if win full game
  $scope.secondHelpTouch = true;
  $scope.inCorrectAnswer = [false, false, false, false];
  $scope.correctAnswer = [false, false, false, false];
  $scope.unClickAnswer = [false, false, false, false];

  $scope.nextQuestion1 = true;
  // get the random number to random a question in the level
  function randomNumber() {
    var x;
    x = Math.floor(Math.random() * 4 + 0);
    // console.log(x);
    return x;
  }

  $scope.questions =
    DataService.billionaireGame[gameLevel].level[randomNumber()]; //the question


/* Go to home */
  $scope.goHome = function() {
    $scope.resetGame();
    $state.go("home");
  };

  // Go to the previous page
  $scope.goBack = function() {
    window.history.back();
  };

  // The first help
  // Clear 50 precentage of the answer
  $scope.firstHelp = function() {
    var firstHelpHide = (firstHelpHide = [
      Math.floor(Math.random() * 4 + 0),
      Math.floor(Math.random() * 4 + 0)
    ]);
    while (
      firstHelpHide[0] == firstHelpHide[1] ||
      $scope.questions.answers[firstHelpHide[0]].type == true ||
      $scope.questions.answers[firstHelpHide[1]].type == true
    ) {
      firstHelpHide = [
        Math.floor(Math.random() * 4 + 0),
        Math.floor(Math.random() * 4 + 0)
      ];
   


      firstHelpHide[1] = Math.floor(Math.random() * 4 + 0);
    }

    $scope.theAnswers[firstHelpHide[1]] = false;
    $scope.theAnswers[firstHelpHide[0]] = false;
    for (var i = 0; i < 2; i++) {



    }
    $scope.firstHelpShow = false;
    $scope.firstHelpTouch = false;
  };

  
  // The second help
  // Clear 50 precentage of the answer
  $scope.secondHelp = function() {
    var firstHelpHide = (firstHelpHide = [
      Math.floor(Math.random() * 4 + 0),
      Math.floor(Math.random() * 4 + 0)
    ]);
    while (
      firstHelpHide[0] == firstHelpHide[1] ||
      $scope.questions.answers[firstHelpHide[0]].type == true ||
      $scope.questions.answers[firstHelpHide[1]].type == true
    ) {
      firstHelpHide = [
        Math.floor(Math.random() * 4 + 0),
        Math.floor(Math.random() * 4 + 0)
      ];
     
      firstHelpHide[1] = Math.floor(Math.random() * 4 + 0);
    }

    $scope.theAnswers[firstHelpHide[1]] = false;
    $scope.theAnswers[firstHelpHide[0]] = false;
    for (var i = 0; i < 2; i++) {
      console.log(firstHelpHide[i]);
    }
    $scope.secondHelpShow = false;
    $scope.secondHelpTouch = false;
  };

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

  shuffle($scope.questions.answers);

/* When the user click one of the answers the function open*/

  $scope.userAnswer = index => {
    $scope.unClickAnswer = [true, true, true, true];

  

    function paintAnswers() {
        for (var i = 0; i < 4; i++) {
          if ($scope.questions.answers[i].type == true) {
            $scope.correctAnswer[i] = true;
          }
        }
        if ($scope.questions.answers[index].type != false) {
          $timeout($scope.nextQuestion, 1000);
        }

        if ($scope.questions.answers[index].type != true) {
          $scope.inCorrectAnswer[index] = true;
          $timeout($scope.nextQuestion, 3000);
        }

        if ($scope.questions.answers[index].type == false) {
          lifeCount--;
        }
        

        // When the game finish with 3 incorrect answers, life over
       if (lifeCount == 0) {
        $timeout(function() {


         $scope.finishGame = true;
               }, 3000);

        }
        $scope.life[lifeCount] = false;
      
        $scope.nextQuestion1 = false;
      // }, 10);
    }

    paintAnswers();

      /*
    After all tha game when the user win & finish the game he will see the win screen
    */
   if (gameLevel == 14) {
    $scope.winFullGame = true; // Show the screen if win full game
  }

    function resetQuestionTemplate() {
      $scope.theAnswers = [true, true, true, true];
    }

    $scope.winMoney = DataService.billionaireGame[gameLevel].points;
  };
// Remove the color from the answers 
  function unPaintAnswers() {
    $scope.correctAnswer = [false, false, false, false];
    $scope.inCorrectAnswer = [false, false, false, false];
    console.log($scope.correctAnswer);
    console.log($scope.inCorrectAnswer);
  }
  $scope.nextQuestion = function() {
    $scope.nextQuestion1 = true;
    $scope.unClickAnswer = [false, false, false, false];

    unPaintAnswers();


    gameLevel++;
    $scope.questions = DataService.billionaireGame[gameLevel].level[randomNumber()];
    $scope.levelPoints = DataService.billionaireGame[gameLevel].points;
    if ($scope.firstHelpShow == true) {
      $scope.secondHelpTouch = true;
    }
    if ($scope.secondHelpShow == true) {
      $scope.firstHelpTouch = true;
    }

    $scope.theAnswers = [true, true, true, true];
    shuffle($scope.questions.answers);
  };



  /*Reset all the game*/

  $scope.resetGame = function() {
    i = 0;
    $scope.theAnswers = [true, true, true, true];
    gameLevel = 0;
    $scope.levelPoints = DataService.billionaireGame[gameLevel].points; //the points in the current level
    $scope.life = [true, true, true];
    lifeCount = 3; // count the life in the game
    $scope.firstHelpShow = true;
    $scope.secondHelpShow = true;
    $scope.firstHelpTouch = true;
    $scope.finishGame = false;
    $scope.winFullGame = false; // show the screen if win full game
    $scope.secondHelpTouch = true;
    $scope.inCorrectAnswer = [false, false, false, false];
    $scope.correctAnswer = [false, false, false, false];
    $scope.unClickAnswer = [false, false, false, false];
    $scope.nextQuestion1 = true;
  };
}
