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
  $scope.resultScreen = false;
  $scope.missingItems = false;

  $scope.goBack = function () {
    window.history.back();
  }

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
    if (second != null && minute != null && genderOfUser != null && courseName != null && second < 60 && second > -1) {
      userGrade();

    }
    //   if (minute == null) {
    //     alert("הכנס דקות")
    //   }
    // }
    // inputCheck();
  };



  function userGrade() {
    console.log(genderOfUser + courseName);

    /*************************
     * there is 4 positions to the grade male and fighter, female and fighter, men and job and female and job
     * ************************/

    if (genderOfUser == 'male' && courseName == 'job') {
      console.log("male and jobbb");
      //   if(userMinute==12)
      if (userMinute < 12) {
        grade = 100;
      }
      switch (userMinute) {

        case 12:
          if (userSecond < 30) {
            console.log("100 grade");
            grade = 100;
          }
          if (userSecond > 30 && userSecond < 37) {
            console.log("99 grade");
            grade = 99;
          }
          if (userSecond > 36 && userSecond < 42) {
            console.log("98 grade");
            grade = 98;
          }
          if (userSecond > 41 && userSecond < 48) {
            console.log("97 grade");
            grade = 97;
          }
          if (userSecond > 47 && userSecond < 54) {
            console.log("96 grade");
            grade = 96;
          }
          if (userSecond > 53 && userSecond < 59) {
            console.log("95 grade");
            grade = 95;
          }
          if (userSecond > 58 && userSecond < 60) {
            console.log("94 grade");
            grade = 94;
          }



          break;
        case 13:
          if (userSecond > -1 && userSecond < 5) {
            grade = 94;
          }
          if (userSecond > 4 && userSecond < 10) {
            grade = 93;
          }
          if (userSecond > 9 && userSecond < 16) {
            grade = 92;
          }
          if (userSecond > 15 && userSecond < 22) {
            grade = 91;
          }
          if (userSecond > 21 && userSecond < 27) {
            grade = 90;
          }
          if (userSecond > 26 && userSecond < 33) {
            grade = 89;
          }
          if (userSecond > 32 && userSecond < 39) {
            grade = 88;
          }
          if (userSecond > 38 && userSecond < 44) {
            grade = 87;
          }
          if (userSecond > 43 && userSecond < 50) {
            grade = 86;
          }
          if (userSecond > 49 && userSecond < 55) {
            grade = 85;
          }
          if (userSecond > 54 && userSecond < 60) {
            grade = 84;
          }



          break;
        case 14:
          if (userSecond == 0) {
            grade = 84;
          }
          if (userSecond > 0 && userSecond < 7) {
            grade = 83;
          }
          if (userSecond > 6 && userSecond < 12) {
            grade = 82;
          }
          if (userSecond > 11 && userSecond < 18) {
            grade = 81;
          }
          if (userSecond > 17 && userSecond < 24) {
            grade = 80;
          }
          if (userSecond > 23 && userSecond < 29) {
            grade = 79;
          }
          if (userSecond > 28 && userSecond < 35) {
            grade = 78;
          }
          if (userSecond > 34 && userSecond < 40) {
            grade = 77;
          }
          if (userSecond > 39 && userSecond < 46) {
            grade = 76;
          }
          if (userSecond > 45 && userSecond < 52) {
            grade = 75;
          }
          if (userSecond > 51 && userSecond < 57) {
            grade = 74;
          }
          if (userSecond > 56 && userSecond < 60) {
            grade = 73;
          }



          break;
        case 15:
          if (userSecond > -1 && userSecond < 3) {
            grade = 73;
          }
          if (userSecond > 2 && userSecond < 9) {
            grade = 72;
          }
          if (userSecond > 8 && userSecond < 14) {
            grade = 71;
          }
          if (userSecond > 13 && userSecond < 20) {
            grade = 70;
          }
          if (userSecond > 19 && userSecond < 25) {
            grade = 69;
          }
          if (userSecond > 24 && userSecond < 31) {
            grade = 68;
          }
          if (userSecond > 30 && userSecond < 37) {
            grade = 67;
          }
          if (userSecond > 36 && userSecond < 42) {
            grade = 66;
          }
          if (userSecond > 41 && userSecond < 48) {
            grade = 65;
          }
          if (userSecond > 47 && userSecond < 54) {
            grade = 64;
          }
          if (userSecond > 53 && userSecond < 59) {
            grade = 63;
          }
          if (userSecond > 58 && userSecond < 60) {
            grade = 62;
          }
          break;
        case 16:
          if (userSecond > -1 && userSecond < 5) {
            grade = 62;
          }
          if (userSecond > 4 && userSecond < 10) {
            grade = 61;
          }
          if (userSecond > 9 && userSecond < 16) {
            grade = 60;
          }
          if (userSecond > 15 && userSecond < 22) {
            grade = 59;
          }
          if (userSecond > 21 && userSecond < 27) {
            grade = 58;
          }
          if (userSecond > 26 && userSecond < 33) {
            grade = 57;
          }
          if (userSecond > 32 && userSecond < 39) {
            grade = 56;
          }
          if (userSecond > 38 && userSecond < 44) {
            grade = 55;
          }
          if (userSecond > 43 && userSecond < 50) {
            grade = 54;
          }
          if (userSecond > 49 && userSecond < 55) {
            grade = 53;
          }
          if (userSecond > 54 && userSecond < 60) {
            grade = 52;
          }

          break;

      }
      if (userMinute > 16) {
        grade = 50;
        console.log("the grade less than 50")
      }
      console.log("the grade is " + grade);

    }

    if (genderOfUser == 'female' && courseName == 'job') {
      console.log("female and jobbb");
      console.log("the minute" + userMinute + "the second" + userSecond);
      //   if(userMinute==12)
      if (userMinute > 20) {
        grade = 50;
        console.log("the grade less than 50")
      }
      if (userMinute < 14) {
        grade = 100;
      }
      switch (userMinute) {

        case 14:
          if (userSecond < 40) {
            grade = 100;
          }
          if (userSecond > 40 && userSecond < 49) {
            grade = 99;
          }
          if (userSecond > 48 && userSecond < 57) {
            grade = 98;
          }
          if (userSecond > 56 && userSecond < 60) {
            grade = 97;
          }
          break;
        case 15:
          if (userSecond > -1 && userSecond < 5) {
            grade = 97;
          }
          if (userSecond > 4 && userSecond < 13) {
            grade = 96;
          }
          if (userSecond > 12 && userSecond < 21) {
            grade = 95;
          }
          if (userSecond > 20 && userSecond < 29) {
            grade = 94;
          }
          if (userSecond > 28 && userSecond < 37) {
            grade = 93;
          }
          if (userSecond > 36 && userSecond < 45) {
            grade = 92;
          }
          if (userSecond > 44 && userSecond < 53) {
            grade = 91;
          }
          if (userSecond > 52 && userSecond < 60) {
            grade = 90;
          }
          break;
        case 16:
          if (userSecond > -1 && userSecond < 1) {
            grade = 90;
          }
          if (userSecond > 0 && userSecond < 9) {
            grade = 89;
          }
          if (userSecond > 8 && userSecond < 17) {
            grade = 88;
          }
          if (userSecond > 16 && userSecond < 25) {
            grade = 87;
          }
          if (userSecond > 24 && userSecond < 33) {
            grade = 86;
          }
          if (userSecond > 32 && userSecond < 41) {
            grade = 85;
          }
          if (userSecond > 40 && userSecond < 49) {
            grade = 84;
          }
          if (userSecond > 48 && userSecond < 57) {
            grade = 83;
          }
          if (userSecond > 56 && userSecond < 60) {
            grade = 82;
          }
          break;
        case 17:
          if (userSecond > -1 && userSecond < 5) {
            grade = 82;
          }
          if (userSecond > 4 && userSecond < 13) {
            grade = 81;
          }
          if (userSecond > 12 && userSecond < 21) {
            grade = 80;
          }
          if (userSecond > 20 && userSecond < 29) {
            grade = 79;
          }
          if (userSecond > 28 && userSecond < 37) {
            grade = 78;
          }
          if (userSecond > 36 && userSecond < 45) {
            grade = 77;
          }
          if (userSecond > 44 && userSecond < 53) {
            grade = 76;
          }
          if (userSecond > 52 && userSecond < 60) {
            grade = 75;
          }

          break;
        case 18:
          if (userSecond > -1 && userSecond < 1) {
            grade = 75;
          }
          if (userSecond > 0 && userSecond < 9) {
            grade = 74;
          }
          if (userSecond > 8 && userSecond < 17) {
            grade = 73;
          }
          if (userSecond > 16 && userSecond < 25) {
            grade = 72;
          }
          if (userSecond > 24 && userSecond < 33) {
            grade = 71;
          }
          if (userSecond > 32 && userSecond < 41) {
            grade = 70;
          }
          if (userSecond > 40 && userSecond < 49) {
            grade = 69;
          }
          if (userSecond > 48 && userSecond < 57) {
            grade = 68;
          }
          if (userSecond > 56 && userSecond < 60) {
            grade = 67;
          }

          break;
        case 19:
          if (userSecond > -1 && userSecond < 5) {
            grade = 67;
          }
          if (userSecond > 4 && userSecond < 13) {
            grade = 66;
          }
          if (userSecond > 12 && userSecond < 21) {
            grade = 65;
          }
          if (userSecond > 20 && userSecond < 29) {
            grade = 64;
          }
          if (userSecond > 28 && userSecond < 37) {
            grade = 63;
          }
          if (userSecond > 36 && userSecond < 45) {
            grade = 62;
          }
          if (userSecond > 44 && userSecond < 53) {
            grade = 61;
          }
          if (userSecond > 52 && userSecond < 60) {
            grade = 60;
          }
          break;
        case 20:
          if (userSecond > -1 && userSecond < 1) {
            grade = 60;
          }
          if (userSecond > 0 && userSecond < 9) {
            grade = 59;
          }
          if (userSecond > 8 && userSecond < 17) {
            grade = 58;
          }
          if (userSecond > 16 && userSecond < 25) {
            grade = 57;
          }
          if (userSecond > 24 && userSecond < 33) {
            grade = 56;
          }
          if (userSecond > 32 && userSecond < 41) {
            grade = 55;
          }
          if (userSecond > 40 && userSecond < 49) {
            grade = 54;
          }
          if (userSecond > 48 && userSecond < 57) {
            grade = 53;
          }
          if (userSecond > 48 && userSecond < 57) {
            grade = 52;
          }
          break;
      }



      //   if (userMinute > 16) {
      //     grade = 50;
      //     console.log("the grade less than 50")
      //   }

    }
    if (genderOfUser == 'male' && courseName == 'fighter') {

      if (userMinute > 15) {
        grade = 50;
        console.log("the grade less than 50");
      }
      if (userMinute < 10) {
        grade = 100;
      }
      switch (userMinute) {

        case 10:
          if (userSecond < 13) {
            grade = 100;
          }
          if (userSecond > 12 && userSecond < 20) {
            grade = 99;
          }
          if (userSecond > 19 && userSecond < 26) {
            grade = 98;
          }
          if (userSecond > 25 && userSecond < 32) {
            grade = 97;
          }
          if (userSecond > 31 && userSecond < 39) {
            grade = 96;
          }
          if (userSecond > 38 && userSecond < 45) {
            grade = 95;
          }
          if (userSecond > 44 && userSecond < 52) {
            grade = 94;
          }
          if (userSecond > 51 && userSecond < 58) {
            grade = 93;
          }
          if (userSecond > 57 && userSecond < 60) {
            grade = 92;
          }
          break;
        case 11:
          if (userSecond < 4) {
            grade = 92;
          }
          if (userSecond > 3 && userSecond < 11) {
            grade = 91;
          }
          if (userSecond > 10 && userSecond < 17) {
            grade = 90;
          }
          if (userSecond > 16 && userSecond < 24) {
            grade = 89;
          }
          if (userSecond > 23 && userSecond < 30) {
            grade = 88;
          }
          if (userSecond > 29 && userSecond < 37) {
            grade = 87;
          }
          if (userSecond > 36 && userSecond < 43) {
            grade = 86;
          }
          if (userSecond > 42 && userSecond < 49) {
            grade = 85;
          }
          if (userSecond > 48 && userSecond < 56) {
            grade = 84;
          }
          if (userSecond > 55 && userSecond < 60) {
            grade = 83;
          }

          break;
        case 12:
          if (userSecond < 2) {
            grade = 83;
          }
          if (userSecond > 1 && userSecond < 9) {
            grade = 82;
          }
          if (userSecond > 8 && userSecond < 15) {
            grade = 81;
          }
          if (userSecond > 14 && userSecond < 21) {
            grade = 80;
          }
          if (userSecond > 20 && userSecond < 28) {
            grade = 79;
          }
          if (userSecond > 27 && userSecond < 34) {
            grade = 78;
          }
          if (userSecond > 33 && userSecond < 41) {
            grade = 77;
          }
          if (userSecond > 40 && userSecond < 47) {
            grade = 76;
          }
          if (userSecond > 46 && userSecond < 54) {
            grade = 75;
          }
          if (userSecond > 53 && userSecond < 60) {
            grade = 74;
          }

          break;
        case 13:

          if (userSecond > -1 && userSecond < 6) {
            grade = 73;
          }
          if (userSecond > 5 && userSecond < 13) {
            grade = 72;
          }
          if (userSecond > 12 && userSecond < 19) {
            grade = 71;
          }
          if (userSecond > 18 && userSecond < 26) {
            grade = 70;
          }
          if (userSecond > 25 && userSecond < 32) {
            grade = 69;
          }
          if (userSecond > 31 && userSecond < 38) {
            grade = 68;
          }
          if (userSecond > 37 && userSecond < 45) {
            grade = 67;
          }
          if (userSecond > 44 && userSecond < 51) {
            grade = 66;
          }
          if (userSecond > 50 && userSecond < 58) {
            grade = 65;
          }
          if (userSecond > 57 && userSecond < 60) {
            grade = 64;
          }

          break;
        case 14:

          if (userSecond > -1 && userSecond < 4) {
            grade = 64;
          }
          if (userSecond > 3 && userSecond < 11) {
            grade = 63;
          }
          if (userSecond > 10 && userSecond < 17) {
            grade = 62;
          }
          if (userSecond > 16 && userSecond < 23) {
            grade = 61;
          }
          if (userSecond > 22 && userSecond < 30) {
            grade = 60;
          }
          if (userSecond > 29 && userSecond < 36) {
            grade = 59;
          }
          if (userSecond > 35 && userSecond < 43) {
            grade = 58;
          }
          if (userSecond > 42 && userSecond < 49) {
            grade = 57;
          }
          if (userSecond > 48 && userSecond < 55) {
            grade = 56;
          }
          if (userSecond > 54 && userSecond < 60) {
            grade = 55;
          }

          break;
        case 15:

          if (userSecond > 20) {
            grade = 50;
          }
          if (userSecond > -1 && userSecond < 2) {
            grade = 55;
          }
          if (userSecond > 1 && userSecond < 8) {
            grade = 54;
          }
          if (userSecond > 7 && userSecond < 15) {
            grade = 53;
          }
          if (userSecond > 14 && userSecond < 21) {
            grade = 52;
          }
          break;
      }
    }

    if (genderOfUser == 'female' && courseName == 'fighter') {

      if (userMinute > 20) {
        grade = 50;
        console.log("the grade less than 50");
      }
      if (userMinute < 12) {
        grade = 100;
      }
      switch (userMinute) {

        case 12:
          if (userSecond < 39) {
            grade = 100;
          }
          if (userSecond > 38 && userSecond < 48) {
            grade = 99;
          }
          if (userSecond > 47 && userSecond < 58) {
            grade = 98;
          }
          if (userSecond > 57 && userSecond < 60) {
            grade = 97;
          }
          break;


        case 13:
          if (userSecond > -1 && userSecond < 7) {
            grade = 97;
          }
          if (userSecond > 6 && userSecond < 16) {
            grade = 96;
          }
          if (userSecond > 15 && userSecond < 25) {
            grade = 95;
          }
          if (userSecond > 24 && userSecond < 34) {
            grade = 94;
          }
          if (userSecond > 33 && userSecond < 43) {
            grade = 93;
          }
          if (userSecond > 42 && userSecond < 52) {
            grade = 92;
          }
          if (userSecond > 51 && userSecond < 60) {
            grade = 91;
          }

          break;
        case 14:
          if (userSecond > -1 && userSecond < 1) {
            grade = 91;
          }
          if (userSecond > 0 && userSecond < 10) {
            grade = 90;
          }
          if (userSecond > 9 && userSecond < 19) {
            grade = 89;
          }
          if (userSecond > 18 && userSecond < 28) {
            grade = 88;
          }
          if (userSecond > 27 && userSecond < 38) {
            grade = 87;
          }
          if (userSecond > 37 && userSecond < 47) {
            grade = 86;
          }
          if (userSecond > 46 && userSecond < 56) {
            grade = 85;
          }
          if (userSecond > 55 && userSecond < 60) {
            grade = 84;
          }
          break;
        case 15:
          if (userSecond > -1 && userSecond < 5) {
            grade = 84;
          }
          if (userSecond > 4 && userSecond < 14) {
            grade = 83;
          }
          if (userSecond > 13 && userSecond < 23) {
            grade = 82;
          }
          if (userSecond > 22 && userSecond < 32) {
            grade = 81;
          }
          if (userSecond > 31 && userSecond < 41) {
            grade = 80;
          }
          if (userSecond > 40 && userSecond < 50) {
            grade = 79;
          }
          if (userSecond > 49 && userSecond < 59) {
            grade = 78;
          }
          if (userSecond > 58 && userSecond < 60) {
            grade = 77;
          }
          break;
        case 16:
          if (userSecond > -1 && userSecond < 9) {
            grade = 77;
          }
          if (userSecond > 8 && userSecond < 18) {
            grade = 76;
          }
          if (userSecond > 17 && userSecond < 27) {
            grade = 75;
          }
          if (userSecond > 26 && userSecond < 36) {
            grade = 74;
          }
          if (userSecond > 35 && userSecond < 45) {
            grade = 73;
          }
          if (userSecond > 44 && userSecond < 54) {
            grade = 72;
          }
          if (userSecond > 53 && userSecond < 60) {
            grade = 71;
          }

          break;
        case 16:
          if (userSecond > -1 && userSecond < 9) {
            grade = 77;
          }
          if (userSecond > 8 && userSecond < 18) {
            grade = 76;
          }
          if (userSecond > 17 && userSecond < 27) {
            grade = 75;
          }
          if (userSecond > 26 && userSecond < 36) {
            grade = 74;
          }
          if (userSecond > 35 && userSecond < 45) {
            grade = 73;
          }
          if (userSecond > 44 && userSecond < 54) {
            grade = 72;
          }
          if (userSecond > 53 && userSecond < 60) {
            grade = 71;
          }

          break;
        case 17:
          if (userSecond > -1 && userSecond < 3) {
            grade = 71;
          }
          if (userSecond > 2 && userSecond < 12) {
            grade = 70;
          }
          if (userSecond > 11 && userSecond < 21) {
            grade = 69;
          }
          if (userSecond > 20 && userSecond < 30) {
            grade = 68;
          }
          if (userSecond > 29 && userSecond < 40) {
            grade = 67;
          }
          if (userSecond > 39 && userSecond < 49) {
            grade = 66;
          }
          if (userSecond > 48 && userSecond < 58) {
            grade = 65;
          }
          if (userSecond > 57 && userSecond < 60) {
            grade = 64;
          }
          break;
        case 18:
          if (userSecond > -1 && userSecond < 7) {
            grade = 64;
          }
          if (userSecond > 6 && userSecond < 16) {
            grade = 63;
          }
          if (userSecond > 15 && userSecond < 25) {
            grade = 62;
          }
          if (userSecond > 24 && userSecond < 34) {
            grade = 61;
          }
          if (userSecond > 33 && userSecond < 43) {
            grade = 60;
          }
          if (userSecond > 42 && userSecond < 52) {
            grade = 59;
          }
          if (userSecond > 51 && userSecond < 60) {
            grade = 58;
          }
          break;
        case 19:
          if (userSecond > -1 && userSecond < 1) {
            grade = 58;
          }
          if (userSecond > 0 && userSecond < 10) {
            grade = 57;
          }
          if (userSecond > 9 && userSecond < 20) {
            grade = 56;
          }
          if (userSecond > 19 && userSecond < 29) {
            grade = 55;
          }
          if (userSecond > 28 && userSecond < 38) {
            grade = 54;
          }
          if (userSecond > 37 && userSecond < 47) {
            grade = 53;
          }
          if (userSecond > 46) {
            grade = 50;
          }
          break;
      }
    }
    alert("הציון שלך הוא     " + grade);

  }
}
