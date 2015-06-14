var app = angular.module('calcuApp', []);

app.controller('calcuCtrl', ['$scope', 
                             'BasicOperationService', 
                             'MathService', 
                             'BasicOperationsServiceV2', 
  function($scope, BasicOperationService, MathService, BasicOperationsServiceV2) {
  self = this;

 
  $scope.add = function() {
    $scope.answer = BasicOperationService.add($scope.firstNum, $scope.  secondNum);
  };

  $scope.subtract = function() {
    $scope.answer = BasicOperationService.subtract($scope.firstNum, $scope. secondNum);
  };

  $scope.multiply = function() {
    $scope.answer = BasicOperationService.multiply($scope.firstNum, $scope. secondNum);
  };

  $scope.divide = function() {
    $scope.answer = BasicOperationService.divide($scope.firstNum, $scope. secondNum);
  };

  $scope.square = function() {
    $scope.answer = MathService.square($scope.firstNum);
  };

  $scope.cube = function() {
    $scope.answer = MathService.cube($scope.firstNum);
  };

  // To demonstrate factories:

  $scope.addv2 = function() {
    $scope.answer = BasicOperationsServiceV2.add($scope.firstNum, $scope.  secondNum);
  };

  $scope.subtractv2 = function() {
    $scope.answer = BasicOperationsServiceV2.subtract($scope.firstNum, $scope. secondNum);
  };

}]);

app.factory('BasicOperationService', [function() {

  var factory = {};

  factory.add = function(a,b) {
    return (parseInt(a) + parseInt(b));
  };

  factory.subtract = function(a,b) {
    return (parseInt(a) - parseInt(b));
  };

  factory.multiply = function(a,b) {
    return (parseInt(a) * parseInt(b));
  };

  factory.divide = function(a,b) {
    return (parseInt(a) / parseInt(b));
  };

  return factory;
  
}]);

app.service('MathService', ['BasicOperationService', function(BasicOperationService) {
  this.square = function(a) {
    return BasicOperationService.multiply(a, a);
  };

  this.cube = function(a) {
    return BasicOperationService.multiply(this.square(a), a);
  }
}]);


app.service('BasicOperationsServiceV2', [function() {
  this.add = function(a, b) {
    return (parseInt(a) + parseInt(b));
  };

  this.subtract = function(a, b) {
    return (parseInt(a) - parseInt(b));
  }
}]);