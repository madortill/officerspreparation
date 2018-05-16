angular.module('officerspreparation').controller('billionairecontroller', billionairecontroller);

billionairecontroller.$inject = ['$scope', '$state', 'DataService'];


function billionairecontroller($scope, $state, DataService) {
  var i = 0;
  $scope.theAnswers = [true, true, true, true];
  var gameLevel = 0;
  $scope.levelPoints = DataService.billionaireGame[gameLevel].points; //the points in the current level
  $scope.life = [true, true, true];
  var lifeCount = 3; // count the life in the game
  // console.log($scope.life);
  $scope.firstHelpShow = true;
  $scope.secondHelpShow = true;
  $scope.inCorrectAnswer = [false, false, false, false];
  $scope.correctAnswer = [false, false, false, false];
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
    function unPaintAnswers() {
      for (var i = 0; i < 4; i++) {
        $scope.correctAnswer[i] = false;
        $scope.inCorrectAnswer[i] = false;
        console.log("work in the seocnd time");


      }
    }

    function paintAnswers() {

      for (var i = 0; i < 4; i++) {
        console.log($scope.questions.answers[i].type);
        if ($scope.questions.answers[i].type == true) {
          $scope.correctAnswer[i] = true;
          var correctAnswerIndex = i;
          console.log("the index" + correctAnswerIndex);
        }
      }
      // if (correctAnswerIndex != index) {
      $scope.inCorrectAnswer[index] = true;
      // }
      setTimeout(unPaintAnswers, 1500);
    }


    paintAnswers();

    // console.log("the game level is" + gameLevel);

    // if ($scope.questions.answers[index].type == true) {
    //   // alert("u success");
    // }
    // if()
    console.log($scope.questions.answers[index].type);
    if ($scope.questions.answers[index].type == false) {
      lifeCount--;
    }
    $scope.life[lifeCount] = false;
    // console.log($scope.life[gameLevel]);
    gameLevel++;
    if (gameLevel == 3) {
      // alert("finishhhhhhhhhhhh");
    }
    $scope.questions = DataService.billionaireGame[gameLevel].level[randomNumber()];
    $scope.levelPoints = DataService.billionaireGame[gameLevel].points;

    console.log(DataService.billionaireGame[0].level[0]);


    function resetQuestionTemplate() {
      $scope.theAnswers = [true, true, true, true];
      // $scope.firstHelpShow = true;
      // $scope.secondHelpShow = true;
    }
    resetQuestionTemplate();
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


}
