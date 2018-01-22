angular.module('MemoryGame').controller('MemoryGameController', MemoryGameController);

MemoryGameController.$inject = ['$scope', 'DataService'];

function MemoryGameController($scope, DataService) {
  // Run shuffle on each object (term/definition)

  // onClick - check if matches (term.index == definition.index)

  // $scope.terms = DataService
  $scope.definitions = DataService.data.cards.definitions
  $scope.terms = DataService.data.cards.terms;
  $scope.life1 = DataService.data.life1;
  $scope.restartgame2 = DataService.data.restartgame;

  // $scope.cards = DataService.data.cards;
  var index1 = 51,
    index2 = 50;
  var term = 50,
    index1,
    definition = 51;
  var count = 0;
  var termcount = 0;
  var defindex = 555;
  var termindex = 444;
  var wincount = 0;
  // $scope.isclickenenable1 = false; // var than change when  we cant use another card .
  // $scope.isclickenenable2 = false; // var than change when  we cant use another card 
  $scope.answersscreen = false;
  $scope.definitiontouch = false;
  $scope.termtouch = false;
  $scope.donttouchterm = false;
  $scope.donttouchdef = false;
  // $scope.secondclickterm = false;
  $scope.toMenuScreen = false;
  $scope.gameover = false;
  $scope.levelfinished = false;
  $scope.correctanswer = false;
  $scope.incorrectanswer = false;
  // $scope.life1 = [true, true, true, true]; //life of the player,start from 3 life in the game
  var lifecount = 4; //the lifes count know when the lifes endeing
  // check if the cards equal

  // $scope.life1 = () => {
  //   console.log("todgdgdgdgdgdgdgdgdg" + life1[0]);
  // }
  // toggle-class="flipped "





  $scope.equalcards = function () {

    /*********************************************
     * here we can change the number of the index
     * and than we can matched the cards
     * 
     */


    if ($scope.termtouch == true && $scope.definitiontouch == true) {
      if (index1 == index2) {
        $scope.donttouchdef = false;
        $scope.donttouchterm = false;
        // DataService.cards[term].termmatched = true;
        // DataService.cards[definition].defmatched = true;
        wincount++;

        $scope.correctanswer = true;
        $scope.answersscreen = true;
        // $scope.isclickenenable = false;
        // if the cards not equal, the player lose 1 life
      } else {
        $scope.donttouchdef = false;
        $scope.donttouchterm = false;
        $scope.definitions[defindex].matched = false; // var then hide card if the card touched
        $scope.terms[termindex].matched = false; // var then hide card if the card touched

        DataService.data.refFlipped.toggleclass;
        $scope.incorrectanswer = true;
        // $scope.isclickenenable = false;

        $scope.answersscreen = true;
        $scope.life1[4 - lifecount] = false;
        lifecount--;
        if (lifecount == 0) {
          $scope.gameover = true;
          $scope.answersscreen = true;

        }
      }
      count = 0;
      if (wincount == 9) {
        $scope.levelfinished = true;
        for (var i = 0; i < 9; i++) {
          $scope.definitions[i].matched = false; // var then hide card if the card touched
          $scope.terms[i].matched = false; // var then hide card if the card touched
        }
      }
    }
  }

  // reset the game - reset all the  variable
  $scope.resetgame = () => {
    $scope.answersscreen = false;
    $scope.gameover = false;
    $scope.correctanswer = false;
    $scope.incorrectanswer = false;
    // $scope.life1 = [true, true, true, true];
    term = 50
    definition = 51;
    lifecount = 4;
    console.log(DataService.cards);
    for (var i = 0; i < 9; i++) {
      $scope.definitions[i].matched = false; // var then hide card if the card touched
      $scope.terms[i].matched = false; // var then hide card if the card touched

    }
    for (var i = 0; i < 4; i++) {
      $scope.life1[i] = true;
    }

  }

  $scope.backtocards = () => {
    $scope.correctanswer = false;
    $scope.incorrectanswer = false;
    if (lifecount != 0) {
      $scope.answersscreen = false;
    }
    $scope.definitiontouch = false;
    $scope.termtouch = false;
  }

  $scope.termclicked = (index) => {
    termindex = index;
    console.log($scope.terms[index].value);

    // console.log($event);
    // if (!$scope.termtouch && termcount % 2 == 0) {
    $scope.termtouch = true;
    // console.log(DataService);
    $scope.cardCurrentValueTerm = $scope.terms[index].value;
    index1 = $scope.terms[index].index;
    $scope.donttouchterm = true;

    // console.log("the term index" + index1);
    $scope.terms[termindex].matched = true;
    // console.log(index1);
    // DataService.cards.terms[index].matched = true;
    // index1 = index;
    term = index;
    DataService.data.restartgame == false;



  }

  $scope.definitionclicked = (index) => {
    $scope.cardCurrentValueDef = $scope.definitions[index].value;
    $scope.definitions[index].matched = true;
    // console.log($scope.cards.definitions[index].matched);
    index2 = $scope.definitions[index].index;
    // console.log(index2);
    console.log("the def index" + index2);
    $scope.donttouchdef = true;
    definition = index;
    $scope.definitiontouch = true;
    defindex = index;
    DataService.data.restartgame == false;
    console.log("the rertart var = " + DataService.data.restartgame);

  }


  $scope.bigCardTouchTerm = () => {
    $scope.termtouch = false;
    $scope.terms[termindex].matched = false; // var then hide card if the card touched
    $scope.donttouchterm = false;


  }

  $scope.bigCardTouchDef = () => {
    $scope.definitiontouch = false;
    $scope.definitions[defindex].matched = false; // var then hide card if the card touched
    $scope.donttouchdef = false;



  }
  $scope.tomenu = () => {
    $scope.toMenuScreen = true;
    $scope.answersscreen = true;

  }
  $scope.togame = () => {
    $scope.toMenuScreen = false;
    $scope.answersscreen = false;
  }
  //   $scope.goToGame = function (subject) {
  //   DataService.gameInit(subject);
  //   $state.go('game');
  // }
  $scope.resetgame();


}
