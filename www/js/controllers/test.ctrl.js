angular.module('officerspreparation').controller('testcontroller', testcontroller);

testcontroller.$inject = ['$scope', '$state', '$timeout', 'DataService', '$interval'];


function testcontroller($scope, $state, $timeout, DataService, $interval) {
  var number = 10;

  // $scope.timer = function () {

  //   alert(number);
  //   if (number > 0) {
  //     $timeout($scope.timer(number--), 1000);
  //   }
  // }


  var countDown = 60;
  var minute = 2;
  $scope.countDowner = function () {

    $scope.countDown_text = countDown;
    $scope.minute_text = minute; // update scope
    countDown--; // -1
    if (countDown > -1) {
      $timeout($scope.countDowner, 100); // loop it again
    }
    if (countDown == 0) {
      minute--;
      countDown = 60;
    }
    if (minute < 0) {
      alert("timeout");
    }
  };


  // $scope.countDown_text = countDown;
  // $scope.countDowner();


  // $scope.secondsPassed = 0;
  // var ref;

  // $scope.startTimer = function () {
  //   //Clean interval instance if button clicked multiple times.
  //   $interval.cancel(ref);
  //   $scope.secondsPassed = 0;
  //   ref = $interval(function () {
  //     $scope.secondsPassed++;
  //     if ($scope.secondsPassed >= 30 * 60) {
  //       //Clean interval instance if we passed the 30 min mark.
  //       $interval.cancel(ref);
  //     }
  //   }, 1000);
  // };

  // //Clean the interval instance if scope destroyed
  // $scope.$on('$destroy', function () {
  //   $interval.cancel(ref);
  // });






  //   var countDownDate = new Date("2018 15:37:25").getTime();
  //   console.log(countDownDate);
  // function timer(){

  // }
  // function checkSecond(sec) {
  //   if (sec < 10 && sec >= 0) {
  //     sec = "0" + sec
  //   }; // add zero in front of numbers < 10
  //   if (sec < 0) {
  //     sec = "59"
  //   };
  //   return sec;
  // }


  // function startTimer() {
  //   var presentTime = document.getElementById('timer').innerHTML;
  //   var timeArray = presentTime.split(/[:]+/);
  //   var m = timeArray[0];
  //   var s = checkSecond((timeArray[1] - 1));
  //   if (s == 59) {
  //     m = m - 1
  //   }
  //   //if(m<0){alert('timer completed')}

  //   document.getElementById('timer').innerHTML =
  //     m + ":" + s;
  //   setTimeout(startTimer, 100);
  // }


  // console.log(startTimer());
}
