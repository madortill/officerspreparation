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
      // .state('book', {
      //   url: '/book',
      //   templateUrl: 'templates/book/israel-id/1.1opening.html',
      // })
      // .state('book', {
      //   url: '/book',
      //   templateUrl: 'templates/book/israel-id/1.1opening.html',
      // })

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
