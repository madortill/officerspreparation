angular
  .module("officerspreparation")
  .controller("runningCalculatorController", runningCalculatorController);

runningCalculatorController.$inject = ["$scope", "$state", "DataService"];

function runningCalculatorController($scope, $state, TrainingService) {
  //   $scope.val = 'הכנס את הדקות';

  //   clickedwork()

  $scope.clickedwork = function (minute, second) {
    console.log(minute + second);
    // var a = minute + second;
    // if (a < 3) {
    //   console.log("big");
    // }
    // console.log(a);
    if (second == null) {
      alert("הכנס שניות")
    }
    if (minute == null) {
      alert("הכנס דקות")
    }


  };
  console.log("controller work !!");
}
