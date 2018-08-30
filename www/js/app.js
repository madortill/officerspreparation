// Ionic officerspreparation App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'officerspreparation' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
  .module("officerspreparation", ["ionic"])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // about page
      .state("about", {
        url: "/about",
        templateUrl: "templates/about.html"
      })

      //memory game page
      .state("gameMemory", {
        url: "/gameMemory",
        templateUrl: "templates/gameMemory.html",
        controller: "MemoryGameController"
      })

      //choose exercise page
      .state("exercise", {
        url: "/exercise",
        templateUrl: "templates/exercises/exercise.html",
        controller: "exerciseController"
      })
      //choose exercise page
      .state("billionaire", {
        url: "/billionaire",
        templateUrl: "templates/exercises/billionaireGame.html",
        controller: "billionairecontroller"
      })
      //tsets page
      .state("tests", {
        url: "/tests",
        templateUrl: "templates/tests.html",
        controller: "testcontroller"
      })
      .state("adjustDate", {
        url: "/adjustDate",
        templateUrl: "templates/exercises/adjustDate.html",
        controller: "adjustDatecontroller"
      })

      //sport page
      .state("sportProgramFrontPg", {
        url: "/sportProgramFrontPg",
        templateUrl: "templates/fitnessTraining/sportProgramFrontPg.html",
        controller: "sportProgramFrontPgController"
      })

      .state("chooseDifficulty", {
        url: "/chooseDifficulty",
        templateUrl: "templates/fitnessTraining/strengthTraining/chooseDifficulty.html",
        controller: "chooseDifficultyController"
      })

      .state("training", {
        url: "/training",
        templateUrl: "templates/fitnessTraining/strengthTraining/training.html",
        controller: "trainingController"
      })

      .state("exerciseList", {
        url: "/exerciseList",
        templateUrl: "templates/fitnessTraining/strengthTraining/exerciseList.html",
        controller: "exerciseListController"
      })

      .state("runningCalculator", {
        url: "/runningCalculator",
        templateUrl: "templates/fitnessTraining/runningCalculator.html",
        controller: "runningCalculatorController"
      })

      .state("exerciseDescription", {
        url: "/exerciseDescription",
        templateUrl: "templates/fitnessTraining/strengthTraining/exerciseDescription.html",
        controller: "exerciseDescriptionController"
      })

      //run program
      .state("runChooseDifficulty", {
        url: "/runChooseDifficulty",
        templateUrl: "templates/fitnessTraining/runingProgram/runChooseDifficulty.html",
        controller: "runChooseDifficultyController"
      })

      .state("weeklyRunList", {
        url: "/weeklyRunList",
        templateUrl: "templates/fitnessTraining/runingProgram/weeklyRunList.html",
        controller: "weeklyRunListController"
      })

      .state("runTrainingList", {
        url: "/runTrainingList",
        templateUrl: "templates/fitnessTraining/runingProgram/runTrainingList.html",
        controller: "runTrainingListController"
      })

      //book page
      .state("book", {
        url: "/book",
        templateUrl: "templates/book.html",
        controller: "BookController"
      })
      // the book pages
      /************************************** */
      //first chapter
      .state("1_1opening", {
        url: "/1_1opening",
        templateUrl: "templates/book/firstChapter/1_1opening.html",
        controller: "TopicContentController"
      })
      .state("1_2basicsDemocracy", {
        url: "/1_2basicsDemocracy",
        templateUrl: "templates/book/firstChapter/1_2basicsDemocracy.html",
        controller: "TopicContentController"
      })
      .state("1_3nationalSymbols", {
        url: "/1_3nationalSymbols",
        templateUrl: "templates/book/firstChapter/1_3nationalSymbols.html",
        controller: "TopicContentController"
      })
      .state("1_4summary", {
        url: "/1_4summary",
        templateUrl: "templates/book/firstChapter/1_4summary.html",
        controller: "TopicContentController"
      })

      //Second chapter
      .state("2_1CultureAndFaithInIsrael", {
        url: "/2_1CultureAndFaithInIsrael",
        templateUrl: "templates/book/secondChapter/2_1CultureAndFaithInIsrael.html",
        controller: "TopicContentController"
      })
      .state("2_2TheWorldOfJewishFaith", {
        url: "/2_2TheWorldOfJewishFaith",
        templateUrl: "templates/book/secondChapter/2_2TheWorldOfJewishFaith.html",
        controller: "TopicContentController"
      })
      .state("2_3MinoritiesInTheStateOfIsrael", {
        url: "/2_3MinoritiesInTheStateOfIsrael",
        templateUrl: "templates/book/secondChapter/2_3MinoritiesInTheStateOfIsrael.html",
        controller: "TopicContentController"
      })
      .state("2_4TheJewish-IsraeliCalendarHolidaysAndFestivals", {
        url: "/2_4TheJewish-IsraeliCalendarHolidaysAndFestivals",
        templateUrl: "templates/book/secondChapter/2_4TheJewish-IsraeliCalendarHolidaysAndFestivals.html",
        controller: "TopicContentController"
      })
      .state("2_4_3JewishHolidays", {
        url: "/2_4_3JewishHolidays",
        templateUrl: "templates/book/secondChapter/2_4_3JewishHolidays.html",
        controller: "TopicContentController"
      })
      .state("2_4_4DruzeHolidays", {
        url: "/2_4_4DruzeHolidays",
        templateUrl: "templates/book/secondChapter/2_4_4DruzeHolidays.html",
        controller: "TopicContentController"
      })
      .state("2_4_5MuslimHolidays", {
        url: "/2_4_5MuslimHolidays",
        templateUrl: "templates/book/secondChapter/2_4_5MuslimHolidays.html",
        controller: "TopicContentController"
      })
      .state("2_4_6ChristianHolidays", {
        url: "/2_4_6ChristianHolidays",
        templateUrl: "templates/book/secondChapter/2_4_6ChristianHolidays.html",
        controller: "TopicContentController"
      })
      .state("2_4_7CivilianHolidays", {
        url: "/2_4_7CivilianHolidays",
        templateUrl: "templates/book/secondChapter/2_4_7CivilianHolidays.html",
        controller: "TopicContentController"
      })
      .state("2_5Summary", {
        url: "/2_5Summary",
        templateUrl: "templates/book/secondChapter/2_5Summary.html",
        controller: "TopicContentController"
      })

      //third chapter
      .state("3_1opening", {
        url: "/3_1opening",
        templateUrl: "templates/book/thirdChapter/3_1opening.html",
        controller: "TopicContentController"
      })
      .state("3_2bibleEra", {
        url: "/3_2bibleEra",
        templateUrl: "templates/book/thirdChapter/3_2bibleEra.html",
        controller: "TopicContentController"
      })
      .state("3_3firstTempleDays", {
        url: "/3_3firstTempleDays",
        templateUrl: "templates/book/thirdChapter/3_3firstTempleDays.html",
        controller: "TopicContentController"
      })
      .state("3_4babylonianCaptivity", {
        url: "/3_4babylonianCaptivity",
        templateUrl: "templates/book/thirdChapter/3_4babylonianCaptivity.html",
        controller: "TopicContentController"
      })
      .state("3_5secondTempleDays", {
        url: "/3_5secondTempleDays",
        templateUrl: "templates/book/thirdChapter/3_5secondTempleDays.html",
        controller: "TopicContentController"
      })
      .state("3_6templeDestruction", {
        url: "/3_6templeDestruction",
        templateUrl: "templates/book/thirdChapter/3_6templeDestruction.html",
        controller: "TopicContentController"
      })
      .state("3_7judeaLifeAfterDestruction", {
        url: "/3_7judeaLifeAfterDestruction",
        templateUrl: "templates/book/thirdChapter/3_7judeaLifeAfterDestruction.html",
        controller: "TopicContentController"
      })
      .state("3_8jewishInBabylon", {
        url: "/3_8jewishInBabylon",
        templateUrl: "templates/book/thirdChapter/3_8jewishInBabylon.html",
        controller: "TopicContentController"
      })
      .state("3_9rishonimEra", {
        url: "/3_9rishonimEra",
        templateUrl: "templates/book/thirdChapter/3_9rishonimEra.html",
        controller: "TopicContentController"
      })
      .state("3_10alhambraDecree", {
        url: "/3_10alhambraDecree",
        templateUrl: "templates/book/thirdChapter/3_10alhambraDecree.html",
        controller: "TopicContentController"
      })
      .state("3_11jewsInPoland", {
        url: "/3_11jewsInPoland",
        templateUrl: "templates/book/thirdChapter/3_11jewsInPoland.html",
        controller: "TopicContentController"
      })
      .state("3_12emancipationChallenge", {
        url: "/3_12emancipationChallenge",
        templateUrl: "templates/book/thirdChapter/3_12emancipationChallenge.html",
        controller: "TopicContentController"
      })
      .state("3_13jewishInModernDays", {
        url: "/3_13jewishInModernDays",
        templateUrl: "templates/book/thirdChapter/3_13jewishInModernDays.html",
        controller: "TopicContentController"
      })
      .state("3_14nationalIdea", {
        url: "/3_14nationalIdea",
        templateUrl: "templates/book/thirdChapter/3_14nationalIdea.html",
        controller: "TopicContentController"
      })
      .state("3_15autoEmancipation", {
        url: "/3_15autoEmancipation",
        templateUrl: "templates/book/thirdChapter/3_15autoEmancipation.html",
        controller: "TopicContentController"
      })
      .state("3_16startOfZionism", {
        url: "/3_16startOfZionism",
        templateUrl: "templates/book/thirdChapter/3_16startOfZionism.html",
        controller: "TopicContentController"
      })
      .state("3_17ideasZionism", {
        url: "/3_17ideasZionism",
        templateUrl: "templates/book/thirdChapter/3_17ideasZionism.html",
        controller: "TopicContentController"
      })
      .state("3_18summary", {
        url: "/3_18summary",
        templateUrl: "templates/book/thirdChapter/3_18summary.html",
        controller: "TopicContentController"
      })
      .state("3_19jewishPupulationByCountry", {
        url: "/3_19jewishPupulationByCountry",
        templateUrl: "templates/book/thirdChapter/3_19jewishPupulationByCountry.html",
        controller: "TopicContentController"
      })

      //fourth chapter
      .state("4_1opening", {
        url: "/4_1opening",
        templateUrl: "templates/book/fourthChapter/4_1opening.html",
        controller: "TopicContentController"
      })
      .state("4_2RiseOfTheNaziRegime", {
        url: "/4_2RiseOfTheNaziRegime",
        templateUrl: "templates/book/fourthChapter/4_2RiseOfTheNaziRegime.html",
        controller: "TopicContentController"
      })
      .state("4_3TheJewsInWorldWarII", {
        url: "/4_3TheJewsInWorldWarII",
        templateUrl: "templates/book/fourthChapter/4_3TheJewsInWorldWarII.html",
        controller: "TopicContentController"
      })
      .state("4_4FinalSolution", {
        url: "/4_4FinalSolution",
        templateUrl: "templates/book/fourthChapter/4_4FinalSolution.html",
        controller: "TopicContentController"
      })
      .state("4_5RescueAndResistance", {
        url: "/4_5RescueAndResistance",
        templateUrl: "templates/book/fourthChapter/4_5RescueAndResistance.html",
        controller: "TopicContentController"
      })
      .state("4_6AtTheEndOfTheWar", {
        url: "/4_6AtTheEndOfTheWar",
        templateUrl: "templates/book/fourthChapter/4_6AtTheEndOfTheWar.html",
        controller: "TopicContentController"
      })
      .state("4_7TheHolocaustAndTheStateOfIsrael", {
        url: "/4_7TheHolocaustAndTheStateOfIsrael",
        templateUrl: "templates/book/fourthChapter/4_7TheHolocaustAndTheStateOfIsrael.html",
        controller: "TopicContentController"
      })
      .state("4_8Summary", {
        url: "/4_8Summary",
        templateUrl: "templates/book/fourthChapter/4_8Summary.html",
        controller: "TopicContentController"
      })

      //chapter five
      .state("5_1opening", {
        url: "/5_1opening",
        templateUrl: "templates/book/fifthChapter/5_1opening.html",
        controller: "TopicContentController"
      })
      .state("5_2TheBeginningOfTheNewSettlement", {
        url: "/5_2TheBeginningOfTheNewSettlement",
        templateUrl: "templates/book/fifthChapter/5_2TheBeginningOfTheNewSettlement.html",
        controller: "TopicContentController"
      })
      .state("5_3TheSecondAliyah", {
        url: "/5_3TheSecondAliyah",
        templateUrl: "templates/book/fifthChapter/5_3TheSecondAliyah.html",
        controller: "TopicContentController"
      })
      .state("5_4TheRevivalOfTheHebrewlanguage", {
        url: "/5_4TheRevivalOfTheHebrewlanguage",
        templateUrl: "templates/book/fifthChapter/5_4TheRevivalOfTheHebrewlanguage.html",
        controller: "TopicContentController"
      })
      .state("5_5WorldWarI", {
        url: "/5_5WorldWarI",
        templateUrl: "templates/book/fifthChapter/5_5WorldWarI.html",
        controller: "TopicContentController"
      })
      .state("5_6DuringTheBritishMandatePeriod", {
        url: "/5_6DuringTheBritishMandatePeriod",
        templateUrl: "templates/book/fifthChapter/5_6DuringTheBritishMandatePeriod.html",
        controller: "TopicContentController"
      })
      .state("5_7TriangleoftheLandOfIsrael", {
        url: "/5_7TriangleoftheLandOfIsrael",
        templateUrl: "templates/book/fifthChapter/5_7TriangleoftheLandOfIsrael.html",
        controller: "TopicContentController"
      })
      .state("5_8EretzIsraelAndTheJewishYishuvDuringWorldWarII", {
        url: "/5_8EretzIsraelAndTheJewishYishuvDuringWorldWarII",
        templateUrl: "templates/book/fifthChapter/5_8EretzIsraelAndTheJewishYishuvDuringWorldWarII.html",
        controller: "TopicContentController"
      })
      .state("5_9TowardsAState", {
        url: "/5_9TowardsAState",
        templateUrl: "templates/book/fifthChapter/5_9TowardsAState.html",
        controller: "TopicContentController"
      })
      .state("5_10Summary", {
        url: "/5_10Summary",
        templateUrl: "templates/book/fifthChapter/5_10Summary.html",
        controller: "TopicContentController"
      })

      //sixth chapter
      .state("6_1settelmentToCountry", {
        url: "/6_1settelmentToCountry",
        templateUrl: "templates/book/sixthChapter/6_1settelmentToCountry.html",
        controller: "TopicContentController"
      })
      .state("6_2aliyahAndIntegration", {
        url: "/6_2aliyahAndIntegration",
        templateUrl: "templates/book/sixthChapter/6_2aliyahAndIntegration.html",
        controller: "TopicContentController"
      })
      .state("6_3mainEvents", {
        url: "/6_3mainEvents",
        templateUrl: "templates/book/sixthChapter/6_3mainEvents.html",
        controller: "TopicContentController"
      })
      .state("6_4presidentsOfIsrael", {
        url: "/6_4presidentsOfIsrael",
        templateUrl: "templates/book/sixthChapter/6_4presidentsOfIsrael.html",
        controller: "TopicContentController"
      })
      .state("6_5primeMinisterOfIsrael", {
        url: "/6_5primeMinisterOfIsrael",
        templateUrl: "templates/book/sixthChapter/6_5primeMinisterOfIsrael.html",
        controller: "TopicContentController"
      })
      .state("6_6chiefOfGeneralStaff", {
        url: "/6_6chiefOfGeneralStaff",
        templateUrl: "templates/book/sixthChapter/6_6chiefOfGeneralStaff.html",
        controller: "TopicContentController"
      })
      .state("6_7summary", {
        url: "/6_7summary",
        templateUrl: "templates/book/sixthChapter/6_7summary.html",
        controller: "TopicContentController"
      })
      //seventh chapter
      .state("7_1opening", {
        url: "/7_1opening",
        templateUrl: "templates/book/seventhChapter/7_1opening.html",
        controller: "TopicContentController"
      })
      .state("7_2JewishDefenseForceDevelopment", {
        url: "/7_2JewishDefenseForceDevelopment",
        templateUrl: "templates/book/seventhChapter/7_2JewishDefenseForceDevelopment.html",
        controller: "TopicContentController"
      })
      .state("7_3TheEstablishmentOfTheIDF", {
        url: "/7_3TheEstablishmentOfTheIDF",
        templateUrl: "templates/book/seventhChapter/7_3TheEstablishmentOfTheIDF.html",
        controller: "TopicContentController"
      })
      .state("7_4WarsAndIDFoperations", {
        url: "/7_4WarsAndIDFoperations",
        templateUrl: "templates/book/seventhChapter/7_4WarsAndIDFoperations.html",
        controller: "TopicContentController"
      })
      .state("7_5Summary", {
        url: "/7_5Summary",
        templateUrl: "templates/book/seventhChapter/7_5Summary.html",
        controller: "TopicContentController"
      })

      /*********************************************** */
      //topic list pg
      .state("topic", {
        url: "/topic",
        templateUrl: "templates/topic.html",
        controller: "TopicController"
      })

      // Topic Content page
      .state("topiccontent", {
        url: "/topiccontent",
        templateUrl: "templates/topiccontent.html",
        controller: "TopicContentController"
      })

      // home page
      .state("home", {
        url: "/home",
        templateUrl: "templates/home.html"
      });

    // home page when we open the app
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.otherwise("/home");
  });
