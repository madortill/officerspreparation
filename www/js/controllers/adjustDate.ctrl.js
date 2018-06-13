angular
  .module("officerspreparation")
  .controller("adjustDatecontroller", adjustDatecontroller);

adjustDatecontroller.$inject = ["$scope", "$state", "DataService", "$timeout"];

function adjustDatecontroller($scope, $state, DataService, $timeout) {
  $scope.goBackExercise = function() {
    $scope.restartadjustDate();
    $state.go("exercise");
  };

  function randomNumber(num) {
    var x;
    x = Math.floor(Math.random() * num + 0);
    return x;
  }

  function ifNumExist(array, num) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === num) return array[i] === num;
    }
    return false;
  }

  $scope.dateLife = [true, true, true];
  $scope.dateLifeCounter = 3;
  console.log($scope.dateLife);

  var eventsArry = DataService.adjustDateGame;

  var iDate = randomNumber(3);
  var randomEvent = randomNumber(eventsArry.length - 1);

  var theUsedEvents = [];
  theUsedEvents.push(randomEvent);
  console.log(theUsedEvents);

  $scope.events = eventsArry[randomEvent].event;
  $scope.date = eventsArry[randomEvent].dates[iDate].date;
  var datefitEvent = eventsArry[randomEvent].dates[iDate].type;

  $scope.nextDate = function() {
    //console.log("NEXT");
    if (iDate === 3) {
      iDate = 0;
    } else iDate++;
    $scope.date = eventsArry[randomEvent].dates[iDate].date;
    datefitEvent = eventsArry[randomEvent].dates[iDate].type;
  };

  $scope.previousDate = function() {
    if (iDate === 0) {
      iDate = 3;
    } else iDate--;

    $scope.date = eventsArry[randomEvent].dates[iDate].date;
    datefitEvent = eventsArry[randomEvent].dates[iDate].type;
  };

  function addCorrectAnswer() {
    document.getElementById("date").classList.add("correctAnswer");
    document.getElementById("date").classList.add("adjustDate--correctAnswer");
    document.getElementById("event").classList.add("adjustDate--correctAnswer");
  }

  function removeCorrectAnswer() {
    document.getElementById("date").classList.remove("correctAnswer");
    document
      .getElementById("date")
      .classList.remove("adjustDate--correctAnswer");
    document
      .getElementById("event")
      .classList.remove("adjustDate--correctAnswer");
  }

  function addInCorrectAnswer() {
    document.getElementById("date").classList.add("inCorrectAnswer");
    document
      .getElementById("date")
      .classList.add("adjustDate--inCorrectAnswer");
    document
      .getElementById("event")
      .classList.add("adjustDate--inCorrectAnswer");
  }

  function removeInCorrectAnswer() {
    document.getElementById("date").classList.remove("inCorrectAnswer");
    document
      .getElementById("date")
      .classList.remove("adjustDate--inCorrectAnswer");
    document
      .getElementById("event")
      .classList.remove("adjustDate--inCorrectAnswer");
  }

  function displayFailDiv() {
    console.log("display FAIL DIV");
    document.getElementById("adjustDate--FailID").classList.add("showElement");
  }

  function displaySuccessDiv() {
    document
      .getElementById("adjustDate--SuccessID")
      .classList.add("showElement");
  }

  $scope.displayData = function(randomEvent, iDate) {
    $scope.events = eventsArry[randomEvent].event;
    $scope.date = eventsArry[randomEvent].dates[iDate].date;
    datefitEvent = eventsArry[randomEvent].dates[iDate].type;
    iDate = randomNumber(3);
  };

  $scope.restartadjustDate = function() {
    theUsedEvents = [];
    iDate = randomNumber(3);
    randomEvent = randomNumber(eventsArry.length - 1);
    $scope.dateLife = [true, true, true];
    $scope.dateLifeCounter = $scope.dateLife.length;
    document
      .getElementById("adjustDate--FailID")
      .classList.remove("showElement");
    document
      .getElementById("adjustDate--SuccessID")
      .classList.remove("showElement");
  };

  $scope.checkAnswer = function() {
    iDate = randomNumber(3);
    if (theUsedEvents.length == eventsArry.length) {
      if (datefitEvent) {
        addCorrectAnswer();
        setTimeout(
          ($scope.nextQ1 = function() {
            removeCorrectAnswer();
            $scope.restartadjustDate();
            displaySuccessDiv();
            //$state.go("adjustDateFinishPg");
          }),
          1000
        );
      } else {
        addInCorrectAnswer();
        setTimeout(
          ($scope.nextQ = function() {
            removeInCorrectAnswer();
            $scope.restartadjustDate();
            displaySuccessDiv();
            // $state.go("adjustDateFinishPg");
          }),
          1000
        );
      }
    } else {
      while (ifNumExist(theUsedEvents, randomEvent)) {
        randomEvent = randomNumber(eventsArry.length);
      }

      if (datefitEvent) {
        //console.log("YOU RIGHT");
        theUsedEvents.push(randomEvent);
        addCorrectAnswer();
        setTimeout(
          ($scope.nextQ1 = function() {
            removeCorrectAnswer();
          }),
          1000
        );
      } else {
        //console.log("YOU FAIL");
        theUsedEvents.push(randomEvent);
        $scope.dateLifeCounter--;
        $scope.dateLife[$scope.dateLifeCounter] = false;
        if ($scope.dateLifeCounter == 0) {
          $scope.restartadjustDate();
          displayFailDiv();

          // $state.go("adjustDateFinishFail");
        }
        addInCorrectAnswer();
        setTimeout(
          ($scope.nextQ = function() {
            removeInCorrectAnswer();
          }),
          1000
        );
      }
      $timeout(() => {
        $scope.displayData(randomEvent, iDate);
      }, 1000);
    }
  };

  $scope.backtoExercisePg = function() {
    $scope.restartadjustDate();
    $state.go("exercise");
  };

  $scope.restartGame = function() {
    $scope.restartadjustDate();
    $scope.events = eventsArry[randomEvent].event;
    $scope.date = eventsArry[randomEvent].dates[iDate].date;
  };
}
