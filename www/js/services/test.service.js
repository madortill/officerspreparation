(function () {
  angular.module('officerspreparation').factory('TestService', function () {
    // Might use a resource here that returns a JSON array

    var test = [{
      question: "first question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "second question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "third question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "fourth question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "fiftth question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "sixth question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "seventh question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }]

    return {
      test: test

    };
  });
})();
