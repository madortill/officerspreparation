angular.module('officerspreparation').controller('MemoryGameController', MemoryGameController);

MemoryGameController.$inject = ['$scope', 'DataService'];
var i = 0;

function MemoryGameController($scope, DataService) {

  localStorage.setItem('game1', '1000');
  localStorage.setItem('game2', '800');
  localStorage.setItem('game3', '600');


  var score = localStorage.getItem("game3");
  if (score < 700) {
    localStorage.setItem('game3', '750');

  }
}
