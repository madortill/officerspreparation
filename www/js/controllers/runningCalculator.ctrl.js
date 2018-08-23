angular
  .module("officerspreparation")
  .controller("runningCalculatorController", runningCalculatorController);

runningCalculatorController.$inject = ["$scope", "$state", "DataService"];

function runningCalculatorController($scope, $state, TrainingService) {
  //   $scope.val = 'הכנס את הדקות';
  var genderOfUser;
  var courseName;
  var userSecond;
  var grade;
  var userMinute;
  $scope.maleSelect = false;
  $scope.femaleSelect = false;
  $scope.fighterSelect = false;
  $scope.jobSelect = false;

  $scope.genderSelect = function (gender) {
    genderOfUser = gender;
    console.log(genderOfUser);

    if (genderOfUser == 'male') {
      $scope.maleSelect = true;
      if ($scope.femaleSelect == true) {
        $scope.femaleSelect = false;
      }

    }
    if (genderOfUser == 'female') {
      $scope.femaleSelect = true;
      if ($scope.maleSelect == true) {
        $scope.maleSelect = false;
      }

    }
  }
  $scope.course = function (name) {
    courseName = name;
    console.log(courseName);

    if (courseName == 'job') {
      $scope.jobSelect = true;
      if ($scope.fighterSelect == true) {
        $scope.fighterSelect = false;
      }
    }

    if (courseName == 'fighter') {
      $scope.fighterSelect = true;
      if ($scope.jobSelect == true) {
        $scope.jobSelect = false;
      }
    }

  }

  $scope.submitButton = function (minute, second) {
    console.log(minute + second);
    userSecond = second;
    userMinute = minute;
    // var a = minute + second;
    // if (a < 3) {
    //   console.log("big");
    // }
    // console.log(a);
    // function that check the inputs value
    // function inputCheck() {
    if (second == null || minute == null || genderOfUser == null || courseName == null) {
      alert("אנא מלא את כל השדות")
      console.log("the second is " + userSecond + " the minute is" + userMinute + " the gender is " + genderOfUser + " the course name is " + courseName);




    }
    if (second > 60 || second < 0) {
      console.log("the second must to be between 0 to 60")
    }
    if (second != null && minute != null && genderOfUser != null && courseName != null & second < 60 && second > 0) {
      userGrade();

    }
    //   if (minute == null) {
    //     alert("הכנס דקות")
    //   }
    // }
    // inputCheck();
  };



  function userGrade() {
    /*************************
     * there is 4 positions to the grade male and fighter, female and fighter, men and job and female and job
     * ************************/

    if (genderOfUser == 'male' && courseName == 'job') {
      console.log("male and jobbb");
      //   if(userMinute==12)
      switch (userMinute) {
        case '9':
          grade = 100;
          break;
        case '10':
          grade = 100;
          break;
        case '11':
          grade = 100;
          break;
        case '12':
          if (userSecond < 30) {
            console.log("100 grade");
          }
          if (userSecond > 30 && userSecond < 37) {
            console.log("99 grade");
          }
          if (userSecond > 36 && userSecond < 42) {
            console.log("98 grade");
          }
          if (userSecond > 41 && userSecond < 49) {
            console.log("97 grade");
          }
          if (userSecond > 47 && userSecond < 54) {
            console.log("96 grade");
          }
          if (userSecond > 53 && userSecond < 59) {
            console.log("95 grade");
          }



          break;

      }
    }


  }
}
