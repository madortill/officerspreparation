// Ionic officerspreparation App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'officerspreparation' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('officerspreparation', ['ionic'])

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
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })

      //memory game page
      .state('gameMemory', {
        url: '/gameMemory',
        templateUrl: 'templates/gameMemory.html',
        controller: 'MemoryGameController'
      })

      //choose exercise page
      .state('exercise', {
        url: '/exercise',
        templateUrl: 'templates/exercises/exercise.html',
      })

      //tsets page
      .state('tests', {
        url: '/tests',
        templateUrl: 'templates/tests.html',
      })

      //sport page
      .state('chooseGender', {
        url: '/chooseGender',
        templateUrl: 'templates/fitnessTraining/chooseGender.html',
      })

      //book page
      .state('book', {
        url: '/book',
        templateUrl: 'templates/book.html',
        controller: 'BookController'
      })
      // the book pages
      /************************************** */
      //first chapter
      .state('1_1opening', {
        url: '/1_1opening',
        templateUrl: 'templates/book/firstChapter/1_1opening.html',
        controller: 'TopicContentController'
      })
      .state('1_2basicsDemocracy', {
        url: '/1_2basicsDemocracy',
        templateUrl: 'templates/book/firstChapter/1_2basicsDemocracy.html',
        controller: 'TopicContentController'

      })
      .state('1_3nationalSymbols', {
        url: '/1_3nationalSymbols',
        templateUrl: 'templates/book/firstChapter/1_3nationalSymbols.html',
        controller: 'TopicContentController'

      })
      .state('1_4summary', {
        url: '/1_4summary',
        templateUrl: 'templates/book/firstChapter/1_4summary.html',
        controller: 'TopicContentController'
      })
      //Second chapter
      .state('2_1CultureAndFaithInIsrael', {
        url: '/2_1CultureAndFaithInIsrael',
        templateUrl: 'templates/book/secondChapter/2_1CultureAndFaithInIsrael.html',
        controller: 'TopicContentController'
      })
      .state('2_2TheWorldOfJewishFaith', {
        url: '/2_2TheWorldOfJewishFaith',
        templateUrl: 'templates/book/secondChapter/2_2TheWorldOfJewishFaith.html',
        controller: 'TopicContentController'
      })

      //third chapter

      .state('3_1opening', {
        url: '/3_1opening',
        templateUrl: 'templates/book/thirdChapter/3_1opening.html',
        controller: 'TopicContentController'
      })
      .state('3_2bibleEra', {
        url: '/3_2bibleEra',
        templateUrl: 'templates/book/thirdChapter/3_2bibleEra.html',
        controller: 'TopicContentController'

      })
      .state('3_3firstTempleDays', {
        url: '/3_3firstTempleDays',
        templateUrl: 'templates/book/thirdChapter/3_3firstTempleDays.html',
        controller: 'TopicContentController'

      })
      .state('3_4babylonianCaptivity', {
        url: '/3_4babylonianCaptivity',
        templateUrl: 'templates/book/thirdChapter/3_4babylonianCaptivity.html',
        controller: 'TopicContentController'
      })
      .state('3_5secondTempleDays', {
        url: '/3_5secondTempleDays',
        templateUrl: 'templates/book/thirdChapter/3_5secondTempleDays.html',
        controller: 'TopicContentController'
      })
      .state('3_6templeDestruction', {
        url: '/3_6templeDestruction',
        templateUrl: 'templates/book/thirdChapter/3_6templeDestruction.html',
        controller: 'TopicContentController'

      })
      .state('3_7judeaLifeAfterDestruction', {
        url: '/3_7judeaLifeAfterDestruction',
        templateUrl: 'templates/book/thirdChapter/3_7judeaLifeAfterDestruction.html',
        controller: 'TopicContentController'

      })
      .state('3_8jewishInBabylon', {
        url: '/3_8jewishInBabylon',
        templateUrl: 'templates/book/thirdChapter/3_8jewishInBabylon.html',
        controller: 'TopicContentController'
      })
      .state('3_9rishonimEra', {
        url: '/3_9rishonimEra',
        templateUrl: 'templates/book/thirdChapter/3_9rishonimEra.html',
        controller: 'TopicContentController'
      })
      .state('3_10alhambraDecree', {
        url: '/3_10alhambraDecree',
        templateUrl: 'templates/book/thirdChapter/3_10alhambraDecree.html',
        controller: 'TopicContentController'

      })
      .state('3_11jewsInPoland', {
        url: '/3_11jewsInPoland',
        templateUrl: 'templates/book/thirdChapter/3_11jewsInPoland.html',
        controller: 'TopicContentController'

      })
      .state('3_12emancipationChallenge', {
        url: '/3_12emancipationChallenge',
        templateUrl: 'templates/book/thirdChapter/3_12emancipationChallenge.html',
        controller: 'TopicContentController'
      })
      .state('3_13jewishInModernDays', {
        url: '/3_13jewishInModernDays',
        templateUrl: 'templates/book/thirdChapter/3_13jewishInModernDays.html',
        controller: 'TopicContentController'
      })
      .state('3_14nationalIdea', {
        url: '/3_14nationalIdea',
        templateUrl: 'templates/book/thirdChapter/3_14nationalIdea.html',
        controller: 'TopicContentController'

      })
      .state('3_15autoEmancipation', {
        url: '/3_15autoEmancipation',
        templateUrl: 'templates/book/thirdChapter/3_15autoEmancipation.html',
        controller: 'TopicContentController'

      })
      .state('3_16startOfZionism', {
        url: '/3_16startOfZionism',
        templateUrl: 'templates/book/thirdChapter/3_16startOfZionism.html',
        controller: 'TopicContentController'
      })
      .state('3_17ideasZionism', {
        url: '/3_17ideasZionism',
        templateUrl: 'templates/book/thirdChapter/3_17ideasZionism.html',
        controller: 'TopicContentController'

      })
      .state('3_18summary', {
        url: '/3_18summary',
        templateUrl: 'templates/book/thirdChapter/3_18summary.html',
        controller: 'TopicContentController'

      })
      .state('3_19jewishPupulationByCountry', {
        url: '/3_19jewishPupulationByCountry',
        templateUrl: 'templates/book/thirdChapter/3_19jewishPupulationByCountry.html',
        controller: 'TopicContentController'
      })

      /*********************************************** */
      //topic list pg
      .state('topic', {
        url: '/topic',
        templateUrl: 'templates/topic.html',
        controller: 'TopicController',
      })

      // Topic Content page
      .state('topiccontent', {
        url: '/topiccontent',
        templateUrl: 'templates/topiccontent.html',
        controller: 'TopicContentController'
      })



      // home page
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
      });



    // home page when we open the app
    $urlRouterProvider.when('/', "/home");
    $urlRouterProvider.otherwise('/home');
  });
