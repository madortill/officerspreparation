angular.module('officerspreparation').controller('billionairecontroller', billionairecontroller);

billionairecontroller.$inject = ['$scope', '$state', 'DataService'];


function billionairecontroller($scope, $state, DataService) {
  var gameLevel = 0;
  $scope.levelPoints = DataService.billionaireGame[gameLevel].points; //the points in the current level
  $scope.life = DataService.billionaireGameLife.life;
  console.log($scope.life);

  // get the random number to random a question in the level

  function randomNumber() {
    var x;
    x = (Math.floor((Math.random() * 4) + 0))
    // console.log(x);
    return x;
  }

  $scope.questions = DataService.billionaireGame[gameLevel].level[randomNumber()]; //the question


  // function checktime() {
  //   alert("oran the king");
  // }

  $scope.goBack = function () {
    window.history.back();
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
  console.log($scope.questions.answers);

  $scope.userAnswer = (index) => {
    if ($scope.questions.answers[index].type == true) {
      alert("u success");
    }
    gameLevel++;
    if (gameLevel == 2) {
      alert("finishhhhhhhhhhhh");
    }
    $scope.questions = DataService.billionaireGame[i].level[randomNumber()];
    $scope.levelPoints = DataService.billionaireGame[i].points;

    console.log(DataService.billionaireGame[0].level[0]);
    // setTimeout(checktime, 3000);

  }





}
