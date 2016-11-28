/**
 * Created by Sam on 27/11/2016.
 */

MyApp.controller('TodoController', function ($scope, $http) {
  "use strict";


  $scope.newTodo = {
    userId: user.id,
    title: "",
    description: ""
  };
  $scope.todosList = [];

  $scope.$watch('todosList', function (newVal, oldVal) {
    $scope.todosList = newVal;
  }, false);


  $scope.init = function () {
    socket.on('todo.complete', function (message) {
      $scope.todosList.push(message.todo);
      $scope.$apply();
    });

  }

  $scope.createTodo = function () {
    socket.emit(`todo.create`, $scope.newTodo);
    /*$http({
     method: 'POST',
     url: '/todo/create',
     data: $scope.newTodo
     }).then(
     function (response) {
     console.log(response);
     },
     function (response) {
     console.log(response);
     }
     )*/
  }

});
