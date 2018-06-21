angular
  .module("officerspreparation")
  .controller("adjustDatecontroller", adjustDatecontroller);

adjustDatecontroller.$inject = ["$scope", "$state", "DataService", "$timeout"];

function adjustDatecontroller($scope, $state, DataService, $timeout) {
  $scope.dateLife = [true, true, true];
  $scope.dateLifeCounter = 3;
  var eventsArry = DataService.adjustDateGame;
  var iDate = randomNumber(3);
  var randomEvent = randomNumber(eventsArry.length - 1);
  var theUsedEvents = [];
  theUsedEvents.push(randomEvent);
  $scope.events = eventsArry[randomEvent].event;
  $scope.date = eventsArry[randomEvent].dates[iDate].date;
  var datefitEvent = eventsArry[randomEvent].dates[iDate].type;
  $scope.ifDateNotFit = false;
  $scope.ifDateFit = false;
  $scope.win = false;
  $scope.loose = false;

  //Back button - going back to exercises pg
  $scope.goBackExercise = function () {
    $scope.restartadjustDate();
    $state.go("exercise");
  };

  //random num from 0 - num
  function randomNumber(num) {
    var x;
    x = Math.floor(Math.random() * num + 0);
    return x;
  }

  //this function checks if num exist in the arry
  function ifNumExist(array, num) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === num) return array[i] === num;
    }

    return false;
  }

  //black right arrow, lists to the next date
  $scope.nextDate = function () {
    //console.log("NEXT");
    if (iDate === 3) {
      iDate = 0;
    } else iDate++;
    $scope.date = eventsArry[randomEvent].dates[iDate].date;
    datefitEvent = eventsArry[randomEvent].dates[iDate].type;
  };

  //black left arrow, lists to the previous date
  $scope.previousDate = function () {
    if (iDate === 0) {
      iDate = 3;
    } else iDate--;

    $scope.date = eventsArry[randomEvent].dates[iDate].date;
    datefitEvent = eventsArry[randomEvent].dates[iDate].type;
  };

  //displays new event and new date after every time the player checks his answer
  $scope.displayData = function (randomEvent, iDate) {
    $scope.events = eventsArry[randomEvent].event;
    $scope.date = eventsArry[randomEvent].dates[iDate].date;
    datefitEvent = eventsArry[randomEvent].dates[iDate].type;
    iDate = randomNumber(3);
  };

  //restart the game
  $scope.restartadjustDate = function () {
    theUsedEvents = [];
    iDate = randomNumber(3);
    randomEvent = randomNumber(eventsArry.length - 1);
    theUsedEvents.push(randomEvent);
    $scope.displayData(randomEvent, iDate);
    $scope.dateLife = [true, true, true];
    $scope.dateLifeCounter = $scope.dateLife.length;
    datefitEvent = eventsArry[randomEvent].dates[iDate].type;
    $scope.win = false;
    $scope.loose = false;
  };

  $scope.checkAnswer = function () {
    iDate = randomNumber(3);
    if (theUsedEvents.length == 6) {
      if (datefitEvent) {
        $scope.ifDateFit = true;
        $timeout(() => {
          $scope.ifDateFit = false;
          $scope.restartadjustDate();
          $scope.win = true;
          console.log($scope.win);
        }, 1000);
        //$state.go("adjustDateFinishPg");
      } else if (!datefitEvent) {
        $scope.dateLifeCounter--;
        if ($scope.dateLifeCounter == 0) {
          $scope.ifDateNotFit = true;
          $timeout(() => {
            $scope.ifDateNotFit = false;
            $scope.restartadjustDate();
            $scope.loose = true;
          }, 1000);
        } else {
          $scope.ifDateFit = true;
          $timeout(() => {
            $scope.ifDateFit = false;
            $scope.restartadjustDate();
            $scope.win = true;
          }, 1000);
        }
      }
    } else {
      while (ifNumExist(theUsedEvents, randomEvent)) {
        randomEvent = randomNumber(eventsArry.length);
      }
      theUsedEvents.push(randomEvent);

      if (datefitEvent) {
        console.log("YOU RIGHT");
        //theUsedEvents.push(randomEvent);
        $scope.ifDateFit = true;
        $timeout(() => {
          $scope.ifDateFit = false;
        }, 1000);
      } else {
        console.log("YOU FAIL");
        //theUsedEvents.push(randomEvent);
        $scope.dateLifeCounter--;
        $scope.dateLife[$scope.dateLifeCounter] = false;
        //console.log($scope.dateLifeCounter);
        if ($scope.dateLifeCounter == 0) {
          $scope.restartadjustDate();
          $scope.loose = true;
        }
        $scope.ifDateNotFit = true;
        $timeout(() => {
          $scope.ifDateNotFit = false;
        }, 1000);
      }
      $timeout(() => {
        $scope.displayData(randomEvent, iDate);
        datefitEvent = eventsArry[randomEvent].dates[iDate].type;
      }, 1000);
    }
  };

  //after finishing the game
  //the back button (חזרה)
  $scope.backtoExercisePg = function () {
    $scope.restartadjustDate();
    $state.go("exercise");
  };

  $scope.restartGame = function () {
    $scope.restartadjustDate();
    $scope.events = eventsArry[randomEvent].event;
    $scope.date = eventsArry[randomEvent].dates[iDate].date;
  };
}
