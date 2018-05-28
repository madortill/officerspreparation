angular.module('officerspreparation').controller('testcontroller', testcontroller);

testcontroller.$inject = ['$scope', '$state', '$timeout', 'DataService'];


function testcontroller($scope, $state, $timeout, DataService) {
  $scope.go = function () {
    $timeout(function () {
      alert("Hjhjjh");
    }, 2500)
  }

  //   var countDownDate = new Date("2018 15:37:25").getTime();
  //   console.log(countDownDate);
  // function timer(){

  // }
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
      sec = "0" + sec
    }; // add zero in front of numbers < 10
    if (sec < 0) {
      sec = "59"
    };
    return sec;
  }


  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
      m = m - 1
    }
    //if(m<0){alert('timer completed')}

    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 100);
  }


  console.log(startTimer());
}
